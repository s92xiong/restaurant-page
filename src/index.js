import "./media/css/style.css";
import { homeContent } from './home.js';
import { galleryContent } from './gallery.js';

const renderHTML = (() => {
    const divContent = document.querySelector('#content');
    const h1Element = document.createElement('h1');
    divContent.appendChild(h1Element).textContent = "Kiyomizu Izakaya";
    const navbar = document.createElement('ul');
    divContent.appendChild(navbar).className = "navbar";
    navbar.innerHTML = `<li data-tab-target="#home" class="tab">Home</li>
                        <li data-tab-target="#gallery" class="tab active">Gallery</li>
                        <li data-tab-target="#menu" class="tab">Menu</li>
                        <li data-tab-target="#contact" class="tab">Contact</li>`;

    // Home Tab
    homeContent(divContent);

    // Gallery Tab
    galleryContent(divContent);

    // Menu Tab
    const menuDiv = document.createElement('div');
    divContent.appendChild(menuDiv);
    menuDiv.outerHTML = `<div id="menu" data-tab-content><h2>Menu</h2></div>`;

    // Contact Tab
    const contactDiv = document.createElement('div');
    divContent.appendChild(contactDiv);
    contactDiv.outerHTML = `<div id="contact" data-tab-content><h2>Contact</h2></div>`;

    // Tab Functionality
    const tabs = document.querySelectorAll(`[data-tab-target]`);
    const tabContents = document.querySelectorAll('[data-tab-content]');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget);
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active');
            });
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            tab.classList = 'active';
            target.classList = 'active';
        });
    });
})();

// Put the contents of each ‘tab’ inside of it’s own module