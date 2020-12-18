let isUpdate=false;
let addressbookObj={};

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
    checkForUpdate();
});

const save = () => {
    try{
      let addressbookData=createAddressbookData();
      createAndUpdateStorage(addressbookData);
    }catch(e){
      return;
    }
}
function createAndUpdateStorage(addressbookData){
    let addressbookList=JSON.parse(localStorage.getItem("AddressbookList"));
    if(addressbookList != undefined){
      addressbookList.push(addressbookData);
    }
    else{
      addressbookList=[addressbookData];
    }
    alert(addressbookList.toString());
    localStorage.setItem("AddressbookList",JSON.stringify(addressbookList));
}
const createAddressbookData = () => {
    let addressbookData=new AddressbookData();
    try{
      addressbookData.name=getInputValueById('#name');
    }catch(e){
      setTextValue('.text-error',e);
      throw e;
    }
    try{
        addressbookData.tel=getInputValueById('#tel');
    }catch(e){
        setTextValue('.tel-error',e);
    throw e;
    }
    try{
        addressbookData.address=getInputValueById('#address');
    }catch(e){
        setTextValue('.address-error',e);
    throw e;
    }
    addressbookData.city=getInputValueById('#city');
    addressbookData.state=getInputValueById('#state');
    try{
        addressbookData.zip=getInputValueById('#zip');
    }catch(e){
        setTextValue('.zip-error',e);
    throw e;
    }
    alert(addressbookData.toString());
    return addressbookData;
}
const getInputValueById=(id) => {
    let value=document.querySelector(id).value;
    return value;
}
const setTextValue=(id,value) => {
    const element=document.querySelector(id);
    element.textContent=value;
}
const resetForm = () => {
    setValue('#name','');
    setValue('#tel','');
    setValue('#address','');
    setValue('#zip','');
    setValue('#city','Select City');
    setValue('#state','Select State');
    setTextValue('.text-error','');
    setTextValue('.tel-error','');
    setTextValue('.address-error','');
    setTextValue('.zip-error','');
}
const setValue=(id,value) => {
    const element=document.querySelector(id);
    element.value=value;
}
const checkForUpdate=() =>{
    const addressbookJson=localStorage.getItem('editPerson');
    isUpdate=addressbookJson ? true : false;
    if(!isUpdate) return;
    addressbookObj=JSON.parse(addressbookJson);
    setForm();
}
const setForm=() => {
    setValue('#name',addressbookObj._name);
    setValue('#tel',addressbookObj._tel);
    setValue('#address',addressbookObj._address);
    setValue('#city',addressbookObj._city);
    setValue('#state',addressbookObj._state);
    setValue('#zip',addressbookObj._zip);
}