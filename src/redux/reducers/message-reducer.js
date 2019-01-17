const messageReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE':
      return action.value;
    default:
      return state;
  }
};

export default messageReducer;
