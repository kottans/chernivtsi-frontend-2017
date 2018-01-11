class Schedule {
    constructor() {}

    get(url) {
        return fetch(url)
            .then(response => response.json())
            .then(data => data.lectures);
    }

    render(data) {
        function createNode(element) {
            return document.createElement(element);
        };

        function appendElem(parent, elem) {
            return parent.appendChild(elem);
        };

        let ul = document.getElementById("content"),
            body = document.getElementsByTagName("body");

        data.forEach(function(article) {
            let li = createNode("li");

            li.style.listStyle = 'none';
            ul.style.paddingLeft = '20px';
            li.innerHTML = article.date + " " + article.time + " " + article.title + " " + article.lecturer;
            appendElem(ul, li);

        });
        let br = createNode("br");
        appendElem(ul, br);
        appendElem(body[0], ul);
    }
};


let schedule = new Schedule();
const url = 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js';


function getSchedule() {
    let cache = sessionStorage.getItem("data");
    if (!cache) {
        schedule.get(url)
            .then(data => {
                schedule.render(data);
                sessionStorage.setItem("data", JSON.stringify(data));
            });
    } else {
        schedule.render(JSON.parse(cache));
    }
};