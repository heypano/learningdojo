/** Created by pano on 2/9/16. */
// https://app.pluralsight.com/player?course=dojo-fundamentals&author=mike-vansickle&name=dojo-fundamentals-m4&clip=0&mode=live
// AND
// https://app.pluralsight.com/player?course=dojo-fundamentals&author=mike-vansickle&name=dojo-fundamentals-m5&clip=0&mode=live

// Dijit validation
// Dijit visuals
// Dijit themes
//     Claro theme uses LESS and is good as a base theme for custom themesß

// var hasTripPurpose = !!tripPurposeElem.value

/**
 * Attributes for the parser
 */
// data-dojo-type fully qualified path to a widget
// data-dojo-props specifies properties

/**
 * Adding a theme
 */

// 1)     <link href="//ajax.googleapis.com/ajax/libs/dojo/1.10.1/dijit/themes/claro.css" rel="stylesheet" />
// 2)     <body class="claro">
define([
    "dojo/on",
    "dojo/dom",
    "dojo/query",  // Returns nodelist
    "dojo/dom-construct",
    "dojo/ready",
    "dojo/parser",
    "dijit/registry",
    "dijit/Dialog",
    "dijit/form/Form",
    "dijit/form/Button",
    "dijit/form/NumberTextBox",
],function(on, dom, query, domConstruct, ready, parser, registry, Dialog){
    ready(function() {
        parser.parse().then(function () {
            var form = registry.byId("panoform");
            var dialogButton = dom.byId("gimmeADialog");

            document.body.style.opacity = 1;

            form.on("submit", function(e){
                if(!form.validate()){
                    alert("nope");
                    e.preventDefault();
                }
            })

            on(dialogButton, "click", function(){
                var dialog = new Dialog({
                    title: "Create expense item",
                    style: "width: 450px",
                    // This could be loaded using a template
                    content: '<div class="dijitDialogPaneActionBar"><button data-dojo-type="dijit/form/Button" class="cancel-button">Cancel</button><button data-dojo-type="dijit/form/Button" class="save-button">Save</button></div>',
                });

                var ra = dialog.show().then(function(){
                    setupDialog(dialog);
                });

            })

            function setupDialog(dialog){
                var form = registry.byNode(query("#panoform")[0]);
                var cancelButton = registry.byNode(query(".cancel-button", form.contentNode)[0]);
                var saveButton = registry.byNode(query(".save-button", form.contentNode)[0]);

                var buttonHandler = function() {
                    dialog.destroy(); // If this were hide, then there would be more than one dialog
                };

                saveButton.on("click", buttonHandler);
                cancelButton.on("click", buttonHandler);
            }

        })
    });
    return {
        put : function(contentString, containerId){
            var container = dom.byId(containerId);
            domConstruct.place(domConstruct.toDom("<br />"+contentString), container);
        },
    }
})

/**
 *
 * Widgets
 *
 * dijit/form/Form
 * dijit/form/Button
 * dijit/form/NumberTextBox (derives from ValidationTextBox)
 * dijit/Registry is a utility module that allows us to get access to a widget with widget id or root dom node
 * dijit/Dialog
 * dijit/form/DateTextBox
 * dijit/form/ValidationTextBox (ancestor)
 * dijit/form/CurrencyTextBox
 */

// registry.byId is going to use the widget id and will return the widget, not the node

// widgetid is set automatically - if there is an id on the tag it will use that, otherwise it will assign its own

/**** If we just included the widgets in the HTML file they would have to be loaded dynamically at run time, best to add them last in the factory function ****/


// If you're attaching an event handler using dojo-attach-event to a dijit widget then you should use camel case event
// Otherwise use lowercase