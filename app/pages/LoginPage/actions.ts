import { Action } from 'interfaces';
import { saveAuthCredentials } from 'containers/App/actions';
import { submitData } from './api';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCEEDED,
  LOGIN_USER_FAILED,
} from './constants';

interface AuthCredentials {
  auth_token: string;
}

const loginSubmit = (): Action => ({
  type: LOGIN_USER,
});

const loginSucceeded = (): Action => ({
  type: LOGIN_USER_SUCCEEDED,
});

const loginSubmitSucceeded = (data: AuthCredentials) => dispatch => {
  dispatch(loginSucceeded());
  dispatch(saveAuthCredentials(data));
};

const loginSubmitFailed = (message: string): Action => ({
  type: LOGIN_USER_FAILED,
  message,
});

export const loginUser = (credentials: any) => dispatch => {
  dispatch(loginSubmit());
  submitData(
    credentials,
    data => dispatch(loginSubmitSucceeded(data)),
    (msg: string) => dispatch(loginSubmitFailed(msg))
  );
};