AOS.init();

var swiper = new Swiper(".mainSwiper", {
    pagination: {
        el: ".mainSwiper .swiper-pagination",
        clickable: true,
    },
    watchSlidesProgress: true,
    autoplay: {
        delay: 3000,
    },
});

var swiper = new Swiper(".blockSwiper03", {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: ".blockSwiper03 .swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: '.swiper_03 .swiper-button-next',
        prevEl: '.swiper_03 .swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        769: {
            slidesPerView: 3,
        }
    }
});

var swiper = new Swiper(".partnerSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".partnerSwiper .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        481: {
            slidesPerView: 4,
        },
        769: {
            slidesPerView: 5,
        }
    }
});

var header = document.getElementById("header");
var rootElement = document.documentElement;

function scrollFunction() {
    if (document.body.scrollTop > 20 || rootElement.scrollTop > 20) {

        header.classList.add("show");
    } else {

        header.classList.remove("show");
    }
}

window.onscroll = function () { scrollFunction() };

var menuElement = document.getElementById("menu-mb-box");

function openMenu() {
    menuElement.classList.add("open");
}

function closeMenu() {
    menuElement.classList.remove("open");
}