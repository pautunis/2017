var wms_layers = [];

var format_kmz_0 = new ol.format.GeoJSON();
var features_kmz_0 = format_kmz_0.readFeatures(json_kmz_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kmz_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kmz_0.addFeatures(features_kmz_0);
var lyr_kmz_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kmz_0, 
                style: style_kmz_0,
                interactive: true,
                title: '<img src="styles/legend/kmz_0.png" /> القطعة الجديدة القطعة الجديدة.kmz'
            });

lyr_kmz_0.setVisible(true);
var layersList = [lyr_kmz_0];
lyr_kmz_0.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_kmz_0.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_kmz_0.set('fieldLabels', {'Name': 'header label', 'description': 'inline label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_kmz_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});