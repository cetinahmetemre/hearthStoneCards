const mechanics = [];

const mechanicsReducer = (state = mechanics, action) => {
  switch (action.type) {
    case 'getMechanics':
      return state = action.payload;
    default:
      return state
  }
};

export default mechanicsReducer;

