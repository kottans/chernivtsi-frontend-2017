class Schedule {
    get(url) {
        let data = sessionStorage.getItem('data');
        if (data == null) {
            return fetch(url).then(response => response.json())
                .then(data => {
                    sessionStorage.setItem('data', JSON.stringify(data));
                    return data;
                });
        } else {
            return new Promise(resolve => resolve(JSON.parse(data)));
        }
    }
    render(data) {
        let app = document.getElementById('api');
        data.lectures.forEach(element => {
            let table = document.createElement('table');
            table.appendChild(createRow(element.title));
            table.appendChild(createRow(element.lecturer));
            table.appendChild(createRow(element.date + " " + element.time));
            app.appendChild(table);
        });
    }
}


let createRow = function (text) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerText = text;
    tr.appendChild(td);
    return tr;
}

let app = new Schedule();
let url = 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js';
let promise = app.get(url);
promise.then(data => app.render(data));
