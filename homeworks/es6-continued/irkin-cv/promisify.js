const myUrl = 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/es6-continued/response.json';

// function for requesting data from the server
function getUrl(url, cb) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState != 4) return;

        if (this.status != 200) {
            return cb(new Error(this.statusText));
        }

        return cb(null, this.responseText);
    }
}

function promisify(func) {
    return function (url) {
        return new Promise(function(resolve, reject) {
            func(url, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    }

}

// example of usage with callback
getUrl(myUrl, (err, data) => {
    if (err) return console.error(err);
    console.log('example of usage with callback:', data);
})

// promisifying getUrl function
const getUrlP = promisify(getUrl);

// // example of usage with promise
getUrlP(myUrl)
    .then(data => console.log('example of usage with promise:', data))
    .catch(err => console.error(err));
