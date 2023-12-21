ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([9.997422, 36.680672, 10.261987, 36.922168]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PAU_1 = new ol.format.GeoJSON();
var features_PAU_1 = format_PAU_1.readFeatures(json_PAU_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PAU_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAU_1.addFeatures(features_PAU_1);
var lyr_PAU_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PAU_1, 
                style: style_PAU_1,
                interactive: true,
                title: '<img src="styles/legend/PAU_1.png" /> PAU'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PAU_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PAU_1];
lyr_PAU_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_PAU_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_PAU_1.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_PAU_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});