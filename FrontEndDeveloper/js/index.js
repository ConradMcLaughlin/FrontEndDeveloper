/*
index.js
*/

/*
In jQuery you can wrap the entire code so that it is only executed when the document is ready. 
Code only executed once all the elements have been loaded correctly.

Also takes it out of the global scope (Don't have to worry about shared variable names in any other js files)

*/

$(document).ready(function () {
    
    "use strict";

    //var msg = "hello javascript"
    ////alert(msg);
    //console.log(msg); //Write to the console

    //var resultsDiv = document.getElementById("results");
    //resultsDiv.innerHTML = "<p>This is from JavaScript</p>";

    //console.log("msg is " + typeof(msg));
    //console.log("resultsDiv is " + typeof (resultsDiv));
       
    var resultList = $("#resultsList");
    resultList.text("This is from jQuery");

    var toggleButton = $("#toggleButton");
    toggleButton.on("click", function () {

        //1 second animation to expand
        resultList.toggle(1000);

        //Toggle button text on click
        if (toggleButton.text() == "Hide")
            toggleButton.text("Show");
        else
            toggleButton.text("Hide");

    })

    //Updates all items found with the same text
    //$("header nav li").text("Testing jQuery")

    var listItems = $("header nav li");
    listItems.css("font-weight", "bold");
    //listltems.css("font-size", "28px");
    listItems.filter(":first").css("font-size", "18px")


    //[***
    //Append to result list
    var results =
        [
            {
                name: "jQuery",
                language: "JavaScript",
                score: 4.5,
                showLog: function () {

                },
                owner: {
                    login: "shawnwildermuth",
                    id: 123456
                }
            },
            {
                name: "jQuery",
                language: "JavaScript",
                score: 3.5,
                showLog: function () {

                },
                owner: {
                    login: "shawnwildermuth",
                    id: 123456
                }
            }
        ];
    
    //clear resultList
    resultList.empty();
    //For each on the results
    $.each(results, function(i, item) {

        var newResult = $("<div class='result'>" +
        "<div class='title'>" + item.name + "</div>" + 
        "<div>Language:" + item.language + "</div>" + 
        "<div>Owner:" + item.owner.login + "</div>" + 
        "</div>");

        newResult.hover(function () {
            //make it darker
            $(this).css("background-color", "lightgray");
        }, function () {
            //reverse
            $(this).css("background-color", "transparent");
        })

        resultList.append(newResult);
    });
    //***]
    



    ////undefined:
    //var none;
    //console.log("none is " + typeof (none));

    //var aNumber = 10;
    //console.log("aNumber is " + typeof (aNumber));

    //var trueFalse = true;
    //console.log("trueFalse is " + typeof (trueFalse));

    ////variables do not need to be defined. Not good as you could create new variables by accident. Therefore use the "use strict" declaration
    ////msgs = "this shouldn't work";

    ////note: this can be written as if (!none) as none has no value
    //if (none == undefined) {
    //    console.log("none is undefined")
    //}

    ////Coersion used - tries to do a comparison. This returns true
    //if (aNumber == "10") {
    //    console.log("10 is 10")
    //}

    ////Extact comparison (triple ===)
    //if (aNumber === "10") {
    //    console.log("10 is 10 (exact)")
    //}
})