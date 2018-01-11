class Schedule {
  constructor () {}
get() {
      let data = JSON.parse(sessionStorage.getItem("lectures"));
      if (data == null){
    fetch(url)
      .then(response => response.json())
      .then(responce => {sessionStorage.setItem("lectures", JSON.stringify(responce.lectures));
        })
    }
  }

render() {
    if (sessionStorage.length) {
      let data = JSON.parse(sessionStorage.getItem("lectures"));
      for (let i in data) {
      var table = document.getElementById("table");
      var tr = document.createElement("tr");
      var td = document.createElement("td");
      tr.appendChild(td.appendChild(document.createTextNode(data[i].date)));
      tr.appendChild(td.appendChild(document.createTextNode(data[i].time)));
      tr.appendChild(td.appendChild(document.createTextNode(data[i].title)));
      tr.appendChild(td.appendChild(document.createTextNode(data[i].lecturer)));
      table.appendChild(tr);
    }
    
      }
    }
  }

let schedule = new Schedule();

const url = "https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js";

document.getElementById('get').addEventListener('click', () => {
  schedule.get();
});
document.getElementById('show').addEventListener('click', () => {
  schedule.render();
});
