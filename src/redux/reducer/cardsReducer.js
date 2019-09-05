const cards = [];

const cardsReducer = (state = cards, action) => {
  switch (action.type) {
    case 'editCards':
      return state = action.payload;
    default:
      return state
  }
};

export default cardsReducer;

