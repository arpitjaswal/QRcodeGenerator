const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");


const onGenerateSubmit = (e)=>{
    e.preventDefault();
    clearUI();
    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    console.log(url, size);

    if(url===""){
        alert("Enter a URL!")
    }else{
        showSpinner();
        setTimeout(()=>{
            hideSpinner();
            generateQRCode(url,size);
            setTimeout(()=>{
                const saveURL = document.querySelector("img").src;
                createSaveButton(saveURL);
            },50
            )
            document.getElementById("generated").appendChild(link);
    }, 2000);
    }

}


const generateQRCode = (url, size) => {
    var qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size,
    });
  };



const createSaveButton = (saveURL)=>{
    const link = document.createElement('a');
    link.href = saveURL;
    link.id = 'save-link';
    link.innerHTML = "Save Button";
    link.classList = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5";
    link.download = "qrcode";
    document.getElementById("generated").appendChild(link);
}

const showSpinner = ()=>{
    document.getElementById("spinner").style.display="block";
}

const hideSpinner = ()=>{
    document.getElementById("spinner").style.display="none";
}

const clearUI = ()=>{
    qr.innerHTML = '';
    const saveLink = document.getElementById("save-link");
    if(saveLink)saveLink.remove();
}

form.addEventListener('submit', onGenerateSubmit);