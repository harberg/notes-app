var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;

module.exports = Backbone.Model.extend({

    idAttribute: "_id",
    // TODO: mock ENV var for host
    url: "/api/v0_0_1/notes",

    defaults: {
        noteBody: ""
    }
});