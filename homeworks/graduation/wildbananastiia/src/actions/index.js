export default function Questions() {
    return function (dispatch) {
        return fetchQuestions().then(res => res.json()).then(
            questions => dispatch(makeQuestions(questions)),
            error => dispatch(errorHandling())
        );
    };
}

function errorHandling() {
    console.error('error in questions');
}

function makeQuestions(questions) {
    return {
        type: 'GET_QUESTIONS',
        questions
    }

}
function fetchQuestions() {
    return fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
}