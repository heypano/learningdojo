/**
 * Created by pano on 2/9/16.
 */
// https://app.pluralsight.com/player?course=dojo-fundamentals&author=mike-vansickle&name=dojo-fundamentals-m3&clip=0&mode=live

// dojo/when helps making things that are designed to be synchronous, asynchronous
// Sitepen
// Intern testing framework

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