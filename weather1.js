$(document).ready(function () {

    $('#submit').click(function () {

        var city = document.getElementById('city').value;

        console.log(`The city entered for weather report is ${city}`);

        if (city != ' ') {

            $.ajax({
                //  url:'httpapi.openweathermap.org/data/2.5/weather?q=London,uk&APPID=bdeaf5dd3f64536aa6910488547402a8',
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&APPID=bdeaf5dd3f64536aa6910488547402a8',
                type: "GET",
                dataType: "jsonp",
                success: function (data) {
                    var widget = show(data);

                    $("#show").html(widget);

                    // $("#city").value('');
                }
            });
        } else {
            $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field cannot be empty</div>");
        }
    });
});

const show = data => {
    return "<h3 style='font-size:40px; font-weight:bold;' class='text-center'>Current Weather for " + data.name + "," + data.sys.country + "</h3>" + "<h2 style='padding-left:40px;'><strong>Weather</strong>: " + data.weather[0].main + "</h2>" + "<h2 style='padding-left:40px;'><strong>Description</strong>: <img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>" + data.weather[0].description + "</h2>" + "<h2 style='padding-left:40px;'><strong>Temperature</strong>: " + data.main.temp + "&deg;C</h2>" + "<h2 style='padding-left:40px;'><strong>Pressure</strong>: " + data.main.pressure + " hPa</h2>" + "<h2 style='padding-left:40px;'><strong>Humidity</strong>: " + data.main.humidity + "%</h2>" + "<h2 style='padding-left:40px;'><strong>Minimum Temperature</strong>: " + data.main.temp_min + "&deg;C</h2>" + "<h2 style='padding-left:40px;'><strong>Maximum Temperature</strong>: " + data.main.temp_max + "&deg;C</h2>" + "<h2 style='padding-left:40px;'><strong>Wind Speed</strong>: " + data.wind.speed + " m/s</h2>" + "<h2 style='padding-left:40px;'><strong>Wind Direction & Degree</strong>: " + data.wind.deg + "&deg;C</h2>";
};
