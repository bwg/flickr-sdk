var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.suggestions.approveSuggestion', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.suggestions.approveSuggestion({ suggestion_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "suggestion_id"', function () {

		assert.throws(function () {
			flickr.photos.suggestions.approveSuggestion({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "suggestion_id"';
		});

	});

	it('calls the correct API method');

});
