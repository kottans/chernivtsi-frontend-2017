const responseRetrieved = response => ({
    type: 'QUESTIONS',
    questions: response.results
});

const errorRetrieved = error => ({
    type: 'ERROR',
    error
});

export const answerQuestion = ({ questionId, answer }) => ({
    type: 'ANSWER',
    questionId,
    answer
});
export const fetchQuestionsAction = ({ amount = 10, difficulty = null } = {}) => (dispatch, getState, api) => {
    let requestUrl = `${api}?amount=${amount}`;
    const availbleDifficulties = ['easy', 'medium', 'hard'];
    if (difficulty && availbleDifficulties.includes(difficulty)) {
        requestUrl = `${requestUrl}&difficulty=${difficulty}`;
    }
    return fetch(requestUrl)
        .then(response => response.json())
        .then(
            response => dispatch(responseRetrieved(response)),
            error => dispatch(errorRetrieved)
        );
};