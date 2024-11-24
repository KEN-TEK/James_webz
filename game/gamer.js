// script.js

// List of planets to guess
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

// Initialize game state
let attempts = 0;
const maxAttempts = 2;

// Three.js scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('gameContainer').appendChild(renderer.domElement);

// Create a simple 3D sphere for each planet
const createPlanet = (radius, color) => {
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color });
    return new THREE.Mesh(geometry, material);
};

// Add planets to the scene
const planetMeshes = planets.map((planet, index) => {
    const radius = 1 + index * 0.5; // Different sizes for planets
    const color = Math.random() * 0xffffff; // Random color
    const planetMesh = createPlanet(radius, color);
    planetMesh.position.x = index * 3 - (planets.length * 1.5); // Spread out the planets
    scene.add(planetMesh);
    return planetMesh;
});

// Camera position
camera.position.z = 10;

// Game submission logic
document.getElementById('submitGuess').addEventListener('click', () => {
    const input = document.getElementById('planetInput').value.trim();
    const feedback = document.getElementById('feedback');
    
    if (input) {
        attempts++;
        if (planets.map(p => p.toLowerCase()).includes(input.toLowerCase())) {
            feedback.textContent = `Correct! You guessed ${input}.`;
        } else {
            feedback.textContent = `Incorrect! Try again.`;
        }

        if (attempts >= maxAttempts) {
            feedback.textContent += ' Game Over! You reached the maximum attempts.';
            document.getElementById('submitGuess').disabled = true; // Disable further guessing
        }

        // Clear input
        document.getElementById('planetInput').value = '';
    }
});

// Animation loop
const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();