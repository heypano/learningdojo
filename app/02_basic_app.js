// Chapter 2

// Configuring Dojo
// Client Side Validation
// DOM Manipulation

// define function declares modules
// 1st argument if id is present it registers the module - usually empty (optional)
// 2nd argument Array of dependencies fully qualified OR relative path (optional)
// 3d argument factory function (define the module)

// require function executes code in an isolated context
// 1st argument is configuration object (optional)
// 2nd argument is Array of dependencies (optional)
// 3d argument is callback that will be executed given config and dependencies

// Dojo modules for this chapter
// dojo/dom interacts with the dom byId(), isDescendant(), setSelectable()
// dojo/on interacts with the events (true or synthetic) - callable functions have properties so e.g. you can do on.emit() or just on()
//    on.once() will only happen once. Look into on.emit(), on.selector(), on.pausable(), on.once()
// dojo/ready is one of several ways to defer code execution until dom is finished loading - not commonly used, use domReady instead (plugin)
// dojo/query is for CSS style queries but it returned nodes also handles map and forEach functions even if the browser doesn't support
// dojo/dom-construct construct place and destroy elements create(), toDom() (takes a string), place() to place DOM nodes (e.g. after/last), empty(), destroy()
// dojo/domReady! ! means exclamation point, looks for special load method in module definition (returns results as argument to callback) - no result for domReady! though


// Validation
define(["dojo/on", "dojo/dom", "dojo/query", "dojo/dom-construct", "dojo/domReady!"],
    function (on, dom, query, domConstruct){
        setupLoginFormValidation();
        setupExpenseFormValidation();

        function setupLoginFormValidation(){
            var form = dom.byId("loginForm");

            var employeeNumberElem = dom.byId("employeeNumber");

            if(form){
                on(form, "submit", function (e){
                    console.log("Form Submitted!");
                    var isValid = true;
                    var employeeNumber = parseInt(employeeNumberElem.value);
                    if(isNaN(employeeNumber) || employeeNumber != 12345){
                        alert("Employee number must be '12345'");
                        isValid = false;
                    }
                    if(!isValid){
                        e.preventDefault();
                    }
                })
            }
        }

        function setupExpenseFormValidation(){
            var form = dom.byId("expenseReportForm");

            var tripPurposeElem = dom.byId("tripPurpose");

            if(form){
                on(form, "submit", function (e){
                    console.log("Form Submitted!");
                    var isValid = true;
                    var tripPurpose = tripPurposeElem.value;
                    if( !tripPurpose || tripPurpose.length == 0){
                        dom.byId("tripPurposeError").innerHTML =  "Purpose of trip is required";
                        isValid = false;
                    }else{
                        dom.byId("tripPurposeError").innerHTML =  "";
                    }

                    var expenseItemRows = query(".expense-item");
                    for (var i = 0; i < expenseItemRows.length; i++){
                        var errorMessage = "<ul>";
                        var row = expenseItemRows[i];
                        var elems = query("input[data-type]", row); // This will do descendants!
                    }

                    if(!isValid){
                        e.preventDefault();
                    }
                })
            }
        }
    }
);

