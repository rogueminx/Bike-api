import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bike } from './bike.js';

$(document).ready(function() {
  $('#searchForBikes').click(function() {
    event.preventDefault();
    const location = $('#location').val();
    let bikes = new Bike(location)
    bikes.allBikes();
  })
  $(document).on('click', '#bikedetails', function(){
    let bike_id = $(this).data('custom-value');
    let bike = new Bike(location);
    bike.bikeInfo(bike_id);
    $('#showBikes').hide();
    $("#bikeDetailPage").show();
  })

});
