<template>
  <div id="app">
      <navbar v-show="bNav"></navbar>
      <router-view ></router-view>
      <footerbar v-show="bFoot"></footerbar>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import footerbar from './components/footerbar.vue';
import * as types from './store/types.js'
import {mapGetters} from 'vuex'
export default {
  name:'app',
  components:{
    navbar , footerbar
  },
  watch:{
    $route:{
      deep:true,
      immediate:true,
      handler:'checkRouterChange'
    }
  },
  mounted() {
    console.log(types.VIEW_NAV)
  },
  methods:{
    checkRouterChange(to){
      console.log('变化了',to)
      let path=to.path;

      if(/home|product|buycar|user/.test(path)){//home|follow|column
        this.$store.dispatch('aaa',true)
        this.$store.dispatch('bbb',true)
      }
      if(/detail|login/.test(path)){//login|reg|detail
        this.$store.dispatch('aaa',true)
        this.$store.dispatch('bbb',false)
      }
      if(/welcome|updatepassword/.test(path)){//login|reg|detail
        this.$store.dispatch('aaa',false)
        this.$store.dispatch('bbb',false)
      }
      if(/myjf/.test(path)){//login|reg|detail
        this.$store.dispatch('aaa',false)
        this.$store.dispatch('bbb',true)
      }
      // if(/myjf/.test(path)){//login|reg|detail
      //   this.$store.dispatch('ccc',false)
      // }
      // if(/user/.test(path)){//user
      //   this.$store.dispatch(types.VIEW_FOOT,true)
      //   this.$store.dispatch(types.VIEW_NAV,false)
      // }
      // this.$store.dispatch(types.VIEW_FOOT,true)
    },
    mounted(){
      this.$router.push('/welcome')
    }
  },
   computed:mapGetters([
    'bNav','bFoot'
  ])
}
</script>
<style>
  @charset "utf-8";
  *{ margin:0; padding:0; list-style:none;}
    input[type="button"], 
    input[type="submit"], 
    input[type="reset"] 
    {
    -webkit-appearance: none;}
  a{ text-decoration:none; color:#333;} 	
  .body,html{ height:100%; background:#f0f0f0; margin: 0;padding: 0;}
</style>


