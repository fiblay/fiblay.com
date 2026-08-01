const modal = document.getElementById("project-modal");

const title = document.getElementById("project-title");

const mediaViewer = document.getElementById("media-viewer");

const thumbnails = document.getElementById("thumbnail-row");

const description = document.getElementById("project-description");

const software = document.getElementById("project-software");

const tags = document.getElementById("project-tags");

const closeButton = document.getElementById("close-project");





function loadMedia(media){


    mediaViewer.innerHTML = "";

 

    // IMAGE / GIF

    if(media.type === "image" || media.type === "gif"){


        const img = document.createElement("img");


        img.src = media.src;


        img.className = "project-media";


        mediaViewer.appendChild(img);


    }





    // VIDEO

    if(media.type === "video"){


        const video = document.createElement("video");


        video.src = media.src;


        video.className = "project-media";


        video.controls = true;

        video.autoplay = true;

        video.loop = true;

        video.muted = true;



        mediaViewer.appendChild(video);


    }


}








function openProject(projectID){


    const project = projects[projectID];



    if(!project){


        console.error("Project not found:", projectID);


        return;


    }





    modal.style.display = "flex";



    title.textContent = project.title;



    description.textContent = project.description;




    // LOAD FIRST MEDIA ITEM


    loadMedia(project.gallery[0]);






    // CLEAR THUMBNAILS

    thumbnails.innerHTML = "";




    project.gallery.forEach((media)=>{



        const thumb = document.createElement("img");




        // IMAGE/GIF THUMBNAIL


        if(media.type === "image" || media.type === "gif"){


            thumb.src = media.src;


        }





        // VIDEO THUMBNAIL PLACEHOLDER


        if(media.type === "video"){


            thumb.src = "assets/Images/video-thumb.png";


        }




        thumb.onclick = function(){


            loadMedia(media);


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



    // stop videos when closing


    mediaViewer.innerHTML = "";


}






closeButton.onclick = closeProject;






modal.onclick = function(event){


    if(event.target === modal){


        closeProject();


    }


};







document.addEventListener("keydown", function(event){



    if(event.key === "Escape"){


        closeProject();


    }



});

