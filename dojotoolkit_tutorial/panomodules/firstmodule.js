define(["dojo/dom"],function(dom){
    return {
        setLoadedText : function(loadedText){ dom.byId("loadedText").textContent = loadedText+" (This was printed through the firstmodule setLoadedText function)"; },
    };
});