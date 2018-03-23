import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bike } from './bike.js';


$(document).ready(function() {
  $('#searchForBikes').click(function() {
      event.preventDefault();
      const location = $('#location').val();
      let bike = new Bike();
      let promise = bike.allBikes(location);
      promise.then(function(response) {
        let results = JSON.parse(response);
        for(let i = 0; i < results.bikes.length; i++) {
          let bike = results.bikes[i].title;
          let bike_id = results.bikes[i].id;
          let bike_thumb = results.bikes[i].thumb;
          if (bike_thumb === null) {
            bike_thumb = "images/bike-placeholder.png";
          }
          $('.show-text').text(`The following bikes have been stolen in your area:`);
          $('#showBikes').append(`<div class="row" id="resultrow"><div class="col-md-8"><li><span id="bikedetails" data-custom-value="${bike_id}"> ${bike} </span></div><div class="col-md-2"><img src ="${bike_thumb}"></li></div></div>`);
        }
      })
      $(document).on('click', '#bikedetails', function(){
        $('#showBikes').hide();
        $('#bikeDetailPage').show();
        let bike_id = $(this).data('custom-value');
        let singlebike = new Bike();
        let promiseSecond = singlebike.bikeInfo(bike_id);
        promiseSecond.then(function(response) {
          let results = JSON.parse(response);
          let bike = results.bike.title;
          let description = results.bike.description;
          // let photos = results.bike.public_images;
          // for(let i = 0; i < results.photos.length; i++) {
          //   $('#bikephotos').append("<img src =" + photo[i] + "</img><br>");
          // }
          // $('#bikephotos').append(`<img src ="${photo}">`);
          $('.bikename').text(`${bike}`);
          $('#bikedescription').text(`${description}`);
        })
      })
    })
  });
