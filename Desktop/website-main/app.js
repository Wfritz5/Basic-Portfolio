$(document).ready(function () {

    function displayAllShirts() {

        var queryURL = "https://wfritz5.wordpress.com/";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(queryURL);
            for (var i = 0; i < response.length; i++) {
                $("#shirtDisplay").append();
            }
        })
    }

    displayAllShirts();
});

{
    /* <script type = "text/javascript"src = "https://www.google.com/jsapi" ></script> */ }