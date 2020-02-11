var canvas = document.getElementById("canvas");
//SCÉNA
var height = 500;
var width = 500;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(95, height / width, 0.1, 1000); //KAMERA
//POZADÍ
var renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(width, height);
scene.background = new THREE.Color(0xffffff); //0xaaaaaa BARVA
//SVĚTLA
var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.intensity = 0.2;
scene.add(directionalLight);
directionalLight.position.set(1, 1, 1);
var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight2.intensity = 0.2;
scene.add(directionalLight2);
directionalLight2.position.set(-1, -1, -1);
//SOUŘADNICE KAMERA
var controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.x = 13;
camera.position.z = 14;
camera.position.y = 6;
controls.update();
/*
>UDĚLAT FUNKCI GLOBÁLNÍ
>TEST ANIM
>POPIS
*/
function check() {
    if (document.getElementById("design_pc").checked) {
        buildPc();
    }
    if (document.getElementById("basic_cleaning_pc").checked) {
        hardwareJob();
    } else {
        web();
    }
}

check();

//#########################PRVNÍ ANIMACE#########################

function hardwareJob() {
    //LOKÁLNÍ PROMĚNNÉ
    var m;
    var mixer;
    var loader = new THREE.FBXLoader();
    //NAČTE SE MODEL
    loader.load("/static/models/PC1.fbx", function(model) {
        scene.add(model);
        m = model;
        m.position.set(0, -10, 0);
        mixer = new THREE.AnimationMixer(m);
        startAnim("Cylinder|CylinderAction");
    });
    //TOČÍCÍ SE VENTILÁTOR
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        if (mixer) {
            mixer.update(0.01);
        }
        renderer.render(scene, camera);
    }
    animate();
    //ANIMACE SPREJE
    function anim1() {
        startAnim("Cube.003|Cube.003Action.001", true, 1);
        startAnim("Cylinder.001|Cylinder.001Action");
    }

    function startAnim(name, clamp = false, repetitions) {
        var clips = m.animations;
        var clip = THREE.AnimationClip.findByName(clips, name);
        var action = mixer.clipAction(clip);
        action.clampWhenFinished = clamp;
        if (repetitions !== undefined) action.repetitions = repetitions;
        action.play();
    }

    check();
}
//#########################DRUHÁ ANIMACE#########################

function buildPc() {
    //LOKÁLNÍ PROMĚNNÉ
    var mTwo;
    var mixerTwo;
    var loaderTwo = new THREE.FBXLoader();
    //NAČTE SE MODEL
    loaderTwo.load("/static/models/PC2.fbx", function(modelTwo) {
        scene.add(modelTwo);
        mTwo = modelTwo;
        mTwo.position.set(0, -10, 0);
        mixerTwo = new THREE.AnimationMixer(mTwo);
        startAnimTwo("Cube|CubeAction");
    });

    function animateTwo() {
        requestAnimationFrame(animateTwo);
        controls.update();
        if (mixerTwo) {
            mixerTwo.update(0.01);
        }
        renderer.render(scene, camera);
    }
    animateTwo();
    //ANIMACE ROZLOŽENÍ PC
    function anim2() {
        startAnimTwo("Cube.142|Cube.142Action.001");
        startAnimTwo("Cube.099|Cube.099Action.001");
        startAnimTwo("Plane.162|Plane.162Action.001");
        startAnimTwo("Plane.160|Plane.160Action.001");
        startAnimTwo("Plane.161|Plane.161Action.001");
        startAnimTwo("Plane.124|Plane.124Action.001");
        startAnimTwo("Plane.164|Plane.164Action.001");
        startAnimTwo("Cube.137|Cube.137Action.002");
        startAnimTwo("Cube.138|Cube.138Action.001");
        startAnimTwo("Cube.140|Cube.140Action.001");
    }

    function startAnimTwo(name, clamp = false, repetitions) {
        var clipsTwo = mTwo.animations;
        var clipTwo = THREE.AnimationClip.findByName(clipsTwo, name);
        var actionTwo = mixerTwo.clipAction(clipTwo);
        actionTwo.clampWhenFinished = clamp;
        if (repetitions !== undefined) actionTwo.repetitions = repetitions;
        actionTwo.play();
    }

    check();
}
//#########################TŘETÍ ANIMACE#########################

function web() {
    //LOKÁLNÍ PROMĚNNÉ
    var mThree;
    var mixerThree;
    var loaderThree = new THREE.FBXLoader();
    //NAČTE SE MODEL
    loaderThree.load("/static/models/PC3.fbx", function(modelThree) {
        scene.add(modelThree);
        mThree = modelThree;
        mThree.position.set(0, -10, 0);
        mixerThree = new THREE.AnimationMixer(mThree);
        startAnimThree("Cylinder|CylinderAction");
    });

    function animateThree() {
        requestAnimationFrame(animateThree);
        controls.update();
        if (mixerThree) {
            mixerThree.update(0.01);
        }
        renderer.render(scene, camera);
    }
    //ANIMACE MYŠI
    function anim3() {
        startAnimThree("Cylinder.002|Cylinder.002Action.002");
    }

    function startAnimThree(name, clamp = false, repetitions) {
        var clipsThree = mThree.animations;
        var clipThree = THREE.AnimationClip.findByName(clipsThree, name);
        var actionThree = mixerTwo.clipAction(clipThree);
        actionThree.clampWhenFinished = clamp;
        if (repetitions !== undefined) actionThree.repetitions = repetitions;
        actionThree.play();
    }

    check();
}