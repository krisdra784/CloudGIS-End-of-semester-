var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Frog_censusdatasets_1 = new ol.format.GeoJSON();
var features_Frog_censusdatasets_1 = format_Frog_censusdatasets_1.readFeatures(json_Frog_censusdatasets_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frog_censusdatasets_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frog_censusdatasets_1.addFeatures(features_Frog_censusdatasets_1);
var lyr_Frog_censusdatasets_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frog_censusdatasets_1, 
                style: style_Frog_censusdatasets_1,
                popuplayertitle: 'Frog_census datasets ',
                interactive: true,
                title: '<img src="styles/legend/Frog_censusdatasets_1.png" /> Frog_census datasets '
            });

lyr_OSMStandard_0.setVisible(true);lyr_Frog_censusdatasets_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Frog_censusdatasets_1];
lyr_Frog_censusdatasets_1.set('fieldAliases', {'Unique_ID': 'Unique_ID', 'Date': 'Date', 'Time_Start': 'Time_Start', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type_of_ob': 'Type_of_ob', 'Scientific': 'Scientific', 'Common_nam': 'Common_nam', 'Number': 'Number', });
lyr_Frog_censusdatasets_1.set('fieldImages', {'Unique_ID': '', 'Date': '', 'Time_Start': '', 'Latitude': '', 'Longitude': '', 'Type_of_ob': '', 'Scientific': '', 'Common_nam': '', 'Number': '', });
lyr_Frog_censusdatasets_1.set('fieldLabels', {'Unique_ID': 'header label - always visible', 'Date': 'header label - always visible', 'Time_Start': 'no label', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type_of_ob': 'no label', 'Scientific': 'no label', 'Common_nam': 'no label', 'Number': 'no label', });
lyr_Frog_censusdatasets_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});