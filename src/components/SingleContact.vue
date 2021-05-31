<template>
  <div>
    <div>
      {{ contact.firstName }}
    </div>
    <div>
      {{ contact.lastName }}
    </div>
    <div>
      {{ contact.email }}
    </div>
  </div>
</template>

<script>
import { contacts } from "../services/Contact";
export default {
  data() {
    return {
      contact: {},
    };
  },

  created() {
    contacts.getSingleContact(this.$route.params.id).then((response) => {
      this.contact = response.data;
    });
  },
};
</script>

<style></style>
