function whatsapplinkGenerator(phonenumber){
    return "https://wa.me/+1"+phonenumber;
}

function clearLink(){
    document.getElementById("app").innerText="Link will replace this text.";
}

function handlegenerateClick(){
    const walink = whatsapplinkGenerator(inputelement.value);
    appelement.innerText = walink;
}

const inputelement = document.getElementById("numInput");
const appelement = document.getElementById("app");
const buttonelement = document.getElementById("generatebtn");
buttonelement.addEventListener("click",handlegenerateClick);
