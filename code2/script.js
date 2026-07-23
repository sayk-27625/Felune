

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    setTimeout(() => {

        loading.classList.add("hide");

    }, 2200);

});

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll(".fade-up").forEach(el=>{
    observer.observe(el);
});

const buttons = document.querySelectorAll(".color-btn");

const image = document.getElementById("polish-image");
const name = document.getElementById("color-name");
const description = document.getElementById("color-description");
const polish = document.querySelector(".polish");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        // activeを切り替える
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // フェードアウト
        image.style.opacity = "0";

        setTimeout(() => {

            image.src = button.dataset.image;
            image.alt = button.dataset.name;

            name.textContent = button.dataset.name;
            description.textContent = button.dataset.description;
            polish.style.backgroundColor = button.dataset.bg;

            // フェードイン
            image.style.opacity = "1";

        }, 200);

    });

});


// Gallery Slider

const galleryImages = document.querySelectorAll(".gallery-image");

let galleryIndex = 0;

setInterval(()=>{

    galleryImages[galleryIndex].classList.remove("active");

    galleryIndex++;

    if(galleryIndex >= galleryImages.length){

        galleryIndex = 0;

    }

    galleryImages[galleryIndex].classList.add("active");

},3000);