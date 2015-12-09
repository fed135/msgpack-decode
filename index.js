/**
 * Decoder
 *
 * Accepts stringifed JSON serialization, as well as msgpack binary encoding. 
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var msgpack = require('msgpack-lite');

/* Methods -------------------------------------------------------------------*/

/**
 * Converts a buffer to an object.
 * Accepts: 
 						- stringified JSON
 						- msgpack binary
 * @method decode
 * @param {Buffer} buffer The buffer to decode
 */
function decode(buffer) {
	var raw = buffer.toString();

	//Not friendly to old node version 
	if (raw.includes('�')) return msgpack.decode(buffer);
	else return JSON.parse(raw);
}

// Example:
//
// var stringObj = new Buffer(JSON.stringify({foo:'bar'}));
// var binaryObj = msgpack.encode({foo:'bar'});
// 
// console.log(decoder(stringObj)); // {foo: 'bar'}
// console.log(decoder(binaryObj)); // {foo: 'bar'}

/* Exports -------------------------------------------------------------------*/

module.exports = decode;