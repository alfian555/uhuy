var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_semua_lahan_1 = new ol.format.GeoJSON();
var features_semua_lahan_1 = format_semua_lahan_1.readFeatures(json_semua_lahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_semua_lahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_semua_lahan_1.addFeatures(features_semua_lahan_1);
var lyr_semua_lahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_semua_lahan_1, 
                style: style_semua_lahan_1,
                popuplayertitle: 'semua_lahan',
                interactive: true,
                title: '<img src="styles/legend/semua_lahan_1.png" /> semua_lahan'
            });
var format_lahan_ideal_2 = new ol.format.GeoJSON();
var features_lahan_ideal_2 = format_lahan_ideal_2.readFeatures(json_lahan_ideal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lahan_ideal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lahan_ideal_2.addFeatures(features_lahan_ideal_2);
var lyr_lahan_ideal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lahan_ideal_2, 
                style: style_lahan_ideal_2,
                popuplayertitle: 'lahan_ideal',
                interactive: true,
                title: '<img src="styles/legend/lahan_ideal_2.png" /> lahan_ideal'
            });
var format_bataskabupaten_3 = new ol.format.GeoJSON();
var features_bataskabupaten_3 = format_bataskabupaten_3.readFeatures(json_bataskabupaten_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bataskabupaten_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bataskabupaten_3.addFeatures(features_bataskabupaten_3);
var lyr_bataskabupaten_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bataskabupaten_3, 
                style: style_bataskabupaten_3,
                popuplayertitle: 'batas kabupaten',
                interactive: true,
                title: '<img src="styles/legend/bataskabupaten_3.png" /> batas kabupaten'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_semua_lahan_1.setVisible(true);lyr_lahan_ideal_2.setVisible(true);lyr_bataskabupaten_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_semua_lahan_1,lyr_lahan_ideal_2,lyr_bataskabupaten_3];
lyr_semua_lahan_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'JNSSWH': 'JNSSWH', 'TNMSWH': 'TNMSWH', 'layer': 'layer', 'path': 'path', });
lyr_lahan_ideal_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'path': 'path', });
lyr_bataskabupaten_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'kdbbps': 'kdbbps', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdpbps': 'kdpbps', 'kdpkab': 'kdpkab', 'kdppum': 'kdppum', 'luaswh': 'luaswh', 'tipadm': 'tipadm', 'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'wiadkc': 'wiadkc', 'wiadkk': 'wiadkk', 'wiadpr': 'wiadpr', 'wiadkd': 'wiadkd', 'uupp': 'uupp', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_semua_lahan_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSKBN': 'TextEdit', 'FCODE': 'TextEdit', 'PUDATE': 'DateTime', 'AQDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'JNSLDG': 'TextEdit', 'TNMLDG': 'TextEdit', 'TIPLDG': 'TextEdit', 'JNSSWH': 'TextEdit', 'TNMSWH': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_lahan_ideal_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_bataskabupaten_3.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'TextEdit', 'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'kdbbps': 'TextEdit', 'kdcbps': 'TextEdit', 'kdcpum': 'TextEdit', 'kdebps': 'TextEdit', 'kdepum': 'TextEdit', 'kdpbps': 'TextEdit', 'kdpkab': 'TextEdit', 'kdppum': 'TextEdit', 'luaswh': 'TextEdit', 'tipadm': 'TextEdit', 'wadmkc': 'TextEdit', 'wadmkd': 'TextEdit', 'wadmkk': 'TextEdit', 'wadmpr': 'TextEdit', 'wiadkc': 'TextEdit', 'wiadkk': 'TextEdit', 'wiadpr': 'TextEdit', 'wiadkd': 'TextEdit', 'uupp': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_semua_lahan_1.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'JNSSWH': 'no label', 'TNMSWH': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_lahan_ideal_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_bataskabupaten_3.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'namobj': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'kdbbps': 'no label', 'kdcbps': 'no label', 'kdcpum': 'no label', 'kdebps': 'no label', 'kdepum': 'no label', 'kdpbps': 'no label', 'kdpkab': 'no label', 'kdppum': 'no label', 'luaswh': 'no label', 'tipadm': 'no label', 'wadmkc': 'no label', 'wadmkd': 'no label', 'wadmkk': 'no label', 'wadmpr': 'no label', 'wiadkc': 'no label', 'wiadkk': 'no label', 'wiadpr': 'no label', 'wiadkd': 'no label', 'uupp': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_bataskabupaten_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});