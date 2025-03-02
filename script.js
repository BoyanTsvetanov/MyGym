$(document).ready(function(){

    
    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('active');

        if($(window).scrollTop() > 30){
            $('.header').addClass('active');
        }
        else{
            $('.header').removeClass('active');
        }

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

})
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.getElementById('menu');
    const closeIcon = document.querySelector('.fa-times');

    // Function to toggle the navbar
    function toggleNavbar() {
        navbar.classList.toggle('active');
    }

    // Event listener for the menu icon
    menuIcon.addEventListener('click', function() {
        toggleNavbar();
    });

    // Event listener for the close icon
    closeIcon.addEventListener('click', function() {
        toggleNavbar();
    });
});

let planContent = document.getElementById("training-content");
// let muscleText = document.getElementById("muscle-text");
let homeContent = document.getElementById("home-content");
let thridDimensionContent = document.getElementById("container3D");

window.addEventListener('scroll', function() {
    var value = window.scrollY;

    var newTop = -value * 0.15;

    // Set a maximum limit for the top position
    var maxTop = -200; // Replace with your desired maximum top value

    // If the new top exceeds the maximum, set it to the maximum
    if (newTop < maxTop) {
        newTop = maxTop;
    }

    // Apply the new top position
    planContent.style.top = newTop + 'px';
    // thridDimensionContent.style.top = -value * 0.15 + 'px';
    
    // Increase the font size as you scroll, with a maximum limit
    let baseFontSize = 6; // Base size in rem
    let maxIncrease = 1.5; // Maximum increase in rem
    // let newFontSize = baseFontSize + Math.min(value * 0.02, maxIncrease); // Increase by factor, with a max of 6rem
    // muscleText.style.fontSize = newFontSize + 'rem';
});

const images = [
    "/images/artwork.png",
    "/images/artwork1.png",
    "/images/artwork2.png",
    "/images/artwork3.png",
    "/images/artwork4.png",
    "/images/artwork6.png",
    "/images/artwork8.jpg"
];

let currentIndex = 0;

function changeBackground() {
    const homeElement = document.querySelector('.home');
    
    // Update the background with the next image
    homeElement.style.background = ` 
        url('${images[currentIndex]}') no-repeat center center fixed
    `;
    homeElement.style.backgroundSize = "cover";
    
    // Move to the next image in the array
    currentIndex = (currentIndex + 1) % images.length;
}
changeBackground();

// Start the slideshow, changing the background every 5 seconds
setInterval(changeBackground, 8000);




//3D

// import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

// // Create a Three.JS Scene
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// // Test geometry
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById("container3D").appendChild(renderer.domElement);

// camera.position.z = 5;

// const controls = new OrbitControls(camera, renderer.domElement);

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update(); // Update controls
//   renderer.render(scene, camera);
// }

// window.addEventListener("resize", function () {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// animate();
