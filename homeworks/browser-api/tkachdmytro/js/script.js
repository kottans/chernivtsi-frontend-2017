const url = 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js';

class Schedule {
    get(url) {
        var data = sessionStorage.getItem('data');
        if (!data) {
            return fetch(url)
                .then(response => {
                        var json = response.json();
                        return json;
                    }   
                )
                .then(data =>{
                        sessionStorage.setItem("data", JSON.stringify(data.lectures));
                        return data.lectures;
                    }   
                )
        }else{
            return new Promise(resolve => resolve(JSON.parse(data)));
        }    
    }
    render(data) {
        var table_find = document.getElementsByTagName('table');
        if(table_find.length == 0){
            var table = document.createElement('table');
            var tHead = document.createElement('thead');
            var tBody = document.createElement('tbody');
            var trHead = document.createElement('tr');
            var th = document.createElement('th');
            th.innerHTML = 'Date';
            trHead.appendChild(th);
            th = document.createElement('th');
            th.innerHTML = 'Time';
            trHead.appendChild(th);
            th = document.createElement('th');
            th.innerHTML = 'Topic';
            trHead.appendChild(th);
            th = document.createElement('th');
            th.innerHTML = 'Lecturer';
            trHead.appendChild(th);
            tHead.appendChild(trHead);
            table.appendChild(tHead);

            data.forEach(function(item, i) {
                var trBody = document.createElement('tr');
                var td = document.createElement('td');
                td.innerHTML = item.date;
                trBody.appendChild(td);
                td = document.createElement('td');
                td.innerHTML = item.time;
                trBody.appendChild(td);
                td = document.createElement('td');
                td.innerHTML = item.title;
                trBody.appendChild(td);
                td = document.createElement('td');
                td.innerHTML = item.lecturer;
                trBody.appendChild(td);
                trBody.style.textAlign = "center";
                tBody.appendChild(trBody);
            });
            
            table.appendChild(tBody);
            document.body.appendChild(table);
        }
    }
}

const schedule = new Schedule();



window.onload = function (){
    var button = document.createElement('button');
    button.innerHTML = 'Render';
    document.body.appendChild(button);
    button.addEventListener('click', function (event) {
        button.setAttribute("disabled", true);
        var dataPromise =  schedule.get(url);
        dataPromise
            .then(data => {
                schedule.render(data);
                button.removeAttribute("disabled");
            });
    });

};