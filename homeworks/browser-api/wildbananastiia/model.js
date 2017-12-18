class Schedule {
    constructor() { }

    async get() {
        const url = 'https://denis-zavgorodny.github.io/slides-browser-api/homework/data/data.json';

        return await fetch(url)
            .then(response => response.json())
            .then(response => response.Lectrures);
    }

    render(lectures) {
        const container = document.getElementById('lecturesWrapper');
        let wrapperSection;

        lectures.forEach(element => {
            const dateText = this.generateHTML(`Date: ${element.date}`);
            const lecturerText = this.generateHTML(`Lecturer: ${element.lecturer}`);
            const timeText = this.generateHTML(`Time: ${element.time}`);
            const titleText = this.generateHTML(`Title: ${element.title}`);
            wrapperSection = document.createElement('section');
            wrapperSection.appendChild(dateText);
            wrapperSection.appendChild(lecturerText);
            wrapperSection.appendChild(timeText);
            wrapperSection.appendChild(titleText);
            container.appendChild(wrapperSection);
        });
        this.cache(lectures);
    }

    generateHTML(data) {
        const node = document.createElement('div');
        node.innerHTML = data;
        return node;
    }

    cache(lectures) {
        lectures.map(lecture => sessionStorage.setItem('lectures', JSON.stringify(lecture)));
    }
}

const schedule = new Schedule();
const lectures = schedule.get();
lectures.then(_lectures => schedule.render(_lectures));