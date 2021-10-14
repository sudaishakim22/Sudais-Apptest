import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export const contactServices = {
  getContact,
  deleteContact,
  addContact,
  updateContact,
};

async function getContact() {
  try {
    const response = await axios.get(
      'https://simple-contact-crud.herokuapp.com/contact',
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
}

async function deleteContact(id) {
  try {
    const response = await axios.delete(`https://simple-contact-crud.herokuapp.com/contact/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function addContact(params) {
  let body = params;

  try {
    const response = await axios.post(
      'https://simple-contact-crud.herokuapp.com/contact',
      body,
      {headers: headers},
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function updateContact(params, id) {
  let body = params;

  try {
    const response = await axios.put(
      `https://simple-contact-crud.herokuapp.com/contact/${id}`,
      body,
      {headers: headers},
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
