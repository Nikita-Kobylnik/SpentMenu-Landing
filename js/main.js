$(".about__slider").slick({
  variableWidth: true,
  adaptiveHeight: true,
  slidesToShow: 1,
  dots: true,
  infinite: false,
  // centerMode: true,
  prevArrow:
    '<svg class="slick-prev" width="46" height="12" viewBox="0 0 46 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23743 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.5962 1.46446 6.5962 0.989589 6.3033 0.696696C6.01041 0.403802 5.53553 0.403802 5.24264 0.696696L0.469669 5.46967ZM46 5.25L1 5.25L1 6.75L46 6.75L46 5.25Z" fill="#696969"/></svg>',
  nextArrow:
    '<svg class="slick-next" width="46" height="12" viewBox="0 0 46 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45.5301 6.53033C45.823 6.23744 45.823 5.76256 45.5301 5.46967L40.7571 0.696699C40.4642 0.403806 39.9893 0.403806 39.6965 0.696699C39.4036 0.989593 39.4036 1.46447 39.6965 1.75736L43.9391 6L39.6965 10.2426C39.4036 10.5355 39.4036 11.0104 39.6965 11.3033C39.9893 11.5962 40.4642 11.5962 40.7571 11.3033L45.5301 6.53033ZM-0.000244141 6.75H44.9998V5.25H-0.000244141L-0.000244141 6.75Z" fill="#696969"/> </svg>',
});

$(".news__slider").slick({
  dots: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  variableWidth: true,
  adaptiveHeight: true,
  // centerMode: true,
  prevArrow:
    '<svg class="slick-prev" width="20" height="52" viewBox="0 0 20 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 49L3 26L17 3" stroke="#262121" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  nextArrow:
    '<svg class="slick-next" width="20" height="52" viewBox="0 0 20 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 49L17 26L3 3" stroke="#262121" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
});
//
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

const itemList = document.querySelector(".menu__link_more");
itemList.addEventListener("click", (e) => {
  console.dir(itemList);
  itemList.parentElement.classList.toggle("_active");
});
if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}

// Menu Burger
const burgerMenu = document.querySelector(".header__burger");
if (burgerMenu) {
  const menu = document.querySelector(".menu");
  burgerMenu.addEventListener("click", (e) => {
    document.body.classList.toggle("_lock");
    burgerMenu.classList.toggle("_active");
    menu.classList.toggle("_active");
  });
}
