import axios from "axios";

export default class Contacts {
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000/api/";
  }

  getAll() {
    return axios.get("contacts");
  }

  deleteContact(id) {
    return axios.delete(`/contacts/${id}`);
  }

  getSingleContact(id) {
    return axios.get(`contacts/${id}`);
  }
}

export const contacts = new Contacts();
