const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.body-about__aroow.swiper-button-next',
        prevEl: '.body-about__aroow.swiper-button-prev',
    },
});

//-------tabs----------------------------------------------------------//
const tabNavItems = document.querySelectorAll('.tabs-portfolio__button');
const tabItems = document.querySelectorAll('.block-tabs');


document.addEventListener("click", function (e) {
    const targetElement = e.target;

    let currentActiveIndex = null;
    let newActiveIndex = null;

    if (targetElement.closest('.tabs-portfolio__button')) {
        tabNavItems.forEach((tabNavItem, index) => {
            if (tabNavItem.classList.contains('active')) {
                currentActiveIndex = index;
                tabNavItems[currentActiveIndex].classList.remove('active');
                tabItems[currentActiveIndex].classList.remove('active');
            }

            if (tabNavItem === targetElement) {
                newActiveIndex = index;
                tabNavItems[newActiveIndex].classList.add('active');
                tabItems[newActiveIndex].classList.add('active');
            }
        });
    }
})