function errorHandling() {
    console.error('error in questions');
}

function makeQuestions(questions) {
    return {
        type: 'GET_QUESTIONS',
        questions
    }
}

export const saveAnswer = (answer, id) => {
    return {
        type: 'CHECK_ANSWER',
        answer,
        id: id
    }
}

function fetchQuestions() {
    return fetch('https://opentdb.com/api.php?amount=10')
}

export default function Questions() {
    return function (dispatch) {
        return fetchQuestions().then(res => res.json()).then(
            questions => dispatch(makeQuestions(questions)),
            error => dispatch(errorHandling())
        );
    };
}