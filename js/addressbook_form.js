window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector('#name');
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        let nameRegex=RegExp('^[A-Z][a-z]{2,}\\s[A-Z][a-z]{2,}$');
        if(nameRegex.test(name.value))
            textError.textContent="";
        else
            textError.textContent="Name is incorrect.";
    });

    const telephone=document.querySelector('#tel');
    const telephoneError=document.querySelector('.tel-error');
    telephone.addEventListener('input',function(){
        let telRegex1=RegExp('^[7-9]{1}[0-9]{9}$');
        let telRegex2=RegExp('^[1-9]{2}[7-9]{1}[0-9]{9}$');
        let telRegex3=RegExp('^[+][1-9]{2}[7-9]{1}[0-9]{9}$');

        if(telRegex1.test(telephone.value) || telRegex2.test(telephone.value) || telRegex3.test(telephone.value))
            telephoneError.textContent="";
        else
            telephoneError.textContent="Phone Number is incorrect.";
    });

    const address=document.querySelector('#address');
    const addressError=document.querySelector('.address-error');
    address.addEventListener('input',function(){
        let addrRegex=RegExp('^(?=.*\\s)[A-Za-z]{3,}[A-Za-z\\s]{1,}$');
        if(addrRegex.test(address.value))
            addressError.textContent="";
        else
            addressError.textContent="Address is incorrect.";
    });

    const zip=document.querySelector('#zip');
    const zipError=document.querySelector('.zip-error');
    zip.addEventListener('input',function(){
        let pinCodeRegex=RegExp('^[1-9]{1}[0-9]{5}$');
        if(pinCodeRegex.test(zip.value))
            zipError.textContent="";
        else
            zipError.textContent="Zip Code is incorrect.";
    });
});