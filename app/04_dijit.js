/** Created by pano on 2/9/16. */
//https://app.pluralsight.com/player?course=dojo-fundamentals&author=mike-vansickle&name=dojo-fundamentals-m4&clip=0&mode=live

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