'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplkasi Rest API ku berjalan",res)
};

//menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function(req,res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows,fields){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows,res)
        }
    });
};
