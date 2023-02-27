const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data));
} 

const displayCountry = countries => {
    const countryContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        console.log(country);
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <div class="col">
            <div class="card">
                <img src="${country.flags.png}" class="card-img-top" alt="">
                <div class="card-body">
                    <h3 class="card-title">Name: ${country.name.official}</h3>
                    <h5>Capital: ${country.capital? country.capital[0] : '' }</h5>
                    <button onclick="loadCountryDetail('${country.cca2}')" type="button" class="btn btn-primary btn-lg">Detail</button>
                </div>
            </div>
        </div>
        `
        countryContainer.appendChild(countryDiv);
    });
}
const loadCountryDetail = (countryCode) =>{
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    .then(res => res.json())
    .then(data => countryDetail(data[0]));

}
const countryDetail = (country) => {
    console.log(country);
    const countryDetailField = document.getElementById('country-detail-field');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <div class="card w-50 h-50">
                <img src="${country.flags.png}" class="card-img-top img-fluid" alt="">
                <div class="card-body">
                    <h3 class="card-title">Name: ${country.name.official}</h3>
                    <h5>Capital: ${country.capital? country.capital[0] : '' }</h5>
                </div>
            </div>
    `
    countryDetailField.appendChild(div);
}


loadCountry();