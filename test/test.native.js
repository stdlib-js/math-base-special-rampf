/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var isPositiveZerof = require( '@stdlib/math-base-assert-is-positive-zerof' );
var PINF = require( '@stdlib/constants-float32-pinf' );
var NINF = require( '@stdlib/constants-float32-ninf' );
var EPS = require( '@stdlib/constants-float32-eps' );
var randu = require( '@stdlib/random-base-randu' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var rampf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( rampf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof rampf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `0` if `x` is less than `0`', opts, function test( t ) {
	var x;
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		x = -( randu()*100.0 ) - EPS;
		v = rampf( x );
		t.equal( isPositiveZerof( v ), true, 'returns 0 when provided '+x );
	}
	t.end();
});

tape( 'the function returns `x` if `x` is nonnegative', opts, function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		v = rampf( i );
		t.equal( v, i, 'returns x when provided '+i );
	}
	t.end();
});

tape( 'the function returns `0` if provided `-0`', opts, function test( t ) {
	var v = rampf( -0.0 );
	t.equal( isPositiveZerof( v ), true, 'returns +0' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v = rampf( NaN );
	t.equal( isnanf( v ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns `0` if provided `-infinity`', opts, function test( t ) {
	var v = rampf( NINF );
	t.equal( v, 0.0, 'returns 0' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', opts, function test( t ) {
	var v = rampf( PINF );
	t.equal( v, PINF, 'returns +infinity' );
	t.end();
});
