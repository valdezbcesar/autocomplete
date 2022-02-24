/* jshint node: true */
'use strict';

const geode = require('geode');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns Array
 * @author Julio Cesar Valdez
 * @description Realiza la busqueda de ciudades basado en una cadena, latitud y longitud
 */
exports.search = async (req, res) => {
    var qry = req.query.q;
    var lat = req.query.latitude;
    var lng = req.query.longitude;
    try {
        const geo = new geode(process.env.GEO_USR, {language: 'en', countryCode: 'CA,US'});
        geo.search({name: qry, lat: lat, lng: lng}, (err, results) => {
            if (err) {
                throw new Error(err.message);
            }
            if (results.geonames.length === 0) {
                return res.json(results.geonames);
            } else {
                var response = [];
                var tmp = results.geonames;
                tmp.forEach(city => {
                    let tm = {
                        name: city.name + ", " + city.adminCode1 + ", " + city.countryName,
                        latitude: city.lat,
                        longitude: city.lng
                    };
                    response.push(tm);
                });
                return res.json(response);
            }
        });
    } catch (error) {
        console.log(error);
        return res.json({message: error.message ? error.message : error.toString()});
    }
};