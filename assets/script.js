


var searchBtn = document.getElementById("#search-btn");
var currentCity = document.getElementById("#current-city");


var url = "https://api.openweathermap.org/data/2.5/weather?q="

var APIKey = "&APPID=0d452834d2b80364d256723841f41106";
var units = "&units=imperial"





function getCity() {
    var searchCity = document.getElementById("search-city").value;




    fetch(url + searchCity + APIKey + units)
        .then(function (response) {
            return response.json()
                .then(function (data) {


                    var temp = document.querySelector('#temp');
                    temp.innerHTML = 'Temp: ' + data.main.temp;

                    var wind = document.querySelector('#wind');
                    wind.innerHTML = 'Wind Speed: ' + data.wind.speed;

                    var humidity = document.querySelector('#humidity');
                    humidity.innerHTML = 'Humidity: ' + data.main.humidity;

                    var lat = 'lat=' + data.coord.lat
                    var lon = '&lon=' + data.coord.lon


                    fetch('https://api.openweathermap.org/data/2.5/onecall?' + lat + lon + '&exclude=hourly,daily' + APIKey + units)
                        .then(function (response) {
                            return response.json()
                                .then(function (data) {


                                    var uvIndex = document.querySelector('#uvindex');
                                    uvIndex.innerHTML = 'UV Index: ' + data.current.uvi;

                                    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + searchCity + APIKey + units)
                                        .then(function (response) {
                                            return response.json()
                                                .then(function (data) {
                                                    console.log(data)

                                                    //day1 forcast
                                                    var dateOne = document.querySelector('#date1')
                                                    dateOne.innerHTML = 'Date: ' + moment().add(1, 'days').format("MMM Do")

                                                    var imgOne = document.querySelector("#img1")
                                                    imgData1 = data.list[1].weather[0].icon
                                                    imgOne.setAttribute('src', 'https://openweathermap.org/img/wn/' + imgData1 + '.png')

                                                    var tempOne = document.querySelector("#temp1")
                                                    tempOne.innerHTML = 'Temp: ' + data.list[1].main.temp

                                                    var windOne = document.querySelector("#wind1")
                                                    windOne.innerHTML = 'Wind: ' + data.list[1].wind.speed

                                                    var humidityOne = document.querySelector("#humidity1")
                                                    humidityOne.innerHTML = 'Humidity: ' + data.list[1].main.humidity


                                                    //day2 forcast
                                                    var dateTwo = document.querySelector('#date2')
                                                    dateTwo.innerHTML = 'Date: ' + moment().add(2, 'days').format("MMM Do")

                                                    var imgTwo = document.querySelector("#img2")
                                                    imgData2 = data.list[2].weather[0].icon
                                                    imgTwo.setAttribute('src', 'https://openweathermap.org/img/wn/' + imgData2 + '.png')

                                                    var tempTwo = document.querySelector("#temp2")
                                                    tempTwo.innerHTML = 'Temp: ' + data.list[2].main.temp

                                                    var windTwo = document.querySelector("#wind2")
                                                    windTwo.innerHTML = 'Wind: ' + data.list[2].wind.speed

                                                    var humidityTwo = document.querySelector("#humidity2")
                                                    humidityTwo.innerHTML = 'Humidity: ' + data.list[2].main.humidity


                                                    //day3 forcast
                                                    var dateThree = document.querySelector('#date3')
                                                    dateThree.innerHTML = 'Date: ' + moment().add(3, 'days').format("MMM Do")

                                                    var imgThree = document.querySelector("#img3")
                                                    imgData3 = data.list[3].weather[0].icon
                                                    imgThree.setAttribute('src', 'https://openweathermap.org/img/wn/' + imgData3 + '.png')

                                                    var tempThree = document.querySelector("#temp3")
                                                    tempThree.innerHTML = 'Temp: ' + data.list[3].main.temp

                                                    var windThree = document.querySelector("#wind3")
                                                    windThree.innerHTML = 'Wind: ' + data.list[3].wind.speed

                                                    var humidityThree = document.querySelector("#humidity3")
                                                    humidityThree.innerHTML = 'Humidity: ' + data.list[3].main.humidity


                                                    //day4 forcast
                                                    var dateFour = document.querySelector('#date4')
                                                    dateFour.innerHTML = 'Date: ' + moment().add(4, 'days').format("MMM Do")

                                                    var imgFour = document.querySelector("#img4")
                                                    imgData4 = data.list[4].weather[0].icon
                                                    imgFour.setAttribute('src', 'https://openweathermap.org/img/wn/' + imgData4 + '.png')

                                                    var tempFour = document.querySelector("#temp4")
                                                    tempFour.innerHTML = 'Temp: ' + data.list[4].main.temp

                                                    var windFour = document.querySelector("#wind4")
                                                    windFour.innerHTML = 'Wind: ' + data.list[4].wind.speed

                                                    var humidityFour = document.querySelector("#humidity4")
                                                    humidityFour.innerHTML = 'Humidity: ' + data.list[4].main.humidity


                                                    //day5 forcast
                                                    var dateFive = document.querySelector('#date5')
                                                    dateFive.innerHTML = 'Date: ' + moment().add(5, 'days').format("MMM Do")

                                                    var imgFive = document.querySelector("#img5")
                                                    imgData5 = data.list[5].weather[0].icon
                                                    imgFive.setAttribute('src', 'https://openweathermap.org/img/wn/' + imgData5 + '.png')

                                                    var tempFive = document.querySelector("#temp5")
                                                    tempFive.innerHTML = 'Temp: ' + data.list[5].main.temp

                                                    var windFive = document.querySelector("#wind5")
                                                    windFive.innerHTML = 'Wind: ' + data.list[5].wind.speed

                                                    var humidityFive = document.querySelector("#humidity5")
                                                    humidityFive.innerHTML = 'Humidity: ' + data.list[5].main.humidity

                                                });
                                        });
                                });
                        });


                });
        });



};













