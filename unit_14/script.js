
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

    // function selectValue(sel) {
    //     var selElem = sel;
    //     var selElemVal = selElem.options[selElem.selectedIndex].value;
    //     return selElemVal;
    // }
    
   let arrAllCountry = [];
   
   let val14 = ' ';
    country.onchange = () =>{
        
        let countryOption = '';
        // countryOption =  getValue(country);
        for(let i = 0; i < cities.length; i ++){
            for(let key in cities[i]){
                // console.log(cities[i]['name']);
                if(cities[i][key] == getValue(country)){

                    let arrCountry = {};
                    let key = 'country';
                    let id = 'id';
                    //  console.log(key);
                    // for(let key in arrCountry){
                        arrCountry[key] = cities[i]['name'];
                        arrCountry[id] = cities[i]['id'];
                        console.log(arrCountry);
                        // arrCountry[key].id = cities[i]['id'];
                        val14 += `<option value = "${arrCountry[id]}">${arrCountry[key]}</option>`;
                        console.log(val14);
                        // console.log(arrCountry[keyCountry].name);
                        console.log(arrCountry[key]);
                        arrAllCountry.push(arrCountry);
                        
                }
                
                
            }
           
        }

        let myVar = document.querySelector('.sel14');
        // let myVarValue = myVar.options[myVar.selectedIndex].text;
        // console.log(myVarValue);

        sel14.innerHTML = val14;

        // if(){}
        
        console.log(arrAllCountry);

        for(let i = 0; i < arrAllCountry.length; i++){
            for(key in arrAllCountry[i]){
                // if(key == ){

                // }
            }
        }
       
    }

    // if()
    
    // let optionValue = document.querySelector('.sel14 option');
   

   
           

        

           

    // }


    
    
    
 
    // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${valnew}&appid=5912ee9eb422482a793f8e74475f1d7a`)
    // .then(function (resp) { return resp.json() })
    // .then(function (data) {
    //     console.log(data);
    //     document.querySelector('.package-name').textContent = data.name;
    //     document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    //     document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    //     //https://openweathermap.org/img/wn/02d@2x.png
    //     document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    // })
    // .catch(function () {
    //     // catch any errors
    // });
    

    


