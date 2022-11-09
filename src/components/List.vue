<template>
  <div>
    <div>
        <div>
            <i class="material-symbols-outlined">queue_music</i>
            <span>Music List</span>
        </div>
        <i class="material-symbols-outlined">close</i>
    </div>
    <ul v-for="(item,index) in handleData()" :key="index" >
        <li>{{item.id}}</li>
        <li>{{item.title}}</li>

    </ul>
  </div>
</template>

<script lang='ts'>
import { IMusic } from "@/utils/interface";
import { defineComponent } from "@vue/runtime-core";
import data from '@/assets/data'
export default defineComponent({
    name:'List',
    data(){
        return{
            //music:[] as IMusic[]
        }
    },
    created(){
    },
    mounted(){
    },methods:{
        handleData(){
            return this.$store.state.musicData
        }
    }
})
</script>

<style>

</style>