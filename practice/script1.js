
const show=()=> {
    let a=document.getElementById('txt')
    let b=document.getElementById('txt1')
    let span1=document.getElementById('s1')
    let span2=document.getElementById('s2')
    console.log(a.value)
    console.log(b.value)
    let x=a.value;
    let er= x.toUpperCase()

    document.getElementById('s1').innerHTML=er;
    let y=b.value;
    let er1=y.toUpperCase()
    document.getElementById('s2').innerHTML=er1;
}