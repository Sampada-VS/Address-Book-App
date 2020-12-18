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

const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try{
        setAddressbookObject();
        createAndUpdateStorage();
        resetForm();
        window.location.replace(site_properties.home_page);
    }catch(e){
        return;
    }
}
const setAddressbookObject=()=> {
    addressbookObj._name=getInputValueById('#name');
    addressbookObj._tel=getInputValueById('#tel');
    addressbookObj._address=getInputValueById('#address');
    addressbookObj._city=getInputValueById('#city');
    addressbookObj._state=getInputValueById('#state');
    addressbookObj._zip=getInputValueById('#zip');
}
const createAndUpdateStorage=()=>{
    let addressbookList=JSON.parse(localStorage.getItem("AddressbookList"));
    if(addressbookList){
        let addressbookData=addressbookList
                            .find(bookData => bookData._id == addressbookObj._id);
        if(!addressbookData){
            addressbookList.push(createAddressbookData());
        }else{
            const index=addressbookList.map(bookData => bookData._id)
                                        .indexOf(addressbookData._id);
            addressbookList.splice(index,1,createAddressbookData(addressbookData._id));
        }
    }
    else{
      addressbookList=[createAddressbookData()];
    }
    localStorage.setItem("AddressbookList",JSON.stringify(addressbookList));
}

const createAddressbookData=(id)=>{
    let addressbookData=new AddressbookData();
    if(!id)
        addressbookData.id=createNewContactId();
    else
        addressbookData.id=id;
    setAddressbookData(addressbookData);
    return addressbookData;
}
const setAddressbookData = (addressbookData) => {
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
}
const createNewContactId=() =>{
    let contactId=localStorage.getItem("ContactID");
    contactId=!contactId ? 1 : (parseInt(contactId)+1).toString();
    localStorage.setItem("ContactID",contactId);
    return contactId;
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