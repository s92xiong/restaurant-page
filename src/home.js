export function homeContent(parentElement) {
    // Make Home Div
    const homeDiv = document.createElement('div');
    parentElement.appendChild(homeDiv);
    homeDiv.className = "active";
    homeDiv.id = "home";
    homeDiv.setAttribute("data-tab-content", undefined); // set empty value

    // Make Title Div under Home Div
    const innerHomeDiv = document.createElement('div');
    innerHomeDiv.className = "inner-home-div";
    homeDiv.appendChild(innerHomeDiv);

    const blockQuoteDiv = document.createElement('blockquote');
    innerHomeDiv.appendChild(blockQuoteDiv);
    blockQuoteDiv.className = "block-quote-div";
    blockQuoteDiv.innerHTML = `<p><i>Even at my age, after decades of work, I don’t think I have achieved perfection. But I feel ecstatic all day––I love making sushi. That’s the spirit of the shokunin.</i></p>
                                <p><i>- Jiro Ono 小野 二郎</i></p>`;

    const homeImage = document.createElement('img');
    homeImage.src = "media/sushi-art.png";
    homeImage.className = "home-image";
    innerHomeDiv.appendChild(homeImage);

    const titleMessage = document.createElement('h4');
    titleMessage.className = "title-message";
    titleMessage.textContent = "Kiyomizu Izakaya is a tapas-style, all-you-can eat Japanese restaurant committed to using fresh and high quality ingredients. Traditional Izakayas are casual places for after-work drinking and dining, similar to American pubs. Join us and look forward to an amazing dining experience.";
    innerHomeDiv.appendChild(titleMessage);
}

