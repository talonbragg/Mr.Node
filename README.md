<h1 align="center">
Mr.Node
</h1>

<p align="center">
<a href="https://travis-ci.org/talonbragg/Mr.Node.svg?branch=master"><img align="center" src="https://travis-ci.org/talonbragg/Mr.Node.svg?branch=master"></a>
<a href="https://gitter.im/mr_node/Lobby"><img align="center" src="https://badges.gitter.im/orgs/mr-node/mr-node.svg"></a>
</p>

<p align = "center">
<a href="https://mrnode.tk"><img src="https://www.mrnode.tk/tophatlogo%20(2).png"></a>
</p>
<p align="center"><b>A Javascript Library for <a href="https://nodejs.org">Node.js</a> Functions</b></p>

## Table Of Contents

- <a href="#about">**About**</a>
- <a href="#docs">**Documentation**</a>
- <a href="#start">**Getting Started**</a>
- <a href="#feat">**Features**</a>
- <a href="#li">**License &amp; Copyright**</a>

<a name="about"></a>
## About
Mr. Node is extremely easy to use. It is also very fast. **He is very smart**.

<a name="docs"></a>
## Documentation
**Npm:** 
```shell
npm install --save-dev mrnode
```

**Bower:** 
```shell
bower install --save-dev mrnode
```

**CDN:**
```html
<script src="https://unpkg.com/mrnode@0.1.4/dist/js/main.min.js">
```
<a name="start"></a>
## Getting Started

After you have installed Mr.Node, use Node's require attribute in your Javascript file. 

```javascript
   var mrnodei = require('mrnode');
   var mrnode = new mrnode();
```
<a name="feat"></a>
## Main Features

**Convert Sass to CSS**:
```javascript
   mrnode.csass('yourfolder/yourfile', 'yourdestinationfolder');
```

**Minify Files**:
```javascript
   mrnode.minifyjs('yourfolder/yourfile','yourdestination');
   mrnode.minifycss('yourfolder/yourfile','yourdestinationfolder');
```

**Beautify Files**:
```javascript
   mrnode.beautify('yourfolder/yourfile', 'yourdestinationfolder');
```

**To see more visit the [website](https://mrnode.tk).**

## Customizing Functions
You probably want to customize these functions that I have made. Many of the functions use npm **[Dependencies](https://docs.npmjs.com/files/package.json)**. With some knowledge, you can customize these functions to the better likings of your self.

**Example:**

```javascript
function create(name, extension) {
    fs.writeFile(name + '.' + extension, '//change the name of this file to whatever you like', function(err) {
        if (err) return console.log(err);
        console.log('File Created');
        **.pipe(gulp.dest('destination'))**
    });
}
```

In this example you add a destination to the `create();` function.
<a name="li"></a>
## License &amp; Copyright

Licensed under the [MIT License](https://github.com/talonbragg/Mr.Node/blob/master/LICENSE)

:copyright: **2017 Talon Bragg**
