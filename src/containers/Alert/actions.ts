import { Notification } from 'models/Notification';
import {
  ADD_NOTIFICATION,
  REMOVE_CURRENT_NOTIFICATION
} from './constants';

const formNotification = (notification: Notification) => ({
  type: ADD_NOTIFICATION,
  notification,
});

const clearFirstNotification = () => ({
  type: REMOVE_CURRENT_NOTIFICATION
});

export const addNotification = (notification: Notification) => dispatch =>
  dispatch(formNotification(notification));

export const removeFirstNotification = () => dispatch =>
  dispatch(clearFirstNotification());
