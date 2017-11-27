var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var url = "https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js";

var myInit = {
    method: "GET",
    cache: "force-cache"
};

var table = document.createElement('table');

var Schedule = function () {
    function Schedule() {
        _classCallCheck(this, Schedule);
    }

    _createClass(Schedule, [{
        key: "get",
        value: function get() {
            fetch(url, myInit).then(function (response) {
                return response.json();
            }).then(function (response) {
                sessionStorage.setItem("lectures", JSON.stringify(response.lectures));
                var data = sessionStorage.getItem('lectures');
                return JSON.parse(data);
            }).catch(function (e) {
                console.log(e);
            });
        }
    }, {
        key: "render",
        value: function render() {
            if (sessionStorage.getItem('lectures') !== null) {

                var data = sessionStorage.getItem('lectures');
                this.list = JSON.parse(data);

                document.body.appendChild(table);

                this.list.forEach(function (item) {

                    var tr = document.createElement('tr');
                    table.appendChild(tr);

                    var td1 = document.createElement('td');
                    td1.className = "column";

                    var td2 = document.createElement('td');
                    td2.className = "column";

                    var td3 = document.createElement('td');
                    td3.className = "column";

                    var td4 = document.createElement('td');
                    td4.className = "column";

                    var info = document.createTextNode(item.date);
                    td1.appendChild(info);
                    tr.appendChild(td1);

                    info = document.createTextNode(item.time);
                    td2.appendChild(info);
                    tr.appendChild(td2);

                    info = document.createTextNode(item.title);
                    td3.appendChild(info);
                    tr.appendChild(td3);

                    info = document.createTextNode(item.lecturer);
                    td4.appendChild(info);
                    tr.appendChild(td4);
                });
            }
        }
    }]);

    return Schedule;
}();

var schedule = new Schedule();

document.getElementById('load').addEventListener('click', function () {
    schedule.get();
});

createTable();

document.getElementById('render').addEventListener('click', function () {
    schedule.render();
});

function createTable() {
    var tr = document.createElement('tr');
    tr.className = "header";
    table.appendChild(tr);

    var th = document.createElement('th');
    th.className = "column";
    var date = document.createTextNode('Date');
    th.appendChild(date);
    tr.appendChild(th);

    th = document.createElement('th');
    th.className = "column";
    date = document.createTextNode('Time');
    th.appendChild(date);
    tr.appendChild(th);

    th = document.createElement('th');
    th.className = "column";
    date = document.createTextNode('Title');
    th.appendChild(date);
    tr.appendChild(th);

    th = document.createElement('th');
    th.className = "column";
    date = document.createTextNode('Lecturer');
    th.appendChild(date);
    tr.appendChild(th);
}