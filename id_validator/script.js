const idCodeInput = document.querySelector('#id-code');

function defineGender() {
    const data = idCodeInput.value[0];
    const output = document.querySelector('#output').children[0].children[0].children[1];
    let gender;
    if (data === '0' || data === '9') {
        gender = 'Unknown'
    } else if (data % 2 === 0) {
        gender = 'Female';
    } else {
        gender = 'Male';
    }
    output.innerText = gender;
}

function defineDateOfBirth() {
    const yearData = idCodeInput.value[0];
    const dob = idCodeInput.value.slice(1, 7);
    const output = document.querySelector('#output').children[0].children[1].children[1];
    let cent;
    if (yearData === '1' || yearData === '2') {
        cent = '18';
    } else if (yearData === '3' || yearData === '4') {
        cent = '19';
    } else if (yearData === '5' || yearData === '6') {
        cent = '20';
    } else if (yearData === '7' || yearData === '8') {
        cent = '21';
    } else {
        cent = null;
    }
    if (cent) {
        output.innerText = `${dob.slice(4, 6)}.${dob.slice(2, 4)}.${cent}${dob.slice(0, 2)}`;
    } else {
        output.innerText = `${dob.slice(4, 6)}.${dob.slice(2, 4)}.${dob.slice(0, 2)}`;
    }
}

function defineRegionOfBirth() {
    const regionData = idCodeInput.value.slice(7, 10);
    const output = document.querySelector('#output').children[0].children[2].children[1];
    if (regionData >= '001' && regionData <= '010') {
        output.innerText = 'Kuressaare haigla';
    } else if (regionData >= '011' && regionData <= '019') {
        output.innerText = 'Tartu Ülikooli Naistekliinik';
    } else if (regionData >= '021' && regionData <= '150') {
        output.innerText = 'Ida-Tallinna keskhaigla, Pelgulinna sünnitusmaja (Tallinn)';
    } else {
        output.innerText = 'other';
    }
}

function validateIdCode() {
    const data = idCodeInput.value;
    const output = document.querySelector('#output').children[0].children[3].children[1];
    const chk1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
    const chk2 = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
    let result = 0;
    for (let i = 0; i < 10; i++) {
        result += data[i] * chk1[i];
    }
    if (result % 11 !== Number(data[data.length - 1])) {
        result = 0;
        for (let i = 0; i < 10; i++) {
            result += data[i] * chk2[i];
        }
        if (result % 11 === Number(data[data.length - 1])) {
            output.innerText = 'Valid2';
        } else {
            output.innerText = 'Invalid';
            output.style.color = 'red';
        }
    } else {
        output.innerText = 'Valid1';
    }
}

function showResult() {
    const resultTable = document.querySelector('.output-container');
    const errorMessage = document.querySelector('#error');
    try {
        const numId = Number(idCodeInput.value);
        if (!numId) {
            throw new Error('ID code is not numeric!');
        }
    } catch(err) {
        if (resultTable.classList.contains('visible')) {
            resultTable.classList.remove('visible');
        }
        if (!errorMessage.classList.contains('visible')) {
            errorMessage.classList.add('visible');
        }
        errorMessage.innerText = 'Code entered is not numeric!';
        return
    }
    if (idCodeInput.value.length === 11) {
        if (errorMessage.classList.contains('visible')) {
            errorMessage.classList.remove('visible');
        }
        if (!resultTable.classList.contains('visible')) {
            resultTable.classList.add('visible');
        }
        defineGender();
        defineDateOfBirth();
        defineRegionOfBirth();
        validateIdCode();
    } else {
        if (resultTable.classList.contains('visible')) {
            resultTable.classList.remove('visible');
        }
        if (!errorMessage.classList.contains('visible')) {
            errorMessage.classList.add('visible');
        }
        if (idCodeInput.value.length > 11) {
            errorMessage.innerHTML = 'Code is too long!';
        } else {
            errorMessage.innerHTML = 'Code is too short!';
        }
    }
}

const btn = document.querySelector('#check-id');
btn.addEventListener('click', showResult);
