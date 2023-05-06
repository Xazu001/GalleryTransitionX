const galleryMain = document.querySelector("#gallery-main");
let showedCount = 4;

const showMoreGallery = [
    { src: 'bgs1.jpg', show: true },
    { src: 'bgs2.jpg', show: true },
    { src: 'bgs3.jpg', show: true },
    { src: 'bgs4.jpg', show: true },
    { src: 'bgs1.jpg', show: false },
    { src: 'bgs2.jpg', show: false },
    { src: 'bgs3.jpg', show: false },
    { src: 'bgs4.jpg', show: false },
    { src: 'bgs1.jpg', show: false },
    { src: 'bgs2.jpg', show: false },
    { src: 'bgs3.jpg', show: false },
    { src: 'bgs4.jpg', show: false },
    { src: 'bgs1.jpg', show: false },
    { src: 'bgs2.jpg', show: false },
    { src: 'bgs3.jpg', show: false },
    { src: 'bgs4.jpg', show: false },
    { src: 'bgs1.jpg', show: false },
    { src: 'bgs2.jpg', show: false },
    { src: 'bgs3.jpg', show: false },
    { src: 'bgs4.jpg', show: false },
    { src: 'bgs1.jpg', show: false },
    { src: 'bgs2.jpg', show: false },
    { src: 'bgs3.jpg', show: false },
    { src: 'bgs4.jpg', show: false },
];

const showNext = () => {
    for (i = showedCount; i < Math.min(showedCount + 5, showMoreGallery.length + 1); i++) {
        // showMoreGallery[i].show = true;
        document.querySelector("#gallery-main :nth-child(" + i + ")").classList.add("active");
    }
    showedCount += 4;
}

const fix = () => {
    for (i = 1; i <= 4; i++) {
        document.querySelector("#gallery-main :nth-child(" + i + ")").style.setProperty("opacity", "1");
    }
}


let howMuchShouldBeShownNow = 5;
let howMuchShouldBeShown = howMuchShouldBeShownNow + 4;
const imgTransition = () => {
    howMuchShouldBeShown = howMuchShouldBeShown + 5;

    setTimeout(() => {
        for (a = howMuchShouldBeShownNow, i = 1; a <= howMuchShouldBeShown, i <= 4; a++, i++) {
            document.querySelector("#gallery-main :nth-child(" + a + ")").classList.add("d" + `${i}`);

        }
        howMuchShouldBeShownNow = howMuchShouldBeShownNow + 4;
        i = 1;
    }, 300);
};

const renderGallery = () => {
    galleryMain.innerHTML = "";
    showMoreGallery.forEach((galleryImg) => {
        const newGalleryImg = `
      <div class="gallery-img${galleryImg.show ? ' active' : ''}" >
        <img src="${galleryImg.src}" alt="">
      </div>
    `;
        galleryMain.innerHTML += newGalleryImg;
    });

}

document.querySelector("button").addEventListener("click", () => {
    showNext();
    imgTransition();
});

renderGallery();
fix();