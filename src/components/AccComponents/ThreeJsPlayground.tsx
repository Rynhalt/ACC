'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ThreeJsPlayground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(
      '/3Dasset/GLTF/shirt.gltf', // Renamed file
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.1, 0.1, 0.1); // Adjust scale if needed
        scene.add(model);
      },
      (progress) => {
        if (progress.total) {
          console.log(`Loading: ${(progress.loaded / progress.total) * 100}%`);
        } else {
          console.log(`Loading: ${progress.loaded} bytes loaded`);
        }
      },
      (error) => {
        console.error('An error happened while loading the GLTF model:', error);
      }
    );

    camera.position.set(0, 0, 5);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Add this line
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreeJsPlayground;
