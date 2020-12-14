<template>
  <div>
    <h1>Edit Fault</h1>
    <div>
      <label>Title:</label>
      <input type="text" v-model="fault.title" />
    </div>
    <div>
      <label>Locaton:</label>
      <input type="text" v-model="fault.location" />
    </div>
    <div>
      <label>Block:</label>
      <input type="text" v-model="fault.block" />
    </div>
    <button @click="updateFault">Update fault</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      faultId: "",
      fault: {}
    };
  },
  methods: {
    updateFault: async function() {
      await axios.patch(
        "https://3000-b7922321-9a58-4310-8255-84781f5cb1d2.ws-us03.gitpod.io/faults/" +
          this.faultId,
        this.fault
      );
      this.fault.title = "";
      this.fault.location = "";
      this.fault.block = "";
      alert("Fault has been updated");
    }
  },
  created: async function() {
    this.faultId = this.$route.params.id;
    let response = await axios.get(
      "https://3000-b7922321-9a58-4310-8255-84781f5cb1d2.ws-us03.gitpod.io/faults/" +
        this.faultId
    );
    this.fault = response.data;
  }
};
</script>

<style scoped></style>
