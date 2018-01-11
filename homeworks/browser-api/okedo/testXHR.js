let dataUrlXHR = "https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js";
let scheduleXHR = {};

function getXHR() {
    var req = new XMLHttpRequest();
    req.open('GET', dataUrlXHR, true);
    req.onreadystatechange = function () {
        let tempXHR = JSON.parse(req.response);
        scheduleXHR = tempXHR.lectures;
        console.log(scheduleXHR);
    }
    req.send();
}

function renderXHR() {
    console.log(scheduleXHR);
    for (let i = 0; i < scheduleXHR.length; i++) {
        let tempEl = document.createElement('div');
        tempEl.classList.add('container');
        tempEl.innerHTML =
            ("<div class=\"title childrenXHR\">" + scheduleXHR[i].title + "<div class=\"date childrenXHR\">" + scheduleXHR[i].date + "</div>" + "<div class=\"time childrenXHR\">" + scheduleXHR[i].time + "</div>" + "<div class=\"lecturer childrenXHR\">" + scheduleXHR[i].lecturer);
        fatherEl.appendChild(tempEl);
    }
}