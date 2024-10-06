"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ModelViewer: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        sceneRef.current = scene;
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        cameraRef.current = camera;
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        rendererRef.current = renderer;
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x87CEEB, 0); // Sky blue color with alpha 0 for transparency
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // Lighting
        const topLight = new THREE.DirectionalLight(0xffffff, 2);
        topLight.position.set(500, 500, 500);
        topLight.castShadow = true;
        scene.add(topLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 2);
        scene.add(ambientLight);

        const frontLight = new THREE.PointLight(0xffffff, 15, 100);
        frontLight.position.set(0, 0, 100);
        frontLight.castShadow = true;
        frontLight.shadow.mapSize.width = 512;
        frontLight.shadow.mapSize.height = 512;
        frontLight.shadow.camera.near = 0.5;
        frontLight.shadow.camera.far = 500;
        frontLight.shadow.bias = -0.01;
        scene.add(frontLight);

        // Load the GLB model
        const loader = new GLTFLoader();
        loader.load(
            'https://cdn.builder.io/o/assets%2F105f2061e4de4572989bc0746b5c0807%2F960f073c99d04c61bf9b7bc6a5599185?alt=media&token=e4028a40-6e60-4755-8450-6c66f9f8628f&apiKey=105f2061e4de4572989bc0746b5c0807',
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
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.error('An error happened while loading the model:', error);
            }
        );

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            if (scene.children.length > 0) {
                const object = scene.children[scene.children.length - 1]; // Get the last child (assuming it's the model)
                object.rotation.y += 0.01; // Adjust the speed of rotation here
            }
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            if (cameraRef.current && rendererRef.current) {
                cameraRef.current.aspect = window.innerWidth / window.innerHeight;
                cameraRef.current.updateProjectionMatrix();
                rendererRef.current.setSize(window.innerWidth, window.innerHeight);
            }
        };
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && rendererRef.current) {
                mountRef.current.removeChild(rendererRef.current.domElement);
            }
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ModelViewer;