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

//Manipulate DOM using jquery
$(document).ready(function() {
  $("#increment").on("click", function() {
    //dispatch an action to increment count
  });
  $("#decrement").on("click", function() {
    //dispatch an action to decrement count
  });
});
