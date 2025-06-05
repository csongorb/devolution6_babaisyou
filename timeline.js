var map = L.map('map', {
    maxBounds: [[(83.31362 + 50), (151.56738 * 2)], [(-17.60214 - 50), (-164.15771 * 2)]],
    maxBoundsViscosity: 0.9
}).setView([60, -7], 3);

L.tileLayer('Leaflet_Tiles/{z}/{x}/{y}.png', {
    maxZoom: 9,
    minZoom: 0,
    maxNativeZoom: 6,
    zoomSnap: 0.2,
    mapMaxResolution: 2,
    mapMinResolution: Math.pow(3, 7) * 2,
    noWrap: true,
    attribution: '&copy; Devolution'
}).addTo(map);

// remove original Leaflet attribution (will be added to Credits)
map.attributionControl.setPrefix(false);
// add individual attribution
//map.attributionControl.addAttribution(`<a onclick="sidebar.open('privacy')" href="#">Privacy Policy</a> &VerticalLine; <a onclick="sidebar.open('imprint')" href="#">Imprint</a>`);

L.control.mousePosition().addTo(map);

//var sidebar = L.control.sidebar('sidebar').addTo(map);
var sidebar = L.control.sidebar({
    autopan: true,       // whether to maintain the centered map point when opening the sidebar
    closeButton: true,    // whether t add a close button to the panes
    container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
    position: 'left',     // left or right
}).addTo(map);

// auto-open sidebar at start
sidebar.open(('devolution'));