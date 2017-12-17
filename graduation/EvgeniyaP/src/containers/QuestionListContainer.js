import { connect } from 'react-redux';
import { answerQuestion } from '../actions/questions';
import QuestionList from '../components/QuestionList';


const mapStateToProps = state => ({
  questions: state.questions
});

const mapDispatchToProps = dispatch => ({
  onAnswer: args => dispatch(answerQuestion(args))
});

const QuestionListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionList);

export default QuestionListContainer;