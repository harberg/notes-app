var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var NoteView = require('../views/note');
Backbone.$ = $;

module.exports = Backbone.View.extend({

    className: 'notes',

    initialize: function() {
        this.collection.on('add', this.addNote, this);
        this.collection.on('reset', this.addAll, this);
    },

    addNote: function(note) {
        var noteView = new NoteView({model: note});
        this.$el.append(noteView.el);
    },

    addAll: function() {
        this.collection.forEach(this.addNote);
    },

    render: function() {
        this.addAll();
    }

});