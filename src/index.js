import "./css/style.css";

const renderHTML = (() => {
    const divContent = document.querySelector('#content');
    const h1Element = document.createElement('h1');
    divContent.appendChild(h1Element).textContent = "Kiyomizu Izakaya";
    const navbar = document.createElement('ul');
    divContent.appendChild(navbar).className = "navbar";
    navbar.innerHTML = `<li data-tab-target="#home" class="tab active">Home</li>
                        <li data-tab-target="#gallery" class="tab">Gallery</li>
                        <li data-tab-target="#menu" class="tab">Menu</li>
                        <li data-tab-target="#contact" class="tab">Contact</li>`;

    const homeDiv = document.createElement('div');
    divContent.appendChild(homeDiv);
    homeDiv.outerHTML = `<div id="home" data-tab-content class="active"><h2>Home</h2></div>`;

    const galleryDiv = document.createElement('div');
    divContent.appendChild(galleryDiv);
    galleryDiv.outerHTML = `<div id="gallery" data-tab-content><h2>Gallery</h2></div>`;

    const menuDiv = document.createElement('div');
    divContent.appendChild(menuDiv);
    menuDiv.outerHTML = `<div id="menu" data-tab-content><h2>Menu</h2></div>`;

    const contactDiv = document.createElement('div');
    divContent.appendChild(contactDiv);
    contactDiv.outerHTML = `<div id="contact" data-tab-content><h2>Contact</h2></div>`;

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
            tab.classList.add('active');
            target.classList.add('active');
        });
    });
})();