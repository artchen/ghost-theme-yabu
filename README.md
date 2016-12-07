[![theme-logo](https://s3.amazonaws.com/rakugaki.me/images/theme-logo.png)](https://rakugaki.me)

# Yabu no Naka

**Yabu no Naka** is a [Ghost](http://ghost.org) theme designed and coded by [Art Chen](https://about.me/hermitage).

**Yabu no Naka** is of pure Chinese and Japanese style. It is named after a masterpiece of [Akutagawa Ryunosuke](http://en.wikipedia.org/wiki/Ry%C5%ABnosuke_Akutagawa). With refreshing green tone and classic layout, it is a great theme for writing journals, post drawings and designs, and sharing your artistic ideas.

Here are some features of this theme:

* 100% Responsive and ready for Retina
* Customizable sidebar menu and site descriptions
* 10+ social network icons
* Google Fonts

## Install

You don't need to upload `node_modules` and `src` to your production server.

For general theme installation, please refer to:

* Official instruction on ghost.org [http://docs.ghost.org/installation/](http://docs.ghost.org/installation/)

For deploying your ghost blog, I personally recommend [pm2](http://pm2.keymetrics.io/).

## Customize

The theme uses [Gulp](http://gulpjs.com/) as build tool, which makes customization very simple and clean.

The first time your get the theme package, install dependencies:

```bash
npm install
```

Before making any changes, run the following command to ensure all changes is monitored and compiled:

```bash
gulp watch
```

Then you can make changes in `src` folder, which contains all uncompressed source files. Gulp will automatically compile, compress and update changed files.

## CSS

The stylesheets are written in [less](http://lesscss.org/) and will be automatically compiled into CSS with `gulp-less`.

## Javascript

Javascript files used in this theme:

* `jQuery`
* `jquery.fitvids.js`
* `app.js`

`jQuery` and `jquery.fitvids.js` are dependencies that will be compiled into `assets/js/vendor.js`.

`app.js` is the custom logics that will be compiled into `assets/js/app.js`.

## Theme Settings

Modify `src/js/options.json` to change theme options.

Here are the options:

* `y_author` author's name
* `y_right_sidebar` set to `true` if you want the sidebar floating to right
* `y_right_logo` set to `true` if you want the logo floating to right
* `y_description`
  * `set` set to `true` if you want to customize the style of your site description
	* `desc`: Please be sure to write every line of your description inside `<p>` tag
* `y_social`: Add social network icons displayed in the bottom of page

Sample configuration:

```javascript
var theme_options = {
	"y_author": "Art Chen",
  "y_right_sidebar": false,
  "y_right_logo": false,
	"y_description": {
    "set": true,
    "desc": "<p>First line</p><p>Second line</p>",
    "textalign": "center"
	},
	"y_social": [
    {
      "name": "facebook",
      "url": "#"
    },
    {
      "name": "github",
      "url": "#"
    }
  ]
}
```

## Sources and Credits

* `/assets/fonts` - icons from [icomoon.io](http://icomoon.io/)
* `/assets/js/jquery.fitvids.js` - [FitVids.js](https://github.com/davatron5000/FitVids.js) by @ChrisCoyier, @davatron5000, @TrentWalton, @raygunray

Thank you for choosing a [Rakugaki](http://rakugaki.me) theme. Enjoy blogging!
