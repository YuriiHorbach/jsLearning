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

    let val14 = ' ';
    let selectCountry = ' ';

    for(let i = 0; i < cleanCountriesArr.length; i++){
        selectCountry = `<option>${cleanCountriesArr[i]}</option>`;
    }
    country.innerHTML = selectCountry;
    console.log(country.innerHTML);
    let finalCountrySelect = country.innerText;
    // console.log(finalCountrySelect);


    for(let i = 0; i < cities.length; i ++){
        for(let key in cities[i]){
            if(cities[i][key] == finalCountrySelect){
                let arrCountry = {finalCountrySelect:{}};
                for(let keyCountry in arrCountry){
                    arrCountry[keyCountry].name = cities[i]['name'];
                    arrCountry[keyCountry].id = cities[i]['id'];
                    val14 += `<option value = "${key}">${arrCountry[keyCountry].name}</option>`;
                    // console.log(arrCountry);
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



 