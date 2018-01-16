var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').on('click', searchCountries); //  or  $('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });

}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function (item) {
        // $('<>').addClass('country').appendTo(countriesList);
        var country = item.name;
        var countryItems = country + "-items";

        $('<li>').text("Country:"+ country).addClass(country).appendTo(countriesList);
        $('<ul>').addClass(countryItems).appendTo(country);                     // osadzanie listy w liscie nie dziala ?
        $('<li>').text("Capitol:"+ item.capital).appendTo(countryItems);
        $('<li>').text("Region:"+ item.region).appendTo(countryItems);
    })
}