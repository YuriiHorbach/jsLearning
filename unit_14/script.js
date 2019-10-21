// fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5912ee9eb422482a793f8e74475f1d7a`)
//     .then(function (resp) { return resp.json() })
//     .then(function (data) {
//         // console.log(data);
//         document.querySelector('.package-name').textContent = data.name;
//         document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
//         document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
//         //https://openweathermap.org/img/wn/02d@2x.png
//         document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
//     })
//     .catch(function () {
//         // catch any errors
//     });

    let country = document.querySelector('.country');
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

    
    let val14 = ' ';
    
    country.onchange = () =>{
        
        let countryOption = '';
        countryOption =  getValue(country);
        console.log(countryOption);
        for(let i = 0; i < cities.length; i ++){
            for(let key in cities[i]){
                if(cities[i][key] == countryOption){
                    let arrCountry = {countryOption:{}};
                    for(let keyCountry in arrCountry){
                        arrCountry[keyCountry].name = cities[i]['name'];
                        arrCountry[keyCountry].id = cities[i]['id'];
                        val14 += `<option value = "${key}">${arrCountry[keyCountry].name}</option>`;
                        // console.log(val14);
                        console.log(arrCountry);
                    }
                }
            }
        }
    }
    // for(let i = 0; i < cities.length; i ++){
    //     for(let key in cities[i]){
    //         if(cities[i][key] == 'UA'){
    //             let arrCountry = {'UA':{}};
    //             for(let keyCountry in arrCountry){
    //                 arrCountry[keyCountry].name = cities[i]['name'];
    //                 arrCountry[keyCountry].id = cities[i]['id'];
    //                 val14 += `<option value = "${key}">${arrCountry[keyCountry].name}</option>`;
    //                 console.log(arrCountry);
    //             }
    //         }
    //     }
    // }
    

    sel14.innerHTML = val14;
    // sel14.appendChild(val14); 



 