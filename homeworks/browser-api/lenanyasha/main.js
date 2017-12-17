class Schedule {
	constructor(url) {
		this.url = url;
		this.load();
	}

	get lectures() {
		return this.data;
	}

	set lectures(data) {
		this.data = data;
		this.render();
		this.save();
	}

	load() {
		const lectures = JSON.parse(sessionStorage.getItem('lectures'));
		this.lectures = lectures || [];
	}

	save() {
		sessionStorage.setItem('lectures', JSON.stringify(this.lectures));
	}

	get() {
		if (!this.data.length) {
			fetch(this.url)
				.then(response => response.json())
				.then(({ lectures }) => {
					this.lectures = lectures;
				});
		}
	}

	render() {
		const body = document.getElementById('body');

		const { lectures } = this;
		lectures.forEach(({ time, title, date, lecturer }) => {
			const row = document.createElement('tr');
			row.innerHTML = `
				<td>${date}</td>
				<td>${time}</td>
				<td>${title}</td>
				<td>${lecturer}</td>
			`;
			body.appendChild(row);
		});
	}
}

const schedule = new Schedule('https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/browser-api/data.js');
schedule.get();