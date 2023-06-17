import "./style.css";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import{GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as lilGui from 'lil-gui'; 
import gsap from 'gsap';

//canvas
const canvas = document.querySelector('canvas');

//scene
 const scene = new THREE.Scene();

 //camera
 const camera = new THREE.PerspectiveCamera(
    45, //field of view
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // Near
    1000 //
 );

 //initial position of the camera
  camera.position.set(-4.9, 4.4, 1.9);
  camera.rotation.set(-0.9, -0.8, -0.8);

 

 //Renderer
 const Renderer = new  THREE.WebGLRenderer({
    canvas: canvas,
 });
 Renderer.setSize(window.innerWidth, window.innerHeight);

//orbit Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

let position = 0




// gltf Loader
const gltfLoader = new GLTFLoader();
gltfLoader.load("/model/swedish-royal/scene.gltf", (gltf)=>{
    console.log(gltf);
    const model = gltf.scene;
     scene.add(model);


   window.addEventListener("mouseup", function() {
    console.log(camera.position);
    console.log(camera.rotation);
        });


        window.addEventListener("mouseup", function(){
             switch(position) {
                case 0:
                cameraMovement(-6.0, 1.72, 1.34);
                cameraRotation(-2.75, -1.24, -2.77);
                position = 1;
                break;

                case 1:
                    cameraMovement(-2.0, 3.1, -0.3);
                    cameraRotation(-3.01, -0.55, -3.07);
                    position = 2;
                    break;

                case 2:
                    cameraMovement(-1.49, 1.70, 0.48);
                    cameraRotation(0.44, 1.43, -0.44);
                    position = 3;
                    break;
                 
                case 3:
                    cameraMovement(-2.5, 2.5, -1.8);
                    cameraRotation(-1.33, -1.49, -1.33);
                    position = 4;
                    break;

                case 4:
                        cameraMovement(1.3, 2.3, 0.3);
                        cameraRotation(-0.04, 0.14, 0.00);
                        position = 5;
                        break;
                case 5:
                            cameraMovement(0.3, 3.3, 1.1);
                            cameraRotation(-0.23, 0.71, 0.15);
                            position = 6;
                            break;
                case 6:
                    cameraMovement(-1.8, 0.9, -2.2);
                    cameraRotation(2.53, -0.45, 2.84);
                    position = 0;
            } 
        }); 
    });

function cameraMovement(x, y, z){
    gsap.to(camera.position, {
        x,
        y,
        z,
        duration: 3,
    } ); 
}  
    
function cameraRotation(x, y, z){
    gsap.to(camera.rotation, {
        x,
        y,
        z,
    duration: 3,
        });
    }

const animate = () => {
    Renderer.render(scene, camera);

    // controls.update();
};

Renderer.setAnimationLoop(animate);

animate();



