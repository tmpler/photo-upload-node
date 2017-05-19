var Photo = require('../models/Photo');
var path = require('path');
var fs = require('fs');
var join = path.join;

exports.form = function(req, res, next){
  res.render('photos/upload', {
    title: 'Photo upload'
  });
};
exports.submit = function(dir){
  return function(req,res,next){
    console.log(req);
    var img = req.body.photo.image;
    var name = req.body.photo.name || img.name;
    var path = join(dir, img.name);

    fs.rename(img.path, path, function(err){
      if(err) {
        return next(err);
      };
      Photo.create({
        name: name,
        path: img.name
      }, function(err){
        if(err){
          return next(err);
          res.redirect('/');
        };
      });
    });
  };
};

exports.list = function(req, res, next){
  Photo.find({}, function(err,photos){
    if(err){
      return next(err);
    }
    res.render('photos', {
      title: 'Photos',
      photos:  photos
    });
  });
};
