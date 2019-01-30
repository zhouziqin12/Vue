import * as types from './types.js';
let mutations={
    [types.PRODUCT_MAIN]:(state,payload)=>{
    console.log('mutations',state,payload)
    // console.log(state)
        state.product_main=payload //对数据做突变
    },
    aaa:(state ,payload)=>{
        state.bNav = payload
    },
   bbb:(state ,payload)=>{
        state.bFoot = payload
    },
    addshop:(state ,payload)=>{
        state.addshop.push(payload)
    },
    remove:(state ,payload)=>{
        state.addshop.splice(payload , 1)
    },
}    
export default mutations ;