let addressbookList;
window.addEventListener('DOMContentLoaded',(event)=>{
  addressbookList=getAddressbookDataFromStorage();
  document.querySelector(".person-count").textContent=addressbookList.length;
  createInnerHtml();
});

const getAddressbookDataFromStorage=() =>{
  return localStorage.getItem("AddressbookList") ?
                JSON.parse(localStorage.getItem("AddressbookList")) : [];
}

const createInnerHtml=() =>{
    const headerHtml="<th>Full Name</th><th>Address</th><th>City</th>"+
                    "<th>State</th><th>Zip Code</th><th>Phone Number</th><th>Actions</th>";
    let innerHtml=`${headerHtml}`;
    let addressbookList=createAddressbookJSON();
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
const createAddressbookJSON=() =>{
    let addressbookListLocal=[
        {
        _name:'Terrisa Gates',
        _address:'473, Sector 2, Vashi',
        _city:'Mumbai',
        _state:'Maharashtra',
        _zip:'400003',
        _tel:'9876543211',
        _id:new Date().getTime(),
        }
    ];
    return addressbookListLocal;
}