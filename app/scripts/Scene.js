// example import asset
// import imgPath from './assets/img.jpg';

// TODO: add Dat.GUI
// TODO: add Stats

export default class Scene {

    constructor() {
        this.createScene()
        this.createMesh()
        this.renderer()
        

    	window.addEventListener('resize', this.onWindowResize.bind(this), false);
        this.onWindowResize();

        this.renderer.animate( this.render.bind(this) );
    }

    createScene () {
        this.container = document.querySelector( '#main' );
    	document.body.appendChild( this.container );

        this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 100 );
        this.camera.position.z = 1;

    	this.scene = new THREE.Scene();
    }

    createMesh () {
        let geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	    let material = new THREE.MeshNormalMaterial();
    	this.mesh = new THREE.Mesh( geometry, material );
    	this.scene.add( this.mesh );
    }

    renderer () {
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    	this.renderer.setPixelRatio( window.devicePixelRatio );
    	this.renderer.setSize( window.innerWidth, window.innerHeight );
    	this.container.appendChild( this.renderer.domElement );
    }

    render() {

        this.mesh.rotation.x += 0.003;
        this.mesh.rotation.y += 0.005;

    	this.renderer.render( this.scene, this.camera );
    }

    onWindowResize() {

    	this.camera.aspect = window.innerWidth / window.innerHeight;
    	this.camera.updateProjectionMatrix();
    	this.renderer.setSize( window.innerWidth, window.innerHeight );
    }
}
