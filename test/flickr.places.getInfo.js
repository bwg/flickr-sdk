var flickr = require('..')();
var assert = require('assert');

describe('flickr.places.getInfo', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.places.getInfo({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
