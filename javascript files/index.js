function show(e)
{
    let displa = document.getElementById('dis');
    let box = document.getElementById('menu');
    console.log('its working');
    console.log(displa.style.display);
    if(displa.style.display==="none")
    {
        console.log('its here');
        displa.style.display="block";
        console.log(displa.style.display);
    }
    else 
    {
        displa.style.display="none";
        console.log('in else');
    }
}

let i=0;
let j=3;

function next()
{
    document.getElementById("content"+ (i+1)).classList.remove("active");
    i=(i+j+1)%j;
    document.getElementById("content"+ (i+1)).classList.add("active");
}
function prev()
{
    document.getElementById("content"+(i+1)).classList.remove("active");
    i=(i+j-1)%j;
    document.getElementById("content"+(i+1)).classList.add("active");
}