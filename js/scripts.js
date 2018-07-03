var url = 'https://restcountries.eu/rest/v2/callingcode/';

var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
	
if(!countryName.length) countryName = 'No data'; 

$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
} 

function showCountriesList(resp) {
  countriesList.empty();
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
           	$('<li>').text(item.name).appendTo(countriesList);
    });
}