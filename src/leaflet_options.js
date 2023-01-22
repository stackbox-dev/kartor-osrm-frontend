'use strict';

var L = require('leaflet');

var de = L.tileLayer('//{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
    attribution: '<a target="_blank" href="http://www.openstreetmap.org/">Karte hergestellt aus OpenStreetMap-Daten</a> | Lizenz: <a rel="license" target="_blank" href="http://opendatacommons.org/licenses/odbl/">Open Database License (ODbL)</a>'
  }),
  standard = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="/copyright">OpenStreetMap contributors</a>'
  }),

  hiking = L.tileLayer('//tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png', {}),
  bike = L.tileLayer('//tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png', {})

module.exports = {
  defaultState: {
    center: L.latLng(12.9716, 77.5946),
    zoom: 7,
    waypoints: [],
    language: 'en',
    alternative: 0,
    layer: de,
    service: 1
  },
  services: [{
    label: 'Van',
    path: '/api/route/v1',
    debug: 'van',
  },
  {
    label: 'Bike',
    path: '/api/route/v1',
    debug: 'bike',
  },
  {
    label: 'Distance',
    path: '/api/route/v1',
    debug: 'distance',
  }],
  layer: [{
    'openstreetmap.de': de,
    'openstreetmap.org': standard,
  }],
  overlay: {
    'hiking': hiking,
    'bike': bike,
  },
  baselayer: {
    one: standard,
  }
};
