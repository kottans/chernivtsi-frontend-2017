"use strict";

const url = "https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js";

class Schedule {

  get() {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(responce => {
        sessionStorage.setItem("lectures", JSON.stringify(responce.lectures));
      })
      .catch(e => alert(e));
  }

  render() {

    if (sessionStorage.length) {
      let data = JSON.parse(sessionStorage.getItem("lectures"));

      console.log(data);

      let table = document.body.appendChild(document.createElement('table'));

      for (let el in data) {
        let tr = table.appendChild(document.createElement('tr'));
        tr.appendChild(document.createElement('td').appendChild(document.createTextNode(data[el].date)));
        tr.appendChild(document.createElement('td').appendChild(document.createTextNode(data[el].time)));
        tr.appendChild(document.createElement('td').appendChild(document.createTextNode(data[el].title)));
        tr.appendChild(document.createElement('td').appendChild(document.createTextNode(data[el].lecturer)));
      }
    }
  }

}

let schedule = new Schedule();
document.getElementById('get_btn').addEventListener('click', () => {
  schedule.get();
});

document.getElementById('render_btn').addEventListener('click', () => {
  schedule.render();
});
