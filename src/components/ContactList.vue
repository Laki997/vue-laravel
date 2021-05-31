<template>
  <div>
    <table>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact.id">
          <td>
            <router-link :to="`/contact/${contact.id}`">{{
              contact.firstName
            }}</router-link>
          </td>
          <td>
            {{ contact.lastName }}
          </td>
          <td>
            {{ contact.email }}
          </td>
          <td>
            <button @click="deleteContact(contact.id)">Delete Contact</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { contacts } from "../services/Contact";
export default {
  data() {
    return {
      contacts: [],
    };
  },

  methods: {
    deleteContact(id) {
      contacts.deleteContact(id).then((response) => {
        console.log(response.data);
        this.contacts = this.contacts.filter((c) => c.id !== response.data.id);
      });
    },
  },

  created() {
    contacts.getAll().then((response) => {
      this.contacts = response.data;
    });
  },
};
</script>

<style scoped></style>
