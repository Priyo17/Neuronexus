let celcius = document.getElementById('celcius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');

celcius.oninput = () => {
    let output = (parseFloat(celcius.value)*9)/5 +32 ;
    let output1 = (parseFloat(celcius.value)+ 273.15) ;
    fahrenheit.value = parseFloat(output.toFixed(2));
    kelvin.value = parseFloat(output1.toFixed(2));
    if(celcius.value <= 0){
        document.body.style.backgroundImage = "url('./imgicy.avif')";
    }
    else if(celcius.value <=30){
        document.body.style.backgroundImage = "url('./sunnyday.webp')";
    }
    else{
        document.body.style.backgroundImage = "url('./desert1.png')";
    }
};

fahrenheit.oninput = () => {
    let output = (parseFloat(fahrenheit.value)- 32) * 5 / 9 ;
    let output1 = (parseFloat(fahrenheit.value)- 32) * 5 / 9 + 273.15 ;
    celcius.value = parseFloat(output.toFixed(2));
    kelvin.value = parseFloat(output1.toFixed(2));
    if(celcius.value <= 0){
        document.body.style.backgroundImage = "url('./imgicy.avif')";
    }
    else if(celcius.value <=30){
        document.body.style.backgroundImage = "url('./sunnyday.webp')";
    }
    else{
        document.body.style.backgroundImage = "url('./desert1.png')";
    }
    
    
};

kelvin.oninput = () => {
    let output = (parseFloat(kelvin.value)- 273.15) ;
    let output1 = (parseFloat(kelvin.value)-  273.15) * 9 / 5 + 32; 
    celcius.value = parseFloat(output.toFixed(2));
    fahrenheit.value = parseFloat(output1.toFixed(2));
    if(celcius.value <= 0){
        document.body.style.backgroundImage = "url('./imgicy.avif')";
    }
    else if(celcius.value <=30){
        document.body.style.backgroundImage = "url('./sunnyday.webp')";
    }
    else{
        document.body.style.backgroundImage = "url('./desert1.png')";
    }
};








