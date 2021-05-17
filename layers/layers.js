var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_LandSurfaceTemperatureLandsat8_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Land Surface Temperature Landsat 8",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LandSurfaceTemperatureLandsat8_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1587225.687517, 5874062.501677, 1628721.989646, 5911383.845855]
                            })
                        });
var lyr_TemperatureVegetationDrynessIndexTVDI_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Temperature Vegetation Dryness Index (TVDI)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TemperatureVegetationDrynessIndexTVDI_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1615048.914637, 5882824.181762, 1615185.177489, 5882940.666416]
                            })
                        });
var lyr_LandSurfaceTemperature_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Land Surface Temperature",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LandSurfaceTemperature_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1615048.914637, 5882824.181762, 1615185.177489, 5882940.666416]
                            })
                        });
var lyr_NormalizedDifferenceVegetationIndexNDVI_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Normalized Difference Vegetation Index (NDVI)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NormalizedDifferenceVegetationIndexNDVI_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1615049.382569, 5882824.928740, 1615184.794746, 5882940.255543]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_LandSurfaceTemperatureLandsat8_1.setVisible(true);lyr_TemperatureVegetationDrynessIndexTVDI_2.setVisible(true);lyr_LandSurfaceTemperature_3.setVisible(true);lyr_NormalizedDifferenceVegetationIndexNDVI_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LandSurfaceTemperatureLandsat8_1,lyr_TemperatureVegetationDrynessIndexTVDI_2,lyr_LandSurfaceTemperature_3,lyr_NormalizedDifferenceVegetationIndexNDVI_4];
