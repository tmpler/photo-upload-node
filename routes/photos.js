var photos = [];
photos.push({
  name: 'Placeholder 300x300',
  path: 'http://placehold.it/300x300'
});
photos.push({
  name: 'Placeholder 400x300',
  path: 'http://placehold.it/400x300'
});
exports.list = function(req, res){
    res.render('photos', {
      title: 'Photos',
      photos: photos
    });
};
