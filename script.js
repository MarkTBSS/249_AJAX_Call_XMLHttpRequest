"use strict";
// Our First AJAX Call: XMLHttpRequest

const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener("load", function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
            <article class="country">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                    data.population / 1000000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${
                    Object.values(data.languages)[0]
                }</p>
                <p class="country__row"><span>💰</span>${
                    Object.values(data.currencies)[0].name
                }</p>
            </div>
            </article>
        `;
        document
            .querySelector(".countries")
            .insertAdjacentHTML("beforeend", html);
        document.querySelector(".countries").style.opacity = 1;
    });
};

getCountryData("portugal");
getCountryData("usa");
getCountryData("germany");
