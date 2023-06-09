const allCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displayCountreis(data))
}

const displayCountreis = countries => {
    const allCountriesHtml = countries.map(country => singleCountry(country))
console.log(countries);
const container = document.getElementById("countries");
container.innerHTML = allCountriesHtml.join(" ");
}
const singleCountry = country => { 
    return`<div class="flag-container">
    <h2>${country.name.common}</h2>
    <img src="${country.flags.png}">
    <p>area:${country.area}</p>
    <p>Capital:${country.capital}</p>
    </div>
                    `}
allCountries();