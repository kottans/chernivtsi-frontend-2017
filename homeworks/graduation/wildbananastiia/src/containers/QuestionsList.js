import { connect } from 'react-redux'
import Questions from '../actions'
import QuestionsList from '../components/QuestionList'

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => {
      dispatch(Questions())
    }
  }
}

const mapStateToProps = (state) => ({ questions: state.questions });

const AllQuestionsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsList)
export default AllQuestionsList