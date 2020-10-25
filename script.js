const add = document.querySelector('#add');
const clear = document.querySelector('#clear');

const nameInput = document.querySelector('#nameInput');
const dateInput = document.querySelector('#dateInput');
const amountInput = document.querySelector('#amountInput');

add.addEventListener('click', (event) => {
    event.preventDefault()

    if (!nameInput.value) {
        alert('Name field cannot be empty!');
    } else if (!amountInput.value) {
        alert('Amount field cannot be empty!');
    } else {
        const body = document.querySelector('#body');

        const tr = document.createElement('tr');
        tr.className = 'createdData';

        const tdName = document.createElement('td');
        const tdDate = document.createElement('td');
        const tdAmount = document.createElement('td');

        body.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdDate);
        tr.appendChild(tdAmount);

        tdName.appendChild(document.createTextNode(nameInput.value));
        tdDate.appendChild(document.createTextNode(dateInput.value));
        tdAmount.appendChild(document.createTextNode(amountInput.value + '$'));


        let rows = body.getElementsByTagName("tr");
        for (let index = 0; index <= rows.length; index++) {
            if (index % 2 !== 0) {
                rows[index].style.backgroundColor = '#efefef';
                rows[index].style.padding = '10px 0';

            }

            nameInput.value = dateInput.value = amountInput.value = '';
        }

        nameInput.value = dateInput.value = amountInput.value = '';
    }
});

clear.addEventListener('click', (event) => {
    event.preventDefault()

    nameInput.value = dateInput.value = amountInput.value = '';
});