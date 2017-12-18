const url = 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js';

class Schedule {
    constructor() {}

    get(url) {
        return fetch(url)
            .then(response => response.json())
            .then(dataLect => dataLect.lectures);
    }



    
    render(dataLect) {
        function createNode(elem) {
            return document.createElement(elem);
        };

        function appendElem(par, elem) {
            return par.appendChild(elem);
        };

        let ul = document.getElementById("ul"),
        body = document.getElementsByTagName("body");

        dataLect.forEach(function(info) {
            let li = createNode("li");
            li.innerHTML = info.date + " " + info.time + " " + info.title + " " + info.lecturer;
            appendElem(ul, li);

        });
        appendElem(body[0], ul);
    }
};


let sch = new Schedule();

function get() {
    let cache = sessionStorage.getItem("dataLect");
    if (!cache) {
        sch.get(url)
            .then(dataLect => {
                sch.render(dataLect);
                sessionStorage.setItem("dataLect", JSON.stringify(dataLect));
            });
    } else {
        sch.render(JSON.parse(cache));
    }
};