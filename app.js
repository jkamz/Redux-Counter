//Initial State
const initialState = {
  count: 0
};

//Reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      var newState = { ...state };
      newState.count++;
      return newState;
    case "DECREMENT":
      var newState = { ...state };
      newState.count--;
      return newState;
    default:
      return state;
  }
}

//Create Store and pass in root reducer
const store = Redux.createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Manipulate DOM using jquery
$(document).ready(function() {
  //Get and display initial state
  var currentState = store.getState();
  $("#counter").text(currentState.count);

  $("#increment").on("click", function() {
    //dispatch an action to increment count
    store.dispatch({ type: "INCREMENT" });
    var currentState = store.getState();
    $("#counter").text(currentState.count);
  });

  $("#decrement").on("click", function() {
    //dispatch an action to decrement count
    store.dispatch({ type: "DECREMENT" });
    var currentState = store.getState();
    $("#counter").text(currentState.count);
  });
});
