class Schedule {
    constructor() { this.lectures = []; }

    async get() {
        const url = 'https://denis-zavgorodny.github.io/slides-browser-api/homework/data/data.json';

        return await fetch(url)
            .then(response => response.json())
            .then(response => response.Lectrures);
    }

    render(lectures) {
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
const lectures = schedule.get();

lectures.then(_lectures => schedule.render(_lectures));
