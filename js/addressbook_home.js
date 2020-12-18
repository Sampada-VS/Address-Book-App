let addressbookList;
window.addEventListener('DOMContentLoaded',(event)=>{
  addressbookList=getAddressbookDataFromStorage();
  document.querySelector(".person-count").textContent=addressbookList.length;
  createInnerHtml();
  localStorage.removeItem('editPerson');
});

const getAddressbookDataFromStorage=() =>{
  return localStorage.getItem("AddressbookList") ?
                JSON.parse(localStorage.getItem("AddressbookList")) : [];
}

const createInnerHtml=() =>{
    if(addressbookList.length == 0) return;
    const headerHtml="<th>Full Name</th><th>Address</th><th>City</th>"+
                    "<th>State</th><th>Zip Code</th><th>Phone Number</th><th>Actions</th>";
    let innerHtml=`${headerHtml}`;
    for(const addressbookData of addressbookList){
      innerHtml=`${innerHtml}
      <tr>
        <td>${addressbookData._name}</td>
        <td>${addressbookData._address}</td>
        <td>${addressbookData._city}</td>
        <td>${addressbookData._state}</td>
        <td>${addressbookData._zip}</td>
        <td>${addressbookData._tel}</td>
        <td><img id="${addressbookData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
          <img id="${addressbookData._id}" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">
        </td>
      </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
}
const remove= (node) => {
    let addressbookData=addressbookList.find(bookData => bookData._id == node.id);
    if(!addressbookData) return;
    const index=addressbookList.map(bookData => bookData._id)
                                  .indexOf(addressbookData._id);
    addressbookList.splice(index,1);
    localStorage.setItem("AddressbookList",JSON.stringify(addressbookList));
    document.querySelector(".person-count").textContent=addressbookList.length;
    createInnerHtml();
}