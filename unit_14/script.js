
    let country = document.querySelector('.country');
    let out14 = document.querySelector('.out14');
    let sel14 = document.querySelector('.sel14');
    


    for(let i = 0; i < cleanCountriesArr.length; i++){
       let option = document.createElement('option');
       option.innerHTML  = cleanCountriesArr[i];
       option.value  = cleanCountriesArr[i];
       country.appendChild(option); 
    }

    function getValue(elem){
            return elem.value;
    }

    function getValue2(elem){
        select = document.querySelector();
        return elem.value;
}

    
   
    
    country.onchange = () =>{
        let val14 = ' ';
        let countryOption = '';
        // countryOption =  getValue(country);
        for(let i = 0; i < cities.length; i ++){
            for(let key in cities[i]){
                // console.log(cities[i]['name']);
                if(cities[i][key] == getValue(country)){

                    let arrCountry = {};
                    let key = getValue(country);
                    //  console.log(key);
                    // for(let key in arrCountry){
                        arrCountry[key] = cities[i]['name'];
                        // console.log(arrCountry);
                        // arrCountry[key].id = cities[i]['id'];
                        val14 += `<option value = "">${arrCountry[key]}</option>`;
                        //  console.log(val14);
                        // console.log(arrCountry[keyCountry].name);
                    // }
                }
            }
        }
        sel14.innerHTML = val14;

        let selOption = document.querySelector('.sel14 option');
        console.log(selOption);
        let valnew = selOption.innerHTML;
        
     
        let btn = document.querySelector('.btn');

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${valnew}&appid=70e1ed322b02acbc57d443dd91065f3e`)
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

        btn.onclick = ()=>{
            
            valnew = '';
        }

    }
    


    


