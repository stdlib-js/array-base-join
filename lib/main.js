/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
var isUndefinedOrNull = require( '@stdlib/assert-is-undefined-or-null' );


// FUNCTIONS //

/**
* Tests whether an object has a specified method.
*
* @private
* @param {Object} obj - input object
* @param {string} method - method name
* @returns {boolean} boolean indicating whether an object has a specified method
*
* @example
* var bool = hasMethod( [], 'join' );
* // returns true
*
* @example
* var bool = hasMethod( [], 'beep' );
* // returns false
*/
function hasMethod( obj, method ) {
	return ( typeof obj[ method ] === 'function' );
}

/**
* Returns a string created by joining elements in an accessor array using a specified separator.
*
* @private
* @param {Object} x - input array object
* @param {integer} separator - separator
* @returns {string} output string
*
* @example
* var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
* var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
*
* var x = arraylike2object( toAccessorArray( [ 1, 2, 3, 4 ] ) );
*
* var out = accessors( x, ',' );
* // returns '1,2,3,4'
*/
function accessors( x, separator ) {
	var data;
	var out;
	var get;
	var N;
	var v;
	var i;

	data = x.data;
	get = x.accessors[ 0 ];

	N = data.length - 1;
	out = '';
	for ( i = 0; i <= N; i++ ) {
		v = get( data, i );
		if ( !isUndefinedOrNull( v ) ) {
			out += String( v );
		}
		if ( i < N ) {
			out += separator;
		}
	}
	return out;
}

/**
* Returns a string created by manually joining array elements using a specified separator.
*
* @private
* @param {Object} x - input array object
* @param {integer} separator - separator
* @returns {string} output string
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = indexed( x, ',' );
* // returns '1,2,3,4'
*/
function indexed( x, separator ) {
	var out;
	var N;
	var v;
	var i;

	N = x.length - 1;
	out = '';
	for ( i = 0; i <= N; i++ ) {
		v = x[ i ];
		if ( !isUndefinedOrNull( v ) ) {
			out += String( v );
		}
		if ( i < N ) {
			out += separator;
		}
	}
	return out;
}


// MAIN //

/**
* Returns a string created by joining array elements using a specified separator.
*
* @param {Collection} x - input array
* @param {integer} separator - separator
* @returns {string} output string
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = join( x, ',' );
* // returns '1,2,3,4'
*
* @example
* var x = [ 1, 2, 3, null, undefined, 4 ];
*
* var out = join( x, '-' );
* // returns '1-2-3---4'
*/
function join( x, separator ) {
	var obj;
	if ( hasMethod( x, 'join' ) ) {
		return x.join( separator );
	}
	obj = arraylike2object( x );
	if ( obj.accessorProtocol ) {
		return accessors( obj, separator );
	}
	return indexed( x, separator );
}


// EXPORTS //

module.exports = join;
