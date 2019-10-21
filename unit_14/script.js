
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
                        console.log(arrCountry);
                        // arrCountry[key].id = cities[i]['id'];
                        val14 += `<option value = "">${arrCountry[key]}</option>`;
                         console.log(val14);
                        // console.log(arrCountry[keyCountry].name);
                    // }
                }
            }
        }
        sel14.innerHTML = val14;
    }


