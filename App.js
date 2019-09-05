import React , {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './src/redux/reducer'
import MechanicsScreen from './src/components/MechanicsScreen/MechanicsScreen';
import CardsScreen from './src/components/CardsScreen/CardsScreen';
import SearchScreen from './src/components/SearchScreen/SearchScreen';
import CardDetail from './src/components/SearchScreen/CardDetail';

const store = createStore(allReducers);

class App extends Component {

 constructor(props){
  super(props)
 }

  render(){
    return (
      <Provider store={store}> 
        <AppContainer />
      </Provider>
    );
  }  

}

const RootStack = createStackNavigator(
  {    
    Mechanics:{screen:MechanicsScreen},
    Cards:{screen:CardsScreen},
    Search:{screen:SearchScreen},
    CardDetail:{screen:CardDetail},
  }, { initialRouteName:"Mechanics"});
  const AppContainer = createAppContainer(RootStack);

export default App;
