window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector('#name');
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            textError.textContent="";
            return;
        }
        try{
            (new AddressbookData()).name=name.value;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
        }
    });

    const telephone=document.querySelector('#tel');
    const telephoneError=document.querySelector('.tel-error');
    telephone.addEventListener('input',function(){
        if(telephone.value.length == 0){
            telephoneError.textContent="";
            return;
        }
        try{
            (new AddressbookData()).tel=telephone.value;
            telephoneError.textContent="";
        }catch(e){
            telephoneError.textContent=e;
        }
    });

    const address=document.querySelector('#address');
    const addressError=document.querySelector('.address-error');
    address.addEventListener('input',function(){
        if(address.value.length == 0){
            addressError.textContent="";
            return;
        }
        try{
            (new AddressbookData()).address=address.value;
            addressError.textContent="";
        }catch(e){
            addressError.textContent=e;
        }
    });

    const zip=document.querySelector('#zip');
    const zipError=document.querySelector('.zip-error');
    zip.addEventListener('input',function(){
        if(zip.value.length == 0){
            zipError.textContent="";
            return;
        }
        try{
            (new AddressbookData()).zip=zip.value;
            zipError.textContent="";
        }catch(e){
            zipError.textContent=e;
        }
    });
});