import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bike } from './bike.js';

$(document).ready(function() {
  $('#searchForBikes').click(function() {
    event.preventDefault();
    const location = $('#location').val();
    Bike(location);
  });
});
