const userLocation = document.getElementById("userLocation"),
    converter = document.getElementById("converter"),
    weatherIcon=document.querySelector(".weatherIcon"),
    temperature=document.querySelector(".temperature"),
    feelsLike=document.querySelector(".feelsLike"),
    description=document.querySelector(".description"),
    date=document.querySelector(".date"),
    city=document.querySelector(".city"),
    HValue = document.getElementById("HValue"),
    WValue = document.getElementById("WValue"),
    SRValue = document.getElementById("SRalue"),
    SSValue = document.getElementById("SSValue"),
    CValue = document.getElementById("CValue"),
    UVValue = document.getElementById("UVValue"),
    PValue = document.getElementById("PValue"),
    Forecast = document.querySelector(".Forecast");


WEATHER_API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?appid=81672c74d2cc0d65f24c2e2d1a8b7255&q= `;
WEATHER_DATA_ENDPOINT=`https://api.openweathermap.org/data/2.5/onecall81672c74d2cc0d65f24c2e2d1a8b7255&exclude=minutely&units=metric&`;

function findUserLocation(){
    fetch(WEATHER_API_ENDPOINT+userLocation.value)
    .then((response)=>response.json())
    .then((data) => {
        if(data.cod!= '' && data.cod != 200){
            alert(data.message);
            return;
        }
        console.log(data.coord.lon,data.coord.lat);
    });
}



