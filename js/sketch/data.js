let covid_data;
let cases;
let deaths;
let recovered;

$.getJSON('https://covid19api.xapix.io/v2/latest', function(data) {
    covid_data = data;

    cases = addCommas(covid_data.latest['confirmed']);
    deaths = addCommas(covid_data.latest['deaths']);
    recovered = addCommas(covid_data.latest['recovered']);
});

// Add comas to number
function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}