var xhr = new XMLHttpRequest();

function get(){
	xhr.open('GET', 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js', true);
	xhr.send();	
};
 

function render(lectures_data){
	arr = JSON.parse(lectures_data); 
	let elem = document.getElementsByClassName("lecture");
	if(elem.length > 1){
		return
	} 
	else{
		for(let i = 0;i<arr.lectures.length;i++){
	 		let parent_div = document.createElement('div');
			let lecture_title = document.createElement('h2');
			let lecture_lecturer = document.createElement('div');
			let lecture_date = document.createElement('div');
			let lecture_time = document.createElement('div'); 
			lecture_title.innerHTML = arr.lectures[i].title; 
			lecture_lecturer.innerHTML = arr.lectures[i].lecturer;
			lecture_date.innerHTML = arr.lectures[i].date;
			lecture_time.innerHTML = arr.lectures[i].time;  
			parent_div.className = "lecture lecture-" + i;
			lecture_title.className = "lecture-title";
			lecture_date.className = "lecture-date";
			lecture_lecturer.className = "lecture-lecturer";
			lecture_time.className = "lecture-time"; 
			parent_div.appendChild(lecture_title);
			parent_div.appendChild(lecture_lecturer);
			parent_div.appendChild(lecture_date);
			parent_div.appendChild(lecture_time);  
			document.body.appendChild(parent_div);
		}
	}	
};

function detect_storage(){  
	if(window.sessionStorage.getItem("lectures")){  
		let server_request = window.sessionStorage.getItem("lectures");  
  		render(server_request);  
		console.log("From sessionStorage");   
	} 
	else{
		get();		
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200){
			    let server_request = xhr.responseText; 		     
			    render(server_request); 
			    window.sessionStorage.setItem("lectures", server_request);  
			}
			else{

			}
		}	
		console.log("not From sessionStorage");    
	}
}