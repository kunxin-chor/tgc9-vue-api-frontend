<template>
<div>
    <h1>
        Confirm delete of fault: {{fault.title}}
    </h1>
    <button @click="doDelete">Ok</button>
    <router-link to='/faults'>Cancel</router-link>
</div>    
</template>

<script>
import axios from 'axios'
export default {
    created:async function(){
        this.faultId = this.$route.params.id;
        let response = await axios.get('https://3000-b7922321-9a58-4310-8255-84781f5cb1d2.ws-us03.gitpod.io/faults/'+this.faultId);
        this.fault = response.data;
   },
   data:function(){
       return {
           'fault':{},
           'faultId':0
       }
   },
   methods:{
       doDelete:async function(){
           await axios.delete('https://3000-b7922321-9a58-4310-8255-84781f5cb1d2.ws-us03.gitpod.io/faults/'+this.faultId)
           alert("The fault has been deleted");
      }
   }
}
</script>

<style scoped>

</style>