// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}

// =========================================
// CLOSE MENU AFTER CLICK
// =========================================

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

// =========================================
// TYPING EFFECT
// =========================================

const typing = document.querySelector(".typing");

const words = [

    "Mechatronics Engineer",
    "Automation Engineer",
    "PLC Programmer",
    "Mechanical Designer",
    "Robotics Enthusiast"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function type(){

    if(!typing) return;

    let current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,letterIndex+1);

        letterIndex++;

        if(letterIndex === current.length){

            deleting = true;

            setTimeout(type,1500);

            return;

        }

    }

    else{

        typing.textContent = current.substring(0,letterIndex-1);

        letterIndex--;

        if(letterIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(type,deleting?60:120);

}

type();

// =========================================
// STICKY NAVBAR
// =========================================

window.addEventListener("scroll",()=>{

    const nav=document.querySelector(".navbar");

    if(window.scrollY>50){

        nav.style.background="rgba(15,23,42,.9)";
        nav.style.backdropFilter="blur(18px)";
        nav.style.boxShadow="0 15px 35px rgba(0,0,0,.3)";

    }

    else{

        nav.style.background="rgba(255,255,255,.08)";
        nav.style.boxShadow="none";

    }

});

// =========================================
// BACK TO TOP BUTTON
// =========================================

const topBtn=document.getElementById("topBtn");

if(topBtn){

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            topBtn.style.display="block";

        }

        else{

            topBtn.style.display="none";

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

// =========================================
// SCROLL REVEAL
// =========================================

const reveals=document.querySelectorAll(".card,.project-card,.stat-card,.glass-box");

function reveal(){

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        const visible=window.innerHeight-100;

        if(top<visible){

            item.classList.add("reveal");
            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

// =========================================
// ACTIVE NAVIGATION
// =========================================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link=>{

    if(link.getAttribute("href")===currentPage){

        link.classList.add("active");

    }

});

// =========================================
// SMOOTH BUTTON HOVER EFFECT
// =========================================

document.querySelectorAll(".btn,.btn-outline").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px)";

    });

});

// =========================================
// LIGHTBOX FOR WEEK GALLERY IMAGES
// =========================================

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `
    <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close image">&times;</button>
        <img src="" alt="Expanded gallery image">
        <div class="lightbox-caption"></div>
    </div>
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");
const lightboxClose = lightbox.querySelector(".lightbox-close");

const galleryImages = document.querySelectorAll(".week-gallery img");

galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxCaption.textContent = image.alt;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("active")) {
        closeLightbox();
    }
});

// =========================================
// END
// =========================================