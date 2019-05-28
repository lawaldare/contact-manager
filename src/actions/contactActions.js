import {
  GET_CONTACTS,
  GET_CONTACT,
  DELETE_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT
} from './types';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/users';

export const getContacts = () => async dispatch => {
  const response = await axios.get(URL);
  dispatch({
    type: GET_CONTACTS,
    payload: response.data
  });
};

export const getContact = id => async dispatch => {
  const response = await axios.get(`${URL}/${id}`);
  dispatch({
    type: GET_CONTACT,
    payload: response.data
  });
};

export const deleteContact = id => async dispatch => {
  await axios.delete(`${URL}/${id}`);
  dispatch({
    type: DELETE_CONTACT,
    payload: id
  });
};

export const addContact = contact => async dispatch => {
  const response = await axios.post(URL, contact);
  dispatch({
    type: ADD_CONTACT,
    payload: response.data
  });
};

export const updateContact = contact => async dispatch => {
  const response = await axios.put(`${URL}/${contact.id}`, contact);
  dispatch({
    type: UPDATE_CONTACT,
    payload: response.data
  });
};
