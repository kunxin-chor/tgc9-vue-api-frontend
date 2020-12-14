<template>
    <div>
        <h1>Add a new fault</h1>
        <div>
            <label>Title:</label>
            <input type="text" v-model='title'/>
        </div>
        <div>
            <label>Locaton:</label>
            <input type="text" v-model="location"/>
        </div>
        <div>
            <label>Block:</label>
            <input type="text" v-model='block'/>
        </div>
        <button @click="addFault">Add new fault</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data:function(){
        return {
            'title':'',
            'location':'',
            'block':''
        }
    },
    methods:{
        addFault:async function(){
            await axios.post('https://3000-b7922321-9a58-4310-8255-84781f5cb1d2.ws-us03.gitpod.io/faults',{
                'title':this.title,
                'location':this.location,
                'block': this.block,
                'date': new Date()
            })

            this.title = "";
            this.location = "";
            this.block = "";
            alert("New fault has been reported")
        }
    }
}
</script>