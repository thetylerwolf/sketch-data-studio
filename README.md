## [Landing Page Example](http://dstroot.github.io/landing-page-example)


[![Dependency Status](https://david-dm.org/dstroot/landing-page-example.png)](https://david-dm.org/dstroot/landing-page-example)
[![devDependency Status](https://david-dm.org/dstroot/landing-page-example/dev-status.png)](https://david-dm.org/dstroot/landing-page-example#info=devDependencies)



### Background

I wanted to create a reasonably nice landing page as a learning process.  Feel free to use and abuse as you see fit.

The key files are only:

* HTML Page: `index.htm`
* Stylesheet (built with LESS): `/less/style.less`

### Technical Dependencies

* [Nodejs](http://nodejs.org/)
* [Gruntjs](http://gruntjs.com/)

### Steps to build and run locally

1. Clone this repository. `git clone https://github.com/dstroot/landing-page-example.git && cd landing*`
2. Run `npm install`.
3. Copy the latest Bootstrap .less source into `less/bootstrap` (I don't keep it in the repository).
4. You need to have the Grunt CLI installed.  If you don't you can install it with: `npm install -g grunt-cli`.
5. Type `grunt` to [do a bunch of stuff and] start up the server.
6. Browse to "http://localhost:3000" on your machine.
7. Voila!  Type `ctrl+c` to exit.

### Live Reload

1. Install the free LiveReload addin from the Chrome [Web Store](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en-US)
2. **When Grunt is serving the page:** Click the LiveReload applet in Chrome to activate it.  The center dot should become solid.
3. Make some changes to the code and save the changes...and...boom!

### Credits and Resources

* [Bootstrap](http://getbootstrap.com/)
* [Font Awesome](http://fontawesome.io/)
* [jQuery](http://jquery.com/)
* [Animate CSS](https://daneden.me/animate/)
* [Google Fonts](http://www.google.com/fonts)
* [{less}](http://lesscss.org/)
* [David](https://david-dm.org/)

#### Build Tooling

* [Sublime Text](http://www.sublimetext.com/)
* [Nodejs](http://nodejs.org/)
* [Gruntjs](http://gruntjs.com/)
* [Bower](http://bower.io/)

Bower has one minor quirk that you need to be aware of – it will install components into a “bower_components” directory by default, which unfortunately is not under the public directory. I suggest you create a directory called “vendor” under “public/js.” You can do this by running the command `mkdir public/js/vendor.` Next, in the app directory, create a plain text file called “.bowerrc” that contains:

`{ "directory" : "public/js/vendor" }`

This configuration file will tell Bower to install tools into the “public/javascripts/vendor” directory.

#### Design and Utilities

* [Picturefill](https://github.com/scottjehl/picturefill) Responsive Images
* [Scrollto](https://github.com/flesler/jquery.scrollTo) Scroll to parts on the page
* [Leaflet](https://github.com/Leaflet/Leaflet) Open Street Map maps
* [Swipe](https://github.com/bradbirdsall/Swipe) Swipable carousel

#### Parallax

* [Stellar.js](https://github.com/markdalgleish/stellar.js) Simple parallax library
* [Parallax.js](http://wagerfield.github.io/parallax/) very cool!


### Useful Tools

* [HTML to Jade converter](http://html2jade.aaron-powell.com)
* [Codepen](http://codepen.io/) - Great examples
* [Codrops](http://tympanus.net/codrops/) - fantastc design examples with code

### Recommended Design

- [Google Bootstrap](http://todc.github.io/todc-bootstrap/) - Google-styled theme for Bootstrap
- [Colors](http://clrs.cc) - a nicer color palette for the web.
- [CSS Spinning Loaders](http://codepen.io/andymcfee/pen/ioskA) - spinning loader in css.
- [Creative Button Styles](http://tympanus.net/Development/CreativeButtons/) - awesome button styles.
- [3D Dropdown Menu](http://soulwire.github.io/Makisu/) - CSS3 3D Dropdown Menu that folds and unfolds.
- [Calendar in CSS](http://cssdeck.com/labs/vr7yddm7) - Nice looking calendar in pure HTML and CSS.
- [Creative Link Effects](http://tympanus.net/Development/CreativeLinkEffects/) - Beautiful link effects in CSS.


### Stock Photos

* [Little Visuals](http://littlevisuals.co/)
* [Unsplash](http://unsplash.com/)
* [Death to the Stock Photo](http://join.deathtothestockphoto.com/)
* [New Old Stock](http://nos.twnsnd.co/)
* [Superfamous (requires attribution)](http://superfamous.com/)
* [Picjumbo](http://picjumbo.com/)
* [The Pattern Library](http://thepatternlibrary.com/)
* [Gratisography](http://www.gratisography.com/)
* [Getrefe](http://getrefe.tumblr.com/)


### Recommended Node.js Libraries

* [nodemon](https://github.com/remy/nodemon) - automatically restart node.js server on code change.
* [geoip-lite](https://github.com/bluesmoon/node-geoip) - get location name from IP address.
* [email.js](https://github.com/eleith/emailjs) - send emails with node.js (without sendgrid or mailgun).
* [filesize.js](http://filesizejs.com/) - make file size pretty, e.g. `filesize(265318); // "265.32 kB"`.
* [Numeral.js](http://numeraljs.com) - a javascript library for formatting and manipulating numbers.

### Recommended Client-Side libraries

- [Hover](https://github.com/IanLunn/Hover) - Awesome css3 animations on mouse hover.
- [platform.js](https://github.com/bestiejs/platform.js) - Get client's operating system name, version, and other useful information.
- [iCheck](https://github.com/fronteed/iCheck) - Custom nice looking radio and check boxes.
- [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/) - Responsive jQuery Lightbox Plugin.
- [jQuery Raty](http://wbotelhos.com/raty/) - Star Rating Plugin.
- [Headroom.js](http://wicky.nillia.ms/headroom.js/) - Hide your header until you need it.
- [Fotorama](http://fotorama.io) - Very nice jQuery gallery.
* [X-editable](http://vitalets.github.io/x-editable/) - Edit form elements inline.
* [Offline.js](http://github.hubspot.com/offline/docs/welcome/) - Detect when user's internet connection goes offline.
* [Color Thief](https://github.com/lokesh/color-thief) - Grabs the dominant color or a representative color palette from an image.
* [Alertify.js](http://fabien-d.github.io/alertify.js/) - Sweet looking alerts and browser dialogs.

### Charts

- [Morris.js](http://www.oesmith.co.uk/morris.js/)











