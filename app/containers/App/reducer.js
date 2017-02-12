/* ------------------------------------------------------------------------------
* AppReducer
*
* The reducer takes care of our data. 
* Using actions, we can change our application state.
* To add a new action, add it to the switch statement in the reducer function.
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import homeReducer from '../Home/reducer';

const appReducer = (state = {}, action) => {
  switch(action.type) {

    default:
      return state;
  }
};

export default (state = {}, action) => ({
  app: appReducer(state.app, action),
  home: homeReducer(state.home, action)
});