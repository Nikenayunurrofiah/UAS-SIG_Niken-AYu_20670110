var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_kecamatan2021_0 = new ol.format.GeoJSON();
var features_kecamatan2021_0 = format_kecamatan2021_0.readFeatures(json_kecamatan2021_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan2021_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kecamatan2021_0.addFeatures(features_kecamatan2021_0);var lyr_kecamatan2021_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kecamatan2021_0, 
                style: style_kecamatan2021_0,
    title: 'kecamatan2021<br />\
    <img src="styles/legend/kecamatan2021_0_0.png" /> <br />\
    <img src="styles/legend/kecamatan2021_0_1.png" /> Bulu<br />\
    <img src="styles/legend/kecamatan2021_0_2.png" /> Gunem<br />\
    <img src="styles/legend/kecamatan2021_0_3.png" /> Kaliori<br />\
    <img src="styles/legend/kecamatan2021_0_4.png" /> Kragan<br />\
    <img src="styles/legend/kecamatan2021_0_5.png" /> Lasem<br />\
    <img src="styles/legend/kecamatan2021_0_6.png" /> Pamotan<br />\
    <img src="styles/legend/kecamatan2021_0_7.png" /> Pancur<br />\
    <img src="styles/legend/kecamatan2021_0_8.png" /> Rembang<br />\
    <img src="styles/legend/kecamatan2021_0_9.png" /> Sale<br />\
    <img src="styles/legend/kecamatan2021_0_10.png" /> Sarang<br />\
    <img src="styles/legend/kecamatan2021_0_11.png" /> Sedan<br />\
    <img src="styles/legend/kecamatan2021_0_12.png" /> Sluke<br />\
    <img src="styles/legend/kecamatan2021_0_13.png" /> Sulang<br />\
    <img src="styles/legend/kecamatan2021_0_14.png" /> Sumber<br />'
        });

lyr_kecamatan2021_0.setVisible(true);
var layersList = [baseLayer,lyr_kecamatan2021_0];
lyr_kecamatan2021_0.set('fieldAliases', {'id': 'id', 'kecamatan': 'kecamatan', 'Laki"2019': 'Laki"2019', 'Prpn2019': 'Prpn2019', 'Jumlah': 'Jumlah', });
lyr_kecamatan2021_0.set('fieldImages', {'id': 'TextEdit', 'kecamatan': 'TextEdit', 'Laki"2019': 'TextEdit', 'Prpn2019': 'TextEdit', 'Jumlah': 'TextEdit', });
lyr_kecamatan2021_0.set('fieldLabels', {'id': 'inline label', 'kecamatan': 'inline label', 'Laki"2019': 'inline label', 'Prpn2019': 'inline label', 'Jumlah': 'inline label', });
lyr_kecamatan2021_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});