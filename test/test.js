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

var tape = require( 'tape' );
var AccessorArray = require( '@stdlib/array-base-accessor' );
var Complex128Array = require( '@stdlib/array-complex128' );
var Float64Array = require( '@stdlib/array-float64' );
var Int32Array = require( '@stdlib/array-int32' );
var join = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof join, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function joins an array-like object (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3, null ];

	expected = '1,2,3,';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	expected = '1-2-3-';
	actual = join( x, '-' );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = [];

	expected = '';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = [ 'hello', '', undefined, null, NaN, undefined ];

	expected = 'hello,,,,NaN,';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = [ null, undefined, null, undefined ];

	expected = ',,,';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = [ null, 1, 2, 'testString', undefined ];

	expected = ',1,2,testString,';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = [ null, 1, 2, NaN, undefined ];

	expected = ',1,2,NaN,';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = [ 1 ];

	expected = '1';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function joins an array-like object (float64)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	expected = '1,2,3';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0 ] );

	expected = '1';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [] );

	expected = '';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function joins an array-like object (int32)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Int32Array( [ 1, 2, 3 ] );

	expected = '1,2,3';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [] );

	expected = '';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1 ] );

	expected = '1';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function joins an array-like object (complex128)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0 ] );

	expected = '1 - 1i,2 - 2i';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = new Complex128Array( [] );

	expected = '';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function joins an array-like object (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new AccessorArray( [ 1, 2, 3, 4 ] );

	expected = '1,2,3,4';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [ 1, 2, 3, null, undefined, 4 ] );

	expected = '1,2,3,,,4';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [ 1 ] );

	expected = '1';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [ null, undefined, NaN ] );

	expected = ',,NaN';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [] );

	expected = '';
	actual = join( x, ',' );

	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
