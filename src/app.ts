import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder,Tools, SceneLoader, CubeTexture, ActionManager, ExecuteCodeAction } from "@babylonjs/core";



class App {
    constructor() {
        // create the canvas html element and attach it to the webpage

        // var sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);
        // var ground: Mesh = MeshBuilder.CreateGround("ground",{width:6,height:6},scene);
        // var check = SceneLoader.ImportMesh(
        //     "",
        //     "./",
        //     "chessup4.gltf",
        //     scene,
        // );
         
            
        }
        static async delaycreate()  {
            var canvas = document.createElement("canvas");
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.id = "gameCanvas";
            document.body.appendChild(canvas);
    
            // initialize babylon scene and engine
            var engine = new Engine(canvas, true);
            var scene = new Scene(engine);
    
            var camera: ArcRotateCamera = new ArcRotateCamera("camera", Tools.ToRadians(90),Tools.ToRadians(65), 10, Vector3.Zero(), scene);
            camera.attachControl(canvas, true);
            // var light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
            let lighting = CubeTexture.CreateFromPrefilteredData("https://assets.babylonjs.com/environments/studio.env", scene);
            lighting.name = "runyonCanyon";
            lighting.gammaSpace = false;
            scene.environmentTexture = lighting;
            scene.createDefaultSkybox(scene.environmentTexture,true,(scene.activeCamera.maxZ - scene.activeCamera.minZ)/2, 0.3, false);
            var check = await SceneLoader.AppendAsync("/","chessup5.gltf",scene);
            console.log(check);
            console.log(check.meshes[1])
            // console.log(scene.getMeshByName("3D.Black.Bishop.001_primitive0"));
            // var bishop1 = scene.getMeshByName("3D.Black.Bishop.001_primitive0");
            // var bishop2 = scene.getMeshByName("3D.Black.Bishop.001_primitive1");
            // var bluebishop1 = scene.getMeshByName("3D.Black.Bishop.002_primitive0");
            // console.log("blue",bluebishop1.position)
            // bluebishop1.position.z += 3.9;
            // bishop1.position.z += 12;
            // bishop2.position.z += 12;
            // bishop1.position = new Vector3(0,0,0);
            // console.log(bishop1.position,bishop2.position)
            // console.log(bishop1.getBoundingInfo().boundingBox)
            // bishop1.actionManager = new ActionManager(scene);
            for(var i=0; i<scene.meshes.length;i++) {
                console.log(scene.meshes[i].id)
                console.log(scene.meshes[i].getAbsolutePosition())

            }
            // bishop1.actionManager.registerAction(new ExecuteCodeAction(
            //     ActionManager.OnPickTrigger,
            //     function(evt) {
            //         console.log("hello");
            //         const source = evt.meshUnderPointer;
            //         source.position.z += 5;
            //     }
            // ))
            
            
            window.addEventListener("keydown", (ev) => {
                // Shift+Ctrl+Alt+I
                if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
                    if (scene.debugLayer.isVisible()) {
                        scene.debugLayer.hide();
                    } else {
                        scene.debugLayer.show();
                    }
                }
            });


            engine.runRenderLoop(() => {
                scene.render();
            });

        }
        
        
            
     
        // hide/show the Inspector
       

        // run the main render loop
        
    
}
App.delaycreate();
