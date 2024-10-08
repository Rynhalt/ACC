"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Page: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: false });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x87CEEB); // Sky blue color (hex code)
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // Lighting
        const topLight = new THREE.DirectionalLight(0xffffff, 2);
        topLight.position.set(500, 500, 500);
        topLight.castShadow = true;
        scene.add(topLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 2); // White ambient light
        scene.add(ambientLight);

        // Add a very bright white point light
        const frontLight = new THREE.PointLight(0xffffff, 15, 100);
        frontLight.position.set(0, 0, 100);
        frontLight.castShadow = true; // Enable shadow casting
        frontLight.shadow.mapSize.width = 512; // Set shadow map size
        frontLight.shadow.mapSize.height = 512; // Set shadow map size
        frontLight.shadow.camera.near = 0.5; // Near clipping plane
        frontLight.shadow.camera.far = 500; // Far clipping plane
        frontLight.shadow.bias = -0.01; // Bias to reduce shadow acne
        scene.add(frontLight);

        // Add another bright point light for better illumination
        const additionalLight = new THREE.PointLight(0xffffff, 10, 100);
        additionalLight.position.set(0, 50, 100);
        additionalLight.castShadow = true; // Enable shadow casting
        additionalLight.shadow.mapSize.width = 512; // Set shadow map size
        additionalLight.shadow.mapSize.height = 512; // Set shadow map size
        additionalLight.shadow.camera.near = 0.5; // Near clipping plane
        additionalLight.shadow.camera.far = 500; // Far clipping plane
        additionalLight.shadow.bias = -0.01; // Bias to reduce shadow acne
        scene.add(additionalLight);

        // Load the GLB model
        const loader = new GLTFLoader();
        loader.load(
            'https://cdn.builder.io/o/assets%2F105f2061e4de4572989bc0746b5c0807%2F2450094cab3f4b1f95e013958d663249?alt=media&token=aba693b7-097a-41e9-be59-2e860f2af4f7&apiKey=105f2061e4de4572989bc0746b5c0807',
            (gltf) => {
                const object = gltf.scene;
                scene.add(object);

                // Center the model
                const box = new THREE.Box3().setFromObject(object);
                const center = box.getCenter(new THREE.Vector3());
                object.position.sub(center);

                // Adjust camera position based on model size
                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);
                camera.position.set(0, maxDim / 2, maxDim * 1.5);
                camera.lookAt(0, 0, 0);

                // Update controls
                controls.update();
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.error('An error happened while loading the model:', error);
            }
        );

        // OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
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

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={mountRef} style={{ width: '100%', height: '100vh' }}>
        </div>
    );
};

export default Page;