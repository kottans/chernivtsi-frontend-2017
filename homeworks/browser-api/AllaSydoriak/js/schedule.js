const url = "https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js";

const myInit = {
    method: "GET",
    cache: "force-cache"
}

const table = document.createElement('table');


class Schedule {

    get() {
        fetch(url, myInit)
        .then(function(response){
            return response.json();
        })
        .then( response => {
            sessionStorage.setItem("lectures", JSON.stringify(response.lectures));
            var data = sessionStorage.getItem('lectures');
            return JSON.parse(data);
        })
        .catch(function(e) {
            console.log(e);
        })
    }

    render() {
        if (sessionStorage.getItem('lectures') !== null) {
            
            var data = sessionStorage.getItem('lectures');        
            this.list = JSON.parse(data);
            
            document.body.appendChild(table);            
            
            this.list.forEach(item => {
            
            let tr = document.createElement('tr');
            table.appendChild(tr);
            
            let td1 = document.createElement('td');
            td1.className = "column";
                        
            let td2 = document.createElement('td');  
            td2.className = "column";        
                        
            let td3 = document.createElement('td'); 
            td3.className = "column";        
                        
            let td4 = document.createElement('td');   
            td4.className = "column";        
                        
            let info = document.createTextNode(item.date);
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
}

const schedule = new Schedule();


document.getElementById('load').addEventListener('click', () => {
    schedule.get();
});

createTable();


document.getElementById('render').addEventListener('click', () => {
    schedule.render();    
})

function createTable() {
    let tr = document.createElement('tr');
    tr.className = "header";
    table.appendChild(tr);
    
    let th = document.createElement('th');
    th.className = "column";
    let date = document.createTextNode('Date');
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