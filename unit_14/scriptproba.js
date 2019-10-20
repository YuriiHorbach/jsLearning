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
    console.log(country);
    let sel14 = document.querySelector('.sel14');

    let temp = '';
    let val14 = '';

    let oneCountry = [];


    // for(let i = 0; i < cities.length; i ++){
    //     for(let key in cities[i]){
    //         // console.log(cities[i][key]);
    //         if(cities[i][key] == 'UA'){
    //             let item = {};
    //             item.country = cities[i]['country'];
    //             oneCountry.push(item);
    //             console.log(item);
    //             for(let k in oneCountry){
    //                 let item2 = {};
    //                 item2.name = cities[i]['name'];
    //                 item2.id = cities[i]['id'];
    //                 oneCountry[k] = item2;
    //                 // oneCountry[k] = item2.id;

    //                 console.log(oneCountry);
    //                 console.log(oneCountry[k]);

    //             }
    //             // item.label = cities[i]['name'];
    //             // item.value = cities[i]['id'];
    //             // oneCountry.push(item);
    //             // val14 += `<option value = "${key}">${cities[i]['country']} ${cities[i]['name']}</option>`;
    //         }
    //     }
    // }

    let selectCountry = '';

    for(let i = 0; i < cities.length; i ++){
        for(let key in cities[i]){
            selectCountry += `<option value = "${key}">${cities[i]}</option>`;
            
        }
    }
    console.log(selectCountry);
    // country.innerHTML += selectCountry;
    

    for(let i = 0; i < cities.length; i ++){
        for(let key in cities[i]){
            // console.log(cities[i][key]);
            if(cities[i][key] == 'UA'){
                // let element = {}, cart = [];
                let arrCountry = {'UA':{}};
                for(let keyCountry in arrCountry){
                    arrCountry[keyCountry].name = cities[i]['name'];
                    arrCountry[keyCountry].id = cities[i]['id'];
                    // console.log(arrCountry[keyCountry]);
                    // console.log(keyCountry);
                    // val14 += `<option value = "${key}">${cities[i]['name']}</option>`;
                    val14 += `<option value = "${key}">${arrCountry[keyCountry].name}</option>`;
                    console.log(arrCountry);
                }
                
                // element.name = cities[i]['name'];
                // element.id = cities[i]['id'];;
                // cart.push({element: element});
                // console.log(cart);
                // val14 += `<option value = "${key}">${cities[i]['name']}</option>`;
            }
        }
    }
    

    sel14.innerHTML = val14;



 