/**
 * Created by pano on 2/9/16.
 */
// http://dojotoolkit.org/documentation/tutorials/1.10/i18n/

// Locale detected automatically through dojo/locale (dojo.locale)
// If you NEED to specify a locale
// var dojoConfig = {
//     locale: 'pt-pt'
// };


// Once a Dojo Toolkit-based application is loaded, it is not possible to change the locale.
// When using the dojo/parser, the lang= setting on an ancestor DOMNode overrides the dojoConfig.locale setting.
// This behavior will change in Dojo 2.0. You can also specify the langfor individual widgets, overriding the dojoConfig.locale setting for only that widget.

// If you need to display date resources in more than one language use extraLocale property

// A resource bundle is a file containing a JavaScript object literal (or dictionary) of terms used by your application code for a specific locale.
// When a user's locale is detected (and dojo/i18n is required), you can use the i18n facilities within the Dojo Toolkit to load the resource bundle for a specific locale.

// e.g.
// define({
// invalidMessage: "入力した値は無効です。",
//     missingMessage: "この値は必須です。",
//     rangeMessage: "この値は範囲外です。"
// });

/**
 * Structure of the resource bundle:
 */

// The fields of the bundle correspond to fields that are referenced within dijit/form/ValidationTextBox (for instance, myValidationWidget.invalidMessage);
// Not all fields need to be defined in a specific resource bundle;
// Not all language/country combinations need to be defined.

/**
 *
 *  Create a directory called nls (Note that the directory must be named "nls", and must be a subdirectory of the code that will be using it.)
 *  Inside the nls directory for your namespace, you'll add both individual files and directories based on either the international language code, or the full locale (such as pt-pt):
 *  The resource bundles in the root of the /nls folder are intended to be master bundles
 *  what this means is that any and all properties to be consumed must be defined within these files. (fallback)
 *  Finally, in your master bundle (the main one in the root of the /nls folder), add properties matching each locale you've defined and set the value of each to true
 *
 *  The properties to be referenced in application code are declared on the root property
 *  while the localized Japanese version defines the properties at the top level of the object. You must follow this form for i18n to work correctly.
 *
 *  To consume the bundle you need dojo/i18n puls dojo/i18n! and i18n.getLocalization
 *  dojo/i18n! fetches and assembles the locale-specific bundle
 *  i18n.getLocalization returns the JavaScript object literal fully assembled
 *
 *  Both dojo/i18n! and i18n.getLocalization have the same method signature:
 *  the main namespace under which the resource bundles live, and the name (without the .js extension) of the bundle to load.
 *  In addition, i18n.getLocalization can take one more argument: the locale of the resource bundle to load.
 *
 *      later on, in the declaration of the widget:
 postMixInProperties: function(){
    this.inherited(arguments);
    this.messages = i18n.getLocalization("dijit.form", "validate", this.lang);
    this._setConstraintsAttr(this.constraints);
    ...
 *
 * You'll see that i18n.getLocalization returns a JavaScript object, which we assign to the property messages;
 * we then read that object to populate the properties of the widget that require localization.
 */

define([
    "dojo/i18n", // to require i18n.getLocalization
    "dojo/i18n!./nls/internationalizationExperiment" // to require custom internationalization
],function(i18n){
    var customLocale = "en-us";
    var messages;

    setLocale(customLocale);

    function setLocale(locale){
        customLocale = locale;
        messages = i18n.getLocalization("app", "internationalizationExperiment", customLocale);
    }

    return {
        getLocalizedString : function(id){
            return messages[id];
        },
        setLocale : setLocale,
    };
});