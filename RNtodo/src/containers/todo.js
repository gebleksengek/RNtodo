import { connect } from 'react-redux';

import TodoApp from '../screens/TodoApp';
import { fetchTodo } from '../actions/todo';

const mapStateToProps = (state) => ({
	data: state
});

const mapDispatchToProps = (dispatch) => ({
	fetchTodo: () => {
		dispatch(fetchTodo());
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoApp);