// Learning from https://app.pluralsight.com/library/courses/dojo-fundamentals/table-of-contents

// Chapter 1

// jsbin.com

// Dojo Project 4 Packages

// 1. Dojo : Tooling and infrastructure that wrap common software operations (e.g. Dojo dom module)
// 2. Dijit : Widgeting framework
// 3. DojoX : Originally recognized but not supported (Status of subprojects are listed on the website)
// 4. Util : Utility applications outside of the scope of production (DOH test runner)

// Dojo loads modules according to AMD specifications
// Dojo has tools to trace dependencies

require(["dojo/dom"],function(dom){
    dom.byId("destination").innerText = dom.byId("source").innerText+" copied from the source";
});

require(["dojo/dom", "dojo/request"], function(dom, request){
    request.get("https://api.github.com/users/heypano").then(function(data){
        dom.byId("gitHubData").innerText = "Fetched from the github API"+data;
    });
});

require(["dojo/parser"], function(parser){
    parser.parse();
});


