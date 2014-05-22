var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
Backbone.$ = $;
var Note = require('../models/note');

module.exports = Backbone.Collection.extend({
    model: Note,
    url: '/api/v0_0_1/notes'
});