const url = 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js';

class Schedule {
    get(url, cb) {
        var data = localStorage.getItem('data');

        if (!data) {
            const xhr = new XMLHttpRequest();

            xhr.open('GET', url, true);
            xhr.send();

            xhr.onreadystatechange = function () {
                if (this.readyState != 4) return;

                if (this.status != 200) {
                    return cb(new Error(this.statusText));
                }

                localStorage.setItem("data", JSON.stringify(this.responseText));

                return cb(null, this.responseText);
            }
        } return cb(null, JSON.parse(data));
    }
    render(data) {
        var ul_find = document.getElementsByTagName('ul');
        if(ul_find.length == 0){
            var data_new = JSON.parse(data);
            var ul = document.createElement('ul');

            data_new['lectures'].forEach(function(item, i) {
                var li = document.createElement('li');
                li.innerHTML = item.date+" "+item.time+" "+item.title+" "+item.lecturer;
                ul.appendChild(li);
            });
            document.body.appendChild(ul);
        }
    }
}

const schedule = new Schedule();


window.onload = function (){

    var button = document.getElementsByTagName('button');


    button[0].addEventListener('click', function (event) {

        schedule.get(url, (err, data) => {
            if (err) { return console.error(err)
            } else {
                schedule.render(data);
            }
        })
    });

};
