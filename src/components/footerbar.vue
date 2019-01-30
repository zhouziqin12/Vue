<template>
       	<!--/*底下导航*/-->
    <table width="100%" border="0" cellspacing="0" class="nav">
    	<tr>
            <router-link to='./home' tag="td" class="foot" width='25'  active-class = 'yangshi'><a><img src="../assets/img/1.png" width="30%" height="auto"/><span><p>外卖</p></span></a></router-link>
            <router-link to='./product' tag="td" class="foot" width='25'  active-class = 'yangshi'><a><img src="../assets/img/2.png" width="30%" height="auto"/><span><p>分类</p></span></a></router-link>
            <router-link to='./buycar' tag="td" class="foot" width='25'  active-class = 'yangshi'><a><img src="../assets/img/3.png" width="30%" height="auto"/><span><p>购物车</p></span></a></router-link>
            <router-link to='./user' tag="td" class="foot" width='25'  active-class = 'yangshi'><a><img src="../assets/img/4.png" width="30%" height="auto"/><span><p>我的</p></span></a></router-link>



        	<!-- <td width="25" class="foot"><a><img src="../assets/img/1.png" width="30%" height="auto"/><span><p>外卖</p></span></a></td> -->
            <!-- <td width="25" class="foot"><a href="classify.html"><img src="../assets/img/22.png" width="30%" height="auto"/><p>分类</p></a></td>
            <td width="25" class="foot"><a href="shopping.html"><img src="../assets/img/33.png" width="30%" height="auto"/><p>购物车</p></a></td>
            <td width="25" class="foot"><a href="login.html"><img src="../assets/img/44.png" width="30%" height="auto"/><p>我的</p></a></td> -->
        </tr>
        
    </table>
</template>
<style scoped>
   .foot{ text-align:center; font-size:10px; color:#666; padding-bottom:3px; }
    .nav{padding-top:5px; bottom:0px; left:0px; right:0px; position:fixed; overflow:hidden; width:100%; height:40px; background:#f7f7f7; border-top:#CCC 1px solid;}
    .foot span{color:#ff6633;}
    .nav a{ text-decoration:none; color:#666;}
    .yangshi{background: #f00;opacity: .3;}
</style>
