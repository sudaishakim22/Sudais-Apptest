import {
  ADD_CONTACT,
  GET_CONTACT,
  GET_CONTACT_DETAIL,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from './type';
import {contactServices} from '../services/contactServices';

export const getContact = () => {
  return async dispatch => {
    const response = await contactServices.getContact();
    dispatch({type: GET_CONTACT, data: response});
  };
};

export const deleteContact = id => {
  return async dispatch => {
    const response = await contactServices.deleteContact(id);
    dispatch({type: DELETE_CONTACT, data: response});
  };
};

export const addContact = params => {
  return async dispatch => {
    const response = await contactServices.addContact(params);
    dispatch({type: ADD_CONTACT, data: response});
  };
};

export const updateContact = (params, id) => {
  return async dispatch => {
    const response = await contactServices.updateContact(params, id);
    dispatch({type: UPDATE_CONTACT, data: response});
  };
};
