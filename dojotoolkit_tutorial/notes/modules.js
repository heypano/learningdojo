/**
 * Created by pano on 2/8/16.
 */
// Source: http://dojotoolkit.org/documentation/tutorials/1.10/modules/index.html

// A module is a value that can be accessed by a single reference
// A module is stored in your file system in a single file.

/**
 * Creating a module
 */

// You create a module by registering it with the loader
// The same object will be used when you reference this module

define(function(){
    var privateValue = 0;
    return {
        increment: function(){
            privateValue++;
        },

        decrement: function(){
            privateValue--;
        },

        getValue: function(){
            return privateValue;
        }
    };
});

// If there are dependencies, they are loaded automatically before the module (passed as an argument to define before module value)
define([
    "../js/libraries/dojo/dojo/_base/declare",
    "dojo/dom",
    "app/dateFormatter"
], function(declare, dom, dateFormatter){
    return declare(null, {
        showDate: function(id, date){
            dom.byId(id).innerHTML = dateFormatter.format(date);
        }
    });
});


/**
 * Loading a module
 */


// AMD modules are identified by the path and file name
// Given this file structure
// /
// index.html
// /dojo/
// /app/
//     counter.js
// By locating our module in the file system in a sub-folder below the folder containing index.html, and in a sibling folder of our AMD loader (dojo/dojo.js)
// we don't have to do any extra configuration for the loader to know that the module id "app/counter" indicates that the loader should load the file app/counter.js and use its return value as the module.


// require loads the module. You can also just use require(["app/counter"]) (if you're using it for its side-effects)
// If you do need a reference, you need to supply a callback function, modules will be returned in order
require([
    "app/counter"
], function(counter){
    log(counter.getValue());
    counter.increment();
    log(counter.getValue());
    counter.decrement();
    log(counter.getValue());
});

/**
 * Plugins
 */

// in "my/widget/NavBar.js"
define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/NavBar.html"
], function(declare, _WidgetBase, _TemplatedMixin, template){
    return declare([_WidgetBase, _TemplatedMixin], {
        // template contains the content of the file "my/widget/templates/NavBar.html"
        templateString: template
    });
});


// Plugins are loaded with a  "!" at the end of the module identifier. Data after the "!" is passed directly to the plugin for processing.

/* Most Important Plugins */

/*
 * dojo/text
 */

// Used when you load a string from a file. Value will be cached. The builder will inline strings loaded using dojo/text!

/*
 * dojo/i18n
 */

/*
 * dojo/has
 */

/*
 * dojo/domReady
 */
