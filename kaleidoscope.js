const video = document.getElementById("webcam");
const canvas = document.getElementById("kaleidoscope");
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

// Webカメラのセットアップ
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
    video.play();
  })
  .catch((err) => console.error("カメラへのアクセスエラー:", err));

// シェーダーの定義
const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    uniform sampler2D tDiffuse;
    uniform float time;
    varying vec2 vUv;

    const float PI = 3.14159265358979323846;

    vec2 kaleidoscope(vec2 uv) {
        vec2 p = uv - 0.5;
        float r = length(p);
        float angle = atan(p.y, p.x);
        
        float segments = 12.0;
        angle = mod(angle, PI * 2.0 / segments);
        angle = abs(angle - PI / segments);
        
        return vec2(cos(angle), sin(angle)) * r + 0.5;
    }

    void main() {
        vec2 uv = kaleidoscope(vUv);
        
        // 幾何学的なパターンを追加
        float scale = 5.0;
        vec2 scaledUV = uv * scale;
        vec2 cellUV = fract(scaledUV) - 0.5;
        float cellDistance = length(cellUV);
        
        // 時間に基づいて動きを追加
        float distortion = sin(cellDistance * 10.0 - time * 2.0) * 0.1;
        uv += cellUV * distortion;

        gl_FragColor = texture2D(tDiffuse, uv);
    }
`;

// マテリアルの作成
const texture = new THREE.VideoTexture(video);
const uniforms = {
  tDiffuse: { value: texture },
  time: { value: 0 },
};
const material = new THREE.ShaderMaterial({
  uniforms: uniforms,
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});

// 平面ジオメトリの作成
const geometry = new THREE.PlaneGeometry(2, 2);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

camera.position.z = 1;

function animate(time) {
  requestAnimationFrame(animate);
  uniforms.time.value = time * 0.001;
  renderer.render(scene, camera);
}

animate(0);

// ウィンドウのリサイズに対応
window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
});
