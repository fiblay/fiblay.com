/* 
        FINLAY.EXE
        SCRIPT.JS
*/



/* 
        BOOT SEQUENCE
 */


const bootScreen = document.getElementById("boot-screen");
const bootText = document.getElementById("boot-text");

const loadingFill = document.getElementById("loading-fill");
const loadingPercent = document.getElementById("loading-percent");


const bootLines = [

    "FIBLAY.EXE BIOS v1.0",

    "Initializing graphics driver... OK",

    "Loading 3D renderer... OK", 

    "Loading Blender assets... OK",

    "Loading Godot projects... OK",

    "Scanning portfolio database...",

    "Projects found: 003",

    "System status: ONLINE",

    "",

    "WELCOME TO FIBLAY.EXE"

];


let bootIndex = 0;



function typeBoot(){


    if(bootIndex < bootLines.length){


        let line = document.createElement("div");


        line.className = "boot-line";


        line.textContent = bootLines[bootIndex];



        bootText.insertBefore(

            line,

            document.getElementById("cursor")

        );



        let progress =
            ((bootIndex + 1) / bootLines.length) * 100;



        loadingFill.style.width =
            progress + "%";


        loadingPercent.textContent =
            Math.floor(progress) + "%";



        bootIndex++;



        setTimeout(

            typeBoot,

            400

        );



    }

    else {


        setTimeout(()=>{


            loadingFill.style.width = "100%";

            loadingPercent.textContent = "100%";



            setTimeout(()=>{


                bootScreen.style.transition =
                    "opacity 1s";


                bootScreen.style.opacity =
                    "0";



                setTimeout(()=>{


                    bootScreen.remove();


                },1000);



            },500);



        },500);


    }


}



if(bootScreen){

    typeBoot();

}







/*  
        WIRE FRAME BACKGROUND
 */


const canvas = document.getElementById("wireframe");


if(canvas){


const ctx = canvas.getContext("2d");


let width;
let height;


let offset = 0;


let mouseX = 0;
let mouseY = 0;


let targetX = 0;
let targetY = 0;



function resize(){


    width = canvas.width =
        window.innerWidth;


    height = canvas.height =
        window.innerHeight;


}


window.addEventListener(
    "resize",
    resize
);


resize();





window.addEventListener(
    "mousemove",
    (event)=>{


        targetX =
        (event.clientX / width - .5) * 30;


        targetY =
        (event.clientY / height - .5) * 30;


    }
);






function draw(){


    ctx.clearRect(
        0,
        0,
        width,
        height
    );



    mouseX +=
    (targetX - mouseX) * .05;


    mouseY +=
    (targetY - mouseY) * .05;



    ctx.save();



    ctx.translate(
        mouseX,
        mouseY
    );



    ctx.strokeStyle =
        "#355f22";


    ctx.lineWidth = 1;



    let spacing = 40;



    offset += .35;




    // horizontal lines

    for(
        let y = -spacing;
        y < height * 1.5;
        y += spacing
    ){


        ctx.beginPath();


        ctx.moveTo(
            0,
            y + offset % spacing
        );


        ctx.lineTo(
            width,
            y + offset % spacing
        );


        ctx.stroke();


    }





    // perspective lines

    for(
        let x = -width;
        x < width * 2;
        x += spacing
    ){


        ctx.beginPath();



        ctx.moveTo(

            width / 2 +
            (x - width / 2) * .25,

            height / 2

        );



        ctx.lineTo(

            x,

            height

        );



        ctx.stroke();


    }



    ctx.restore();



    requestAnimationFrame(draw);


}



draw();


}