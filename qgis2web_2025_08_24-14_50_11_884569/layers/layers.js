var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_2, 
                style: style_building_2,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });
var format_highway_3 = new ol.format.GeoJSON();
var features_highway_3 = format_highway_3.readFeatures(json_highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_3.addFeatures(features_highway_3);
var lyr_highway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_3, 
                style: style_highway_3,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_3.png" /> highway'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_building_2.setVisible(true);lyr_highway_3.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_building_2,lyr_highway_3];
lyr_building_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_highway_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'service': 'service', 'footway': 'footway', 'ford': 'ford', 'depth': 'depth', 'ref': 'ref', 'old_ref': 'old_ref', 'oneway': 'oneway', 'smoothness': 'smoothness', 'name': 'name', 'surface': 'surface', 'layer': 'layer', 'lanes': 'lanes', 'bridge': 'bridge', 'bicycle': 'bicycle', 'access': 'access', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', });
lyr_building_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'building:levels': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_highway_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'service': '', 'footway': '', 'ford': '', 'depth': '', 'ref': '', 'old_ref': '', 'oneway': '', 'smoothness': '', 'name': '', 'surface': '', 'layer': '', 'lanes': '', 'bridge': '', 'bicycle': '', 'access': '', 'ramp': '', 'incline': '', 'handrail': '', 'foot': '', });
lyr_building_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_highway_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'service': 'no label', 'footway': 'no label', 'ford': 'no label', 'depth': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'oneway': 'no label', 'smoothness': 'no label', 'name': 'no label', 'surface': 'no label', 'layer': 'no label', 'lanes': 'no label', 'bridge': 'no label', 'bicycle': 'no label', 'access': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', });
lyr_highway_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});