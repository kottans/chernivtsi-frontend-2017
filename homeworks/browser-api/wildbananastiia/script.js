class Lecture {
    constructor(date, time, title, lecturer) {
        this.date = date;
        this.time = time;
        this.title = title;
        this.lecturer = lecturer;
    }
}

class Schedule {
    constructor(lecture) {
        this.lecture = lecture;
    }

    get() {
        const url = 'https://denis-zavgorodny.github.io/slides-browser-api/homework/data/data.json';
        const resp = fetch(url).then(response => response.json())
        .then(response => {
            let _lectures = response.Lectrures.map(_lecture => {
                new Lecture(_lecture.date, _lecture.time, _lecture.title, _lecture.lecturer)
            });
        })
        .catch(error => console.log(error))
        console.log(resp);
        return resp;
    }

    createLabel() {
        return document.createElement('label')
    }

    render() {
        const container = document.getElementById('lecturesWrapper');
        const wrapper = document.createElement('section');
        const text = document.createTextNode('Some text');
        const span = document.createElement('span');
        const data = this.get();
        
        container.appendChild(wrapper);
        wrapper.appendChild(text, span);
    }

}

const schedule = new Schedule();
schedule.render();