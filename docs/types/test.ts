/*
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

import Complex128Array = require( '@stdlib/array-complex128' );
import Complex64Array = require( '@stdlib/array-complex64' );
import join = require( './index' );


// TESTS //

// The function returns a string...
{
	join( [ 1, 2, 3 ], ',' ); // $ExpectType string
	join( new Float64Array( [ 1, 2, 3 ] ), ',' ); // $ExpectType string
	join( new Float32Array( [ 1, 2, 3 ] ), ',' ); // $ExpectType string
	join( new Int32Array( [ 1, 2, 3 ] ), ',' ); // $ExpectType string
	join( new Int16Array( [ 1, 2, 3 ] ), ',' ); // $ExpectType string
	join( new Int8Array( [ 1, 2, 3 ] ), ',' ); // $ExpectType string
	join( new Uint32Array( [ 1, 2, 3 ] ), ',' ); // $ExpectType string
	join( new Uint16Array( [ 1, 2, 3 ] ), ',' ); // $ExpectType string
	join( new Uint8Array( [ 1, 2, 3 ] ), ',' ); // $ExpectType string
	join( new Uint8ClampedArray( [ 1, 2, 3 ] ), ',' ); // $ExpectType string
	join( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), ',' ); // $ExpectType string
	join( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), ',' ); // $ExpectType string
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	join( 5, ',' ); // $ExpectError
	join( true, ',' ); // $ExpectError
	join( false, ',' ); // $ExpectError
	join( null, ',' ); // $ExpectError
	join( void 0, ',' ); // $ExpectError
	join( {}, ',' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = [ 1, 2, 3 ];

	join( x, 5 ); // $ExpectError
	join( x, true ); // $ExpectError
	join( x, false ); // $ExpectError
	join( x, null ); // $ExpectError
	join( x, {} ); // $ExpectError
	join( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	join(); // $ExpectError
	join( [ 1, 2, 3 ] ); // $ExpectError
	join( [ 1, 2, 3 ], ',', {} ); // $ExpectError
}
