//Initial State
const initialState = {
  count: 0
};

//Reducer
function rootReducer(state = initialState, action) {
  return state;
}

//Create Store and pass in root reducer
const store = Redux.createStore(rootReducer);
