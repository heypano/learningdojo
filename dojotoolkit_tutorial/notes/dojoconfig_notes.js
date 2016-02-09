/**
 * Created by pano on 2/5/16.
 */
// Source: http://dojotoolkit.org/documentation/tutorials/1.10/dojo_config/index.html

/* dojoConfig Object */

// dojoConfig object allows you to set options and default behavior
// It is referenced by the module loader and dojo components with global options
// e.g.
// <div id="dialog" data-dojo-type="dijit/Dialog" data-dojo-props="title: 'dojoConfig / dojo/_base/config'"></div>
// dojoConfig is defined in a script block before dojo.js is loaded


////  Options get mixed into the dojo/_base/config object
//    So access them with with dojo.config in the console

/* Options and how to use them */

/**
 * has()
 */

// Used for feature detection - e.g. You can disable the amd factory scan:

// <script>
    dojoConfig = {
        has: {
            "dojo-amd-factory-scan": false
        }
    };
// </script>

// Also used to enable granular debugging options
// e.g. enable firebug lite if browser doesn't have it
// or to enable debugging messages for deprecated and experimental features
// <script>
dojoConfig = {
    has: {
        "dojo-firebug": true,
        "dojo-debug-messages": true
    }
};
// </script>

// To disable a guaranteed console object we can set dojo-guarantee-console feature to false.
// This feature defaults to true and will create a dummy console object if necessary so that any console.* logging statements in your code safely and quietly execute without throwing exceptions.
// debugContainerId: specify a particular element to contain the console UI
// popup: use a popup window rather than rendering the console into the current window

/**
 * Loader config
 */

dojoConfig = {
    baseUrl: "/js", // The base URL prepended to a module identifier when converting it to a path or URL.
    packages: [{    // An array of objects which provide the package name and location:
        name: "myapp",
        location: "/js/myapp"
    }],
    /* Alternatively with strings in the packages array and paths
     packages: [
         "package1",
         "package2"
     ],
     paths: {       // a map of module id fragments to file paths:
         package1: "../lib/package1",
         package2: "/js/package2"
     }

     */
    map: {          // Allows you to map paths in module identifiers to different paths:
        dijit16: {
            dojo: "dojo16"
        }
    },
    async: true,    // Defines if Dojo core should be loaded asynchronously. Values can be true, false or legacyAsync, which puts the loader permanently in legacy cross-domain mode
    parseOnLoad: true, // If true, parses the page with dojo/parser when the DOM and all initial dependencies (including those in the dojoConfig.deps array) have loaded.
    //// It is recommended that parseOnLoad be left at false (it defaults to false, so you can simply omit this property), and that developers explicitly require dojo/parser and call parser.parse().
    deps: ["dojo/parser"],  // An array of resource paths which should load immediately once Dojo has loaded
    callback: function(parser) { // The callback to execute once deps have been retrieved
        // Use the resources provided here
    },
    waitSeconds: 5, // Amount of time to wait before signaling load timeout for a module; defaults to 0 (wait forever):
    cacheBust: true, // If true, appends the time as a querystring to each module URL to avoid module caching
}

// One very common scenario is using Dojo Toolkit from CDN with local modules.
// By using the packages configuration, we've made all references to demo/* point to our local
dojoConfig = {
    packages: [
        // Any references to a "demo" resource should load modules locally, *not* from CDN
        {
            name: "demo",
            location: "/documentation/tutorials/1.10/dojo_config/demo"
        }
    ],
    map: {
        // Instead of having to type "dojo/domReady!", we just want "ready!" instead
        "*": {
            ready: "dojo/domReady"
        }
    },
};

// Documentation about the new loader:
// http://dojotoolkit.org/reference-guide/1.10/loader/amd.html

/**
 * Locale and Internationalization
 */

// "Worthy of its own tutorial"
// You can configure the locale to use for any widgets or localized content using Dojo's i18n infrastructure
// The locale option lets you override the default provided to Dojo by your browser
// Setting the locale ahead of any module loading ensures that the correct localized message bundle dependencies are loaded where necessary
// We can use the dojo/date/locale module to format a date object to a localized string for the Dialog title
// For multi-lingual pages, you will need to load bundles for the other locales as well as the one specified by your browser or the dojoConfig.locale property. In this case, use the extraLocale config property, with an array of string locale name
// When using the dojo/parser, the lang= setting on an ancestor DOMNode overrides the dojoConfig.locale setting. This behavior will change in Dojo 2.0. You can also specify the langfor individual widgets, overriding the dojoConfig.locale setting for only that widget.


/**
 *  Custom Properties
 */

// Several other modules in Dojo use it for their own particular configuration properties
// e.g. Dijit Editor allowXdRichTextSave
// Custom:
dojoConfig = {
    app: {
        userName: "Anonymous"
    }
}
// There are many ways to approach populating dojoConfig.app. It can be pre-populated with reasonable defaults and mixed-in with specific values later. In production, the dojoConfig script block might get written out on the server-side.
// Alternatively, you could populate it from a cookie with JSON-formatted configuration values, or—as in our earlier example—you could extract configuration data straight from the query string. In development and test mode, you could
// use a template that provides dummy values, or load a script or module that populates it.

