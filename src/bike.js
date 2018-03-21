export function Bike(location) {
  const bikeKey = process.env.BIKE_INDEX_API_KEY;

  $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&api_key=${bikeKey}&stolenness=proximity`).then(function(response) {
    $('.show-text').text(`The following bikes have been stolen in your area:`);
    for(let i = 0; i < response.bikes.length; i++) {
      let bike = response.bikes[i].title;
      $('#showBikes').append(" " + '<li>' + bike + '</li>');
    }
    }).fail(function(error) {
      $('#showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }
