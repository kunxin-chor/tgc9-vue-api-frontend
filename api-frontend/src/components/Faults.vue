<template>
    <div>
        <h1>Get all Faults</h1>
        <button v-on:click="loadFaults">Load faults</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data:function(){
        return {
            'faults':[]
        }
    },
    methods:{
        loadFaults:async function(){
            let response = await axios.get('https://3000-b7922321-9a58-4310-8255-84781f5cb1d2.ws-us03.gitpod.io/faults/');
            this.faults = response.data;
        }
    }
}
</script>

<style scoped>

</style>