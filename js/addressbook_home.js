let addressbookList;
window.addEventListener('DOMContentLoaded',(event)=>{
  addressbookList=getAddressbookDataFromStorage();
  document.querySelector(".person-count").textContent=addressbookList.length;
});

const getAddressbookDataFromStorage=() =>{
  return localStorage.getItem("AddressbookList") ?
                JSON.parse(localStorage.getItem("AddressbookList")) : [];
}