class Schedule{
    get(url){
        return fetch(url).then(response => response.json());
    }
    render(data){
        let body = document.getElementsByTagName('body');
        let app = document.getElementById('app');
        body[0].style.backgroundColor = "#ccc";
        let h1 = document.createElement('h1');
        h1.style.textAlign = "center";
        h1.innerText = "Kottans Chernivtsi Frontend Course 2017";
        body[0].insertBefore(h1, app);
        let startNode = document.createDocumentFragment();
        let table = document.createElement('table');
        table.style.backgroundColor = "#fff";
        table.style.margin = "0 auto";
        table.style.border = "1px solid black";
        table.style.width = "60%";
        data.lectures.forEach(function(item, i, data){
            if (i == 0){
                let tr = document.createElement('tr');
                tr.style.height = "30px";
                tr.style.fontWeight = "700";
                for(let ceil in item){
                    let td = document.createElement('td');
                    td.style.border = "1px solid black";
                    td.style.padding = "0 10px";
                    td.innerText = ceil;
                    tr.appendChild(td);
                };
                table.appendChild(tr);
            }
            let tr = document.createElement('tr');
            tr.style.height = "30px";
            for(let ceil in item){
                let td = document.createElement('td');
                td.style.border = "1px solid black";
                td.style.padding = "0 10px";
                td.innerText = item[ceil];
                tr.appendChild(td);
            };
            table.appendChild(tr);
        });
        startNode.appendChild(table);
        app.appendChild(startNode);
    }
}

let cash = sessionStorage.getItem("data");
let app = new Schedule();
if(cash == null){
    let url = 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js';
    app.get(url)
        .then(data =>{
            app.render(data);
            sessionStorage.setItem("data", JSON.stringify(data));
            console.log(localStorage.getItem("data"));
        })
}
else{
    app.render(JSON.parse(cash));
}
