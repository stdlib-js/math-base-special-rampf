<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Ramp Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the [ramp function][ramp-function].

<section class="intro">

The [ramp function][ramp-function] is defined as

<!-- <equation class="equation" label="eq:ramp_function" align="center" raw="R(x) = \begin{cases} x & \textrm{if}\ x \geq 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}" alt="Ramp function."> -->

<div class="equation" align="center" data-raw-text="R(x) = \begin{cases} x &amp; \textrm{if}\ x \geq 0 \\ 0 &amp; \textrm{if}\ x \lt 0\end{cases}" data-equation="eq:ramp_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@3aca1e2faee6c79270455562ed28fda2e5e31c4c/lib/node_modules/@stdlib/math/base/special/rampf/docs/img/equation_ramp_function.svg" alt="Ramp function.">
    <br>
</div>

<!-- </equation> -->

or, alternatively, in terms of the `max` function

<!-- <equation class="equation" label="eq:ramp_function_alternative_defn" align="center" raw="R(x) = \operatorname{max}( x, 0 )" alt="Ramp function alternative definition."> -->

<div class="equation" align="center" data-raw-text="R(x) = \operatorname{max}( x, 0 )" data-equation="eq:ramp_function_alternative_defn">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@3aca1e2faee6c79270455562ed28fda2e5e31c4c/lib/node_modules/@stdlib/math/base/special/rampf/docs/img/equation_ramp_function_alternative_defn.svg" alt="Ramp function alternative definition.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-rampf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var rampf = require( '@stdlib/math-base-special-rampf' );
```

#### rampf( x )

Evaluates the [ramp function][ramp-function].

```javascript
var v = rampf( 3.14 );
// returns 3.14

v = rampf( -3.14 );
// returns 0.0

v = rampf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var rampf = require( '@stdlib/math-base-special-rampf' );

var x = linspace( -10.0, 10.0, 101 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'R(%d) = %d', x[ i ], rampf( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/rampf.h"
```

#### stdlib_base_rampf( x )

Evaluates the ramp function (single-precision).

```c
float y = stdlib_base_rampf( 3.0f );
// returns 3.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_rampf( const float x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/rampf.h"
#include <stdio.h>

int main() {
    float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_rampf( x[ i ] );
        printf( "R(%f) = %f\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/ramp`][@stdlib/math/base/special/ramp]</span><span class="delimiter">: </span><span class="description">evaluate the ramp function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-rampf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-rampf

[test-image]: https://github.com/stdlib-js/math-base-special-rampf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-rampf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-rampf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-rampf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-rampf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-rampf/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-rampf/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-rampf/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-rampf/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-rampf/main/LICENSE

[ramp-function]: https://en.wikipedia.org/wiki/Ramp_function

<!-- <related-links> -->

[@stdlib/math/base/special/ramp]: https://github.com/stdlib-js/math-base-special-ramp

<!-- </related-links> -->

</section>

<!-- /.links -->
