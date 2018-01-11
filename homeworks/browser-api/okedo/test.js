let dataUrl = "https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js"
let schedule = {};
let fatherEl = document.getElementById('father');
let fetchOpt = {
    method: 'GET',
    cache: 'force-cache'
}

function get() {
    fetch(dataUrl, fetchOpt)
        .then(response => {
            response.json()
                .then(data => {
                    schedule = data.lectures;
                })
        })
}

function render() {
    for (let i = 0; i < schedule.length; i++) {
        let tempEl = document.createElement('div');
        tempEl.classList.add('container');
        tempEl.innerHTML =
            ("<div class=\"title children\">" + schedule[i].title + "<div class=\"date children\">" + schedule[i].date + "</div>" + "<div class=\"time children\">" + schedule[i].time + "</div>" + "<div class=\"lecturer children\">" + schedule[i].lecturer);
        fatherEl.appendChild(tempEl);
    }
}
