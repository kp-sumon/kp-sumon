const container = document.getElementById('canvas-container');
if (container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    // ৪00টি ভাসমান কণা বা স্টার তৈরি
    for (let i = 0; i < 400; i++) {
        vertices.push(THREE.MathUtils.randFloatSpread(1500)); // x
        vertices.push(THREE.MathUtils.randFloatSpread(1500)); // y
        vertices.push(THREE.MathUtils.randFloatSpread(1500)); // z
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const material = new THREE.PointsMaterial({ color: 0xa855f7, size: 2.5, transparent: true, opacity: 0.6 });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 500;

    // অ্যানিমেশন লুপ
    function animate() {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.001;
        renderer.render(scene, camera);
    }
    animate();

    // স্ক্রিন রিসাইজ হ্যান্ডলার
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

