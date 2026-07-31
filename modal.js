const modal = document.getElementById("project-modal");

const title = document.getElementById("project-title");

const mainImage = document.getElementById("main-image");

const thumbnails = document.getElementById("thumbnail-row");

const description = document.getElementById("project-description");

const software = document.getElementById("project-software");

const tags = document.getElementById("project-tags");

const closeButton = document.getElementById("close-project");





function openProject(projectID){


    const project = projects[projectID];


    if(!project){

        console.error("Project not found:", projectID);

        return;

    }



    modal.style.display = "flex";



    title.textContent = project.title;



    description.textContent = project.description;



    mainImage.src = project.gallery[0];



    // CLEAR OLD THUMBNAILS

    thumbnails.innerHTML = "";



    project.gallery.forEach((image)=>{


        const thumb = document.createElement("img");


        thumb.src = image;



        thumb.onclick = function(){

            mainImage.src = image;

        };



        thumbnails.appendChild(thumb);


    });





    // SOFTWARE

    software.innerHTML = "";


    project.software.forEach((item)=>{


        const li = document.createElement("li");


        li.textContent = item;


        software.appendChild(li);


    });






    // TAGS

    tags.innerHTML = "";


    project.tags.forEach((tag)=>{


        const span = document.createElement("span");


        span.textContent = tag;


        tags.appendChild(span);


    });


}





function closeProject(){


    modal.style.display = "none";


}





closeButton.onclick = closeProject;




modal.onclick = function(event){


    if(event.target === modal){

        closeProject();

    }


};





// ESC CLOSES

document.addEventListener("keydown", function(event){


    if(event.key === "Escape"){

        closeProject();

    }


});