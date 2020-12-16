import React , {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './src/redux/reducer'
import MainNavigation from "./src/navigation/MainNavigation";

const store = createStore(allReducers,applyMiddleware(thunk));
class App extends Component {

 constructor(props){
  super(props)
 }

  render(){
    return (
      <Provider store={store}> 
        <MainNavigation />
      </Provider>
    );
  }  

}

export default App;
