import { connect } from 'react-redux';
import { fetchQuestionsAction } from '../actions/questions';
import QuestionFetcher from '../components/QuestionFetcher';


const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchQuestions: () => dispatch(fetchQuestionsAction({ amount: 10, difficulty: ownProps.match.params.difficulty }))
});

const QuestionFetcherContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionFetcher);

export default QuestionFetcherContainer;