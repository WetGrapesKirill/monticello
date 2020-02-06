import sliders from './sliders';
import AOS from 'aos';
import burger from './burger';
import map from './map';
import 'lazysizes';
import fancybox from '@fancyapps/fancybox';
import 'core-js/modules/es6.promise';
import 'core-js/modules/es6.array.iterator';


AOS.init();


$(document).ready(function () {
    sliders();
    burger();
    map();
    fancybox();
});