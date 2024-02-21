"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";

interface ThreeCanvasProps {
  setIsLoaded: (isLoaded: boolean) => void;
}

const ThreeCanvas = ({ setIsLoaded }: ThreeCanvasProps) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // 조명 추가
    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(1, 1, 0).normalize();
    scene.add(directionalLight);

    // FBX 모델 로드
    const loader = new FBXLoader();
    loader.load(
      "/illustrations/earth.fbx",
      (object) => {
        object.scale.set(0.05, 0.05, 0.05);
        scene.add(object);
        modelRef.current = object;
        animate();
        requestAnimationFrame(() => {
          setIsLoaded(true);
        });
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    // OrbitControls 추가
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // 관성 효과
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.enableZoom = false;
    controls.minDistance = 2;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 2;

    const animate = () => {
      requestAnimationFrame(animate);
      // 모델이 로드되었다면, 모델을 회전시킵니다.
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.0025; // y축을 중심으로 회전
      }
      controls.update(); // OrbitControls 업데이트
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      // 뷰포트의 너비와 높이를 가져와서 렌더러 크기를 조정
      renderer.setSize(window.innerWidth, window.innerHeight);
      // 카메라의 종횡비(aspect)도 업데이트
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    // 창 크기 변경 이벤트에 대한 리스너 추가
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [setIsLoaded]);

  return <div ref={mountRef} />;
};

export default ThreeCanvas;
