const addForm = document.getElementById('addForm');
const addId = document.getElementById('addFormId');
const addValue = document.getElementById('addFormValue');
const addArray = [];
const tableData = ['id', 'value', ''];

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addArray.push({ 'id': addId.value, 'value': addValue.value });
    // console.log(addArray);
    tableContainer.innerHTML = '';
    createTable();
    romoveButtonClick();
});


function createTable() {
    const table = document.createElement('table');
    table.classList.add('table');
    const tr = document.createElement('tr');
    for (let i = 0; i < tableData.length; i++) {
        const td = document.createElement('td');
        td.textContent = tableData[i];
        td.classList.add('td');
        tr.appendChild(td);

    }
    table.appendChild(tr);
    for (let i = 0; i < addArray.length; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < tableData.length; j++) {
            const td = document.createElement('td');
            td.classList.add('td');
            if (j == 0) td.textContent = addArray[i].id;
            if (j == 1) td.textContent = addArray[i].value;
            if (j == 2) {
                const removeBtn = document.createElement('button');
                removeBtn.textContent = '삭제';
                removeBtn.classList.add('removeBtn');
                td.appendChild(removeBtn);
            };
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableContainer.appendChild(table);
}

function romoveButtonClick() {
    const removeBtns = document.querySelectorAll('.removeBtn');
    removeBtns.forEach((btn, btnIndex) => {
        btn.addEventListener('click', (e) => {
            const table = document.querySelector('.table');
            const tr = e.target.parentElement.parentElement;
            console.log(tr);
            addArray.forEach((item, index) => {
                console.log('ii:', item.id)
                console.log('ti:', tr.id)
                if (index === btnIndex) {
                    addArray.splice(index, 1);
                }
            });
            // console.log(addArray);
            table.removeChild(tr);
        });
    });
}





