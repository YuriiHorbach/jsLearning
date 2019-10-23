
   let city = document.querySelector('.city');
   let btn14 = document.querySelector('.btn14');

   
    btn14.onclick = () => {
        let val = city.value;
        console.log(val);

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${val}&appid=5912ee9eb422482a793f8e74475f1d7a`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.package-name').textContent = data.name;
            document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
            //https://openweathermap.org/img/wn/02d@2x.png
            document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
            // catch any errors
        });

    }
    
    
    
 
    
    

    


