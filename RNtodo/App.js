import React from 'react';
import { Provider } from 'react-redux';

// import TodoApp from './src/screens/TodoApp';
import RouteStack from './src/components/RouteStack';
import store from './src/store';

const App = () => {
  return (
  	<Provider store={store}>
  		<RouteStack />
  	</Provider>
  )
}

export default App;