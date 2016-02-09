// Notes from http://dojotoolkit.org/documentation/tutorials/1.10/hello_dojo/index.html
// Include dojo

// Make sure to omit http or https when including this
// <script src="//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dojo/dojo.js" data-dojo-config="async: true"></script>


// Dojo's AMD loader defines global functions require and define
// require enables you to load modules
// define enables you to create modules
// A module is typically a single js file

// DOM manipulation: dojo/dom and dojo/dom-construct

require([
    '../js/libraries/dojo/dojo/dom',
    'dojo/dom-construct'
], function (dom, domConstruct) {
    var greetingNode = dom.byId('greeting');
    domConstruct.place('<em> Dojo!</em>', greetingNode);
});


// Using Node.js with a CDN requires a little bit of extra configuration

var dojoConfig = {
    async: true,
    // This code registers the correct location of the "demo"
    // package so we can load Dojo from the CDN whilst still
    // being able to load local modules
    packages: [{
        name: "demo",
        location: location.pathname.replace(/\/[^/]*$/, '') + '/demo'
    }]
};

// AMD modules use local scope for variables, avoiding cluttering the global namespace and providing faster name resolution.
// AMD is a standard specification with multiple implementations, so you are not locked into any single implementation - AMD modules can be used with any AMD loader.

// Plugins are special AMD modules that have functionality that activates with an exclamation point -- All you have to do is include it as a dependency

require([
    '../js/libraries/dojo/dojo/dom',
    'dojo/domReady!'
], function (dom) {
    var greeting = dom.byId('greeting');
    greeting.innerHTML += ' from Dojo!';
});

// Any modules for which you do not need to use the return value should be placed at the end of the dependency array, and references to them omitted from the parameter list to the callback function.

// Visual effects

require([
    '../js/libraries/dojo/dojo/dom',
    'dojo/fx',
    'dojo/domReady!'
], function (dom, fx) {
    // The piece we had before...
    var greeting = dom.byId('greeting');
    greeting.innerHTML += ' from Dojo!';

    // ...but now, with an animation!
    fx.slideTo({
        node: greeting,
        top: 100,
        left: 200
    }).play();
});