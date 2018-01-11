var xhr = new XMLHttpRequest();

function get() {
    xhr.open('GET', 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js', true);
    xhr.send();
    if (xhr.status != 200) {
        console.log( xhr.status + ': ' + xhr.statusText );
    }
}

function render(schedule) {
    arr = JSON.parse(schedule);
    for(var i = 0; i < arr.lectures.length; i++){
        let dataItem = document.createElement('div');
        dataItem.classList.add('data-item');
        let date = document.createElement('span');
        date.innerText = arr.lectures[i].date + " - ";
        dataItem.appendChild(date);

        let time = document.createElement('span');
        time.innerText = arr.lectures[i].time + " - ";
        dataItem.appendChild(time);

        let title = document.createElement('span');
        title.innerText = arr.lectures[i].title + " - ";
        dataItem.appendChild(title);

        let lecturer = document.createElement('span');
        lecturer.innerText = arr.lectures[i].lecturer;
        dataItem.appendChild(lecturer);
        document.getElementById('data-block').appendChild(dataItem);
    }
}

function getDataByXHR() {
    if(window.localStorage.getItem('schedule')){
        render(localStorage.getItem('schedule'));
    }
    else {
        get();
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4 && xhr.status == 200){
                render(xhr.responseText);
                window.localStorage.setItem('schedule', xhr.responseText);
            }
        }
    }
}