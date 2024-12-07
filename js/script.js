document.addEventListener('DOMContentLoaded', function () {
    const sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav);
    const collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);
    const dropdown = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdown, {
        coverTrigger: false,
    });
    const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {
        indicators: false,
    });
    const scrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspy);
    const carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel);
});