let getters={
    count:(state)=>{ //接收count类型，函数就被调用了，然后就可以把数据return回components
        return state.product_main
        },
      bNav:(state)=>{
            return state.bNav
      },
      bFoot:(state)=>{
            return state.bFoot
      },
      addshop:(state)=>{
            return state.addshop
      },
      sum:(state)=>{
            let mysum = 0;
            state.addshop.forEach((item ,index)=>{
                  mysum += item.price*item.count ;
                  
            })
            return mysum
      }
      


  };
  export default getters;