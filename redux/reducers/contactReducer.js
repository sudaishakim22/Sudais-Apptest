import {
  ADD_CONTACT,
  GET_CONTACT,
  GET_CONTACT_DETAIL,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from '../actions/type';

const initialState = {
  contactList: [],
  deleteResult: null,
  addResult: null,
  updateResult: null,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        contactList: action.data,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        deleteResult: action.data,
      };
    case ADD_CONTACT:
      return {
        ...state,
        addResult: action.data,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        updateResult: action.data,
      };
    default:
      return state;
  }
};

export default contactReducer;
