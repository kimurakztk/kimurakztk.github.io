/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});




function switchLang(lang) {
    localStorage.setItem("lang", lang);
    document.querySelectorAll('[data-lang]').forEach(e => {
        e.style.display = e.dataset.lang === lang ? 'block' : 'none';
    });

    // nav のラベルだけ変える
    document.querySelector('#nav-about').textContent = (lang === 'ja') ? '自己紹介' : 'About';
    document.querySelector('#nav-career').textContent = (lang === 'ja') ? '職歴' : 'Employment';
    document.querySelector('#nav-education').textContent = (lang === 'ja') ? '学歴' : 'Education';
    document.querySelector('#nav-research').textContent = (lang === 'ja') ? '研究' : 'Research';
    document.querySelector('#nav-grants').textContent = (lang === 'ja') ? '外部獲得資金' : 'Grants';
    document.querySelector('#nav-talks').textContent = (lang === 'ja') ? '講演' : 'Talks';
    document.querySelector('#nav-personal').textContent = (lang === 'ja') ? '私について' : 'Personal';
}

const lang = localStorage.getItem("lang") || 'ja';
switchLang(lang);