var Note = require('../models/Note');

module.exports.collection = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  Note.find({noteBody: {$exists: true}}, function(err, users){
    if(err){
      res.send(500, {err: err});
      return false;
    }
    res.send(users);
  });
};

module.exports.findById = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    Note.findOne({'_id': req.params.id}, function(err, note) {
        if(err) {
            res.send(500, {err:err});
            return false;
        }
        res.send(note);
    });
};

module.exports.create = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var body = req.body;
    var note = new Note(body);
    note.save(function(err, newNote) {
        if(err) {
            res.send(500, {err:err});
            return false;
        }
        res.send(newNote);
    });
};

module.exports.update = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var id = req.params.id;
  delete req.body._id;

  Note.findOneAndUpdate({'_id' : id}, req.body, function(err, note) {
    if (err) {
      res.send(500, {error: err});
    } else {
      res.send(note);
    }
  });
};

module.exports.destroy = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  Note.remove({'_id' : req.params.id}, function(err) {
    if(err) {
      res.send(500, {error: err});
      return false;
    }
    res.send({'message' : 'success!'});
  });
};
