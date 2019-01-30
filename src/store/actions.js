import axios from 'axios'
import * as types from './types.js';
let actions = {
    [types.PRODUCT_MAIN]:({commit ,state} ,payload)=>{
        // console.log(commit ,state)
        axios({
            url:payload ,
        }).then((res)=>{
            commit(types.PRODUCT_MAIN ,res.data)
        })
        // commit('UPDATE_HOME' ,payload)
        console.log(payload)
    },
    aaa:(({commit ,state},payload)=>{
        commit('aaa' ,payload)
    }),
    bbb:(({commit ,state},payload)=>{
        commit('bbb' ,payload)
    }),
    addshop:(({commit ,state},payload)=>{
        commit('addshop' ,payload)
    }),
    remove:(({commit ,state},payload)=>{
        commit('remove' ,payload)
    }),

}
export default actions ;