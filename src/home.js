export function homeContent(parentElement) {
    // Home Div
    const homeDiv = document.createElement('div');
    parentElement.appendChild(homeDiv);
    homeDiv.className = "";
    homeDiv.id = "home";
    homeDiv.setAttribute("data-tab-content", ""); // set empty value

    // Create Inner Home Div
    const innerHomeDiv = document.createElement('div');
    innerHomeDiv.className = "inner-home-div";
    homeDiv.appendChild(innerHomeDiv);

    // Create Blockquote
    const blockQuoteDiv = document.createElement('blockquote');
    innerHomeDiv.appendChild(blockQuoteDiv);
    blockQuoteDiv.className = "block-quote-div";
    blockQuoteDiv.innerHTML = `<p><i>Even at my age, after decades of work, I don’t think I have achieved perfection. But I feel ecstatic all day––I love making sushi. That’s the spirit of the shokunin.</i></p>
                                <p><i>- Jiro Ono 小野 二郎</i></p>`;

    // Sushi image
    const homeImage = document.createElement('img');
    homeImage.src = "media/sushi-art.png";
    homeImage.className = "home-image";
    innerHomeDiv.appendChild(homeImage);

    // Restaurant message and description
    const titleMessage = document.createElement('h4');
    titleMessage.className = "title-message";
    titleMessage.textContent = "Kiyomizu Izakaya is a tapas-style, all-you-can eat Japanese restaurant committed to using fresh and high quality ingredients. Traditional Izakayas are casual places for after-work drinking and dining, similar to American pubs. Join us and look forward to an amazing dining experience.";
    innerHomeDiv.appendChild(titleMessage);
}