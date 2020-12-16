import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MechanicsScreen from '../screens/MechincsScreen';
import CardsScreen from '../screens/CardsScreen';
import SearchScreen from '../screens/SearchScreen';
import CardDetailScreen from '../screens/CardDetailScreen';

const RootStack = createStackNavigator(
    {    
      Mechanics:{screen:MechanicsScreen},
      Cards:{screen:CardsScreen},
      Search:{screen:SearchScreen},
      CardDetail:{screen:CardDetailScreen},
    }, { initialRouteName:"Mechanics"});

export default createAppContainer(RootStack);