"use strict";



class Schedule {

    constructor() {
        let that = this;
    }


    get(link) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', link, true);

        xhr.onload = function() {
          sessionStorage.setItem("data", this.responseText);
          ourSchedule.render();
        }

        xhr.onerror = function() {
          alert( 'Ошибка ' + this.status );
        }

        xhr.send();
    }

    render() {
        if(!(sessionStorage.getItem('data'))){
            ourSchedule.get('https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js');
        } else {

            var data = JSON.parse(sessionStorage.getItem('data')),
                schedule = document.getElementById('schedule'),
                tbody = document.createElement('tbody'),
                content = '';


            data.lectures.forEach(function(item, i) {
                content += `<tr>
                                <td>${item.date}</td>
                                <td>${item.lecturer}</td>
                                <td>${item.time}</td>
                                <td>${item.title}</td>
                            </tr>`;
            });

              tbody.innerHTML = content;
              schedule.appendChild(tbody);
        }
    }


}

const ourSchedule = new Schedule();

ourSchedule.render();
