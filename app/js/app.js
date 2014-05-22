var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;

var Note = require('./models/note');
var NoteView = require('./views/note');
var NoteCollection = require('./collections/noteCollection');
var NoteCollectionView = require('./collectionViews/noteCollectionView');

$(function() {
    // var note = new Note({noteBody: "a new super awesome note that's really great"});
    // note.save();
    // var noteView = new NoteView({model: note});
    // $('#notes').append(noteView.$el);
    var noteCollection = new NoteCollection();
    var noteCollectionView = new NoteCollectionView({collection: noteCollection});

    noteCollection.fetch({
        success: function() {
            $('#notes').html(noteCollectionView.$el);
        }
    });
});
