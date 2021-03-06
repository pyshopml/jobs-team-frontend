import { createSelector } from 'reselect';

const selectSubstate = state => state.get('newPost');
const selectToken = state => state.get('app').get('auth_token');

export default createSelector(
  selectSubstate,
  selectToken,
  (substate, auth_token) => substate.set('auth_token', auth_token).toJS()
)