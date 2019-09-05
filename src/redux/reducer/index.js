import { combineReducers } from 'redux';
import mechanicsReducer from './mechanicsReducer'
import cardsReducer from './cardsReducer'

const allReducers = combineReducers({
    mechanics: mechanicsReducer,
    cards:cardsReducer,
  });

export default allReducers;

