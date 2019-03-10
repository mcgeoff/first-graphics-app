// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';
import { isContext } from 'vm';

$(() => {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});
 var charts = require("./_charts.js");
 

 // this is how we refer to leaflet by convention
 var L = require("leaflet");// because installed in our local library we can just use name

 // special hack we have to do to make leaflet icons work in yeogurt
 L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.4.0/dist/images/';


 var map = require("./_map.js");
