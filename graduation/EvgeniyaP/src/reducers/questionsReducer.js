export default (state = [], action) => {
    switch (action.type) {
        case 'QUESTIONS':
            return [...action.questions];
        case 'ANSWER':
            const questionWithAnswer = { ...state[action.questionId], userAnswer: action.answer };
            const newState = [...state];
            newState[action.questionId] = questionWithAnswer;
        return newState;
        default:
        return state;
    }
};