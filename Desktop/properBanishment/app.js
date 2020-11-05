$(document).ready(function () {

    function displayAllShirts() {
        event.preventDefault();
        var queryURL = "https://api.printful.com/";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(queryURL);
        })
    }
})