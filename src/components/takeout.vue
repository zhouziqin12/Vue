<template>
    <div>
        <div class="header">
            <table width="100%" border="0" cellspacing="0" class="header_nav">
                <tr>
                    <td width="10%" class="nav_left1"><a  href='javascript:window.history.go(-1)'>&lt;</a></td>
                    <td width="80%" class="nav_title">炸鸡</td>
                    <td width="10%" class="nav_r"></td>
                </tr>
            </table>
        </div>
        
        <!--/*主要部分*/-->
        <div class="takemain">
            <a href="order.html"><div class="take">
                <table width="100%" border="0" cellspacing="0">
                    <tr>
                        <td width="30" class="take_pic"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></td>
                        <td width="50" class="take_text">
                            <div take_text_1>{{$route.query.dataName}}</div>
                            <div>
                                <div></div>
                                <div class="jj">￥:7.00</div>
                            </div>
                            <div class="sj">外卖时间：8:00-23:00</div>
                            <div class="sj">中餐 | 餐馆</div>
                        </td>
                        <td width="20" class="take_phone">
                            <div class="dh"><a href="tel:15854290371"><img src="../assets/img/bd.png" width="100%" height="auto"/></a></div>
                            <div class="jl">100m</div>
                        </td>
                    </tr>
                </table>
            </div></a>
            <a href="order.html"><div class="take">
                <table width="100%" border="0" cellspacing="0">
                    <tr>
                        <td width="30" class="take_pic"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></td>
                        <td width="50" class="take_text">
                            <div take_text_1>{{$route.query.dataName}}</div>
                            <div>
                                <div></div>
                                <div class="jj">￥:7.00</div>
                            </div>
                            <div class="sj">外卖时间：8:00-23:00</div>
                            <div class="sj">中餐 | 餐馆</div>
                        </td>
                        <td width="20" class="take_phone">
                            <div class="dh"><a href="tel:15854290371"><img src="../assets/img/bd.png" width="100%" height="auto"/></a></div>
                            <div class="jl">100m</div>
                        </td>
                    </tr>
                </table>
            </div></a>
            <a href="order.html"><div class="take">
                <table width="100%" border="0" cellspacing="0">
                    <tr>
                        <td width="30" class="take_pic"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></td>
                        <td width="50" class="take_text">
                            <div take_text_1>{{$route.query.dataName}}</div>
                            <div>
                                <div></div>
                                <div class="jj">￥:7.00</div>
                            </div>
                            <div class="sj">外卖时间：8:00-23:00</div>
                            <div class="sj">中餐 | 餐馆</div>
                        </td>
                        <td width="20" class="take_phone">
                            <div class="dh"><a href="tel:15854290371"><img src="../assets/img/bd.png" width="100%" height="auto"/></a></div>
                            <div class="jl">100m</div>
                        </td>
                    </tr>
                </table>
            </div></a>

        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        console.log(this.$route)
    }
}
</script>
<style scoped>
        /*外卖列表*/
    .takemain{ width:100%; background:#FFF; padding-bottom:10px;  margin-top:40px;}
    .take{ width:100%; height:90px; border-bottom:#CCC 1px solid; padding-bottom:10px; padding-top:10px;}
    .take_pic{ width:30%; padding-left:10px;}
    .take_text{ width:50%; font-family:"微软雅黑"; padding-left:10px; line-height:20px;}
    .take_phone{ width:20%; height:70px;}
    .take_text_1{ font-family:"微软雅黑"; font-size:16px; color:#666; text-align:left; width:50%; }
    .jj{ color:#F00;}
    .sj{ color:#999; font-size:14px; font-family:"微软雅黑"; }
    .dh{ width:60%; height:40px;}
    .jl{ color:#999; font-size:14px; font-family:"微软雅黑"; margin-top:20px;}
</style>