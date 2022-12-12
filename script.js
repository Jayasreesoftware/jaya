let price=prompt('enter the price')

console.log('price')

if(price==10){
    document.getElementById('price').innerHTML="selected cone"
    document.getElementById('i1').style.display="block"
}
else if(price==40){
    document.getElementById('price').innerHTML="selected scoop"
    document.getElementById('i2').style.display="block"
}

else{
    document.getElementById('price').innerHTML="we dont have on this price"
    document.getElementById('i3').style.display="block"
}

