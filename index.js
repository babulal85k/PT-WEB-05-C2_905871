// fill in javascript code here

let myform = document.querySelector('form');
let name = document.getElementById('name');
let docid = document.getElementById('docID');
let select = document.getElementById('dept');
let exp = document.getElementById('exp');
let email = document.getElementById('email');
let mobile = document.getElementById('mbl');
let tbody = document.querySelector('tbody');


let alldata = [];

myform.addEventListener('submit', function(e)
{
    e.preventDefault();
    let obj = {};
    obj.name = name.value;
    obj.docid = docid.value;
    obj.select = select.value;
    obj.exp = exp.value;
    obj.email = email.value;
    obj.mobile = mobile.value;

    if (exp.value >= 5)
    {
        obj.role = "Senior";
    }else if (exp.value > 2 && exp.value < 5)
    {
        obj.role = "Junior";
    }else if (exp.value <= 1)
    {
        obj.role = "Trainee";
    }

    alldata.push(obj);
    tbody.innerHTML = null;


    alldata.map(ele => 
        {
            let row = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            let td5 = document.createElement('td');
            let td6 = document.createElement('td');
            let td7 = document.createElement('td');
            let td8 = document.createElement('td');

            td1.innerText = ele.name;
            td2.innerText = ele.docid;
            td3.innerText = ele.select;
            td4.innerText = ele.exp;
            td5.innerText = ele.email;
            td6.innerText = ele.mobile;
            td7.innerText = ele.role;
            row.id = ele.docid;

            let deletebutton = document.createElement('button');
            deletebutton.innerText = 'Delete';
            deletebutton.addEventListener('click', () => deleteRow(ele.docid));
            td8.appendChild(deletebutton);

            row.append(td1, td2, td3, td4, td5, td6, td7, td8);
            tbody.append(row);

        })
})

function deleteRow(docID)
{
    alldata = alldata.filter((ele) => {ele.docid !== docID})
    refreshTable();
}

function refreshTable() {
    tbody.innerHTML = null;
    alldata.forEach((ele) => {
      let row = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');
      let td5 = document.createElement('td');
      let td6 = document.createElement('td');
      let td7 = document.createElement('td');
      let td8 = document.createElement('td');
  
      td1.innerText = ele.name;
      td2.innerText = ele.docid;
      td3.innerText = ele.select;
      td4.innerText = ele.exp;
      td5.innerText = ele.email;
      td6.innerText = ele.mobile;
      td7.innerText = ele.role;
      row.id = ele.docid;
  
      let deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', () => deleteRow(ele.docid));
      td8.appendChild(deleteButton);
  
      row.append(td1, td2, td3, td4, td5, td6, td7, td8);
      tbody.append(row);
    });
  }

