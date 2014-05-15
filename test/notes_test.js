var superagent = require('superagent');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var app = require('../server.js');

var port = process.env.PORT || 3000;
var Url = 'http://localhost:' + port + '/api/v0_0_1/notes';

describe('Notes JSON api', function() {
    var id;

    it('can successfully create a new note', function(done) {
        superagent.post(Url)
        .send({
            noteBody: 'a new note!'
        })
        .end(function(err, res) {
            expect(err).to.eql(null);
            expect(res.body._id).to.not.be.eql(null);
            expect(res.body.noteBody).to.be.eql('a new note!');
            id = res.body._id;

            done();
        });
    });

    it('can successfully get a note', function(done) {
        superagent.get(Url + '/' + id)
        .end(function(err, res) {
            expect(err).to.eql(null);
            expect(res.body._id).to.be.eql(id);
            expect(res.body.noteBody).to.be.eql('a new note!');

            done();
        });
    });

});