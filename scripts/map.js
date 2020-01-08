ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("map", {
        center: [55.668378, 37.859355],
        zoom: 15,
        controls: []
    });
    // myMap.controls.add('rulerControl', {
    //     scaleLine: true
    // });
    myMap.controls.add('zoomControl');
    myMap.behaviors.disable('scrollZoom');

    var myPlacemark = new ymaps.Placemark([55.671798, 37.855428], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/point-maps.svg',
        iconImageSize: [55, 65],
        iconImageOffset: [-30, -65]
    });
    myMap.geoObjects.add(myPlacemark);
}