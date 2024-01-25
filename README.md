This repo aims to show difference in behavior between webpack 5.78 and 5.79 in how export names are minified.
5.79 does not minify the exported object's name if the object is destructured.

In bundle.js, the harmony export name "w" changes to the full name "Colors" with 5.79 when the object is destructured.
See commit history for more details.