import $ from 'jquery';

export function Bike(location) {
  const bikeKey = process.env.BIKE_INDEX_API_KEY;

  $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&api_key=${bikeKey}&stolenness=proximity`).then(function(response) {
    $('.show-text').text(`The following bikes have been stolen in your area:`);
    for(let i = 0; i < response.bikes.length; i++) {
      let bike = response.bikes[i].title;
      let bike_id = response.bikes[i].id;
      let bike_thumb = response.bikes[i].thumb;
      if (bike_thumb === null) {
          bike_thumb = "images/bike-placeholder.png";
        }
      $('#showBikes').append(`<div class="row" id="resultrow"><div class="col-md-8"><li><a href="https://bikeindex.org/api/v3/bikes/${bike_id}"> ${bike} </a></div><div class="col-md-2"><img src ="${bike_thumb}"></li></div></div>`);
    }
    }).fail(function(error) {
      $('#showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }
