/**
 * Created by pano on 2/9/16.
 */
// https://app.pluralsight.com/player?course=dojo-fundamentals&author=mike-vansickle&name=dojo-fundamentals-m6&clip=0&mode=live

/**
 * Widget Lifecycle
 */

// constructor() - override this in custom widget
// parameters are mixed in (data-dojo-props or object passed)
// postMixinProperties() - validating config options
// buildRendering - templates are loaded, parsed and assigned as the content of the widget's dom node (you can override)
// call setters - _ {get or set} + {field name} + Attr to make custom setters
// postCreate() - widget & children have been completely created with visual representation (may not have been added to the page/ rendered)
// startup() - final method, will not always automatically be called. When added to the document. If not added when created, you need to make sure you do this automatically
// destroy() - removal of dom elements and references

// this.inherited(arguments) will work

// postCreate is where most code should go

/**
 *  Inheritance
 */

// If only ancestor is basic js object
// dojo/_base/declare([], { class members })

// Inheritance with no mixins
// dojo/_base/declare([base class], { class members })

// Inheritance with mixins
// dojo/_base/declare([base class, mixins...], { class members })

/**
 * Modules
 */

// dijit/_WidgetBase is the recommended base class for all base widgets
// dojo/Stateful is a base class that provides the capability to provide custom getters and setters, also watch
// dijit/_TemplatedMixin informs dojo that a widget has a template
// dijit/_WidgetsInTemplateMixin is a mix in that we can add if our template contains declarative widgets
// dijit/form/Textarea


define([
    "dojo/on",
    "dojo/dom",
    "dojo/query",
    "dojo/dom-construct",
],function(on, dom, query, domConstruct){
    return {
        put : function(contentString, containerId){
            var container = dom.byId(containerId);
            domConstruct.place(domConstruct.toDom("<br />"+contentString), container);
        },
    }
})