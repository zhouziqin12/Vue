<template>
      <div class="header">
        <table width="100%" border="0" cellspacing="0" class="header_nav">
            <tr>
                <td class="nav_left">
                <select class="nav_op">
                    <option class="nav_tion">青岛</option>
                    <option class="nav_tion">北京</option>
                    <option class="nav_tion">上海</option>
                    <option class="nav_tion">广州</option>
                    <option class="nav_tion">天津</option>
                    <option class="nav_tion">沈阳</option>
                    <option class="nav_tion">大连</option>
                    <option class="nav_tion">重庆</option>
                    <option class="nav_tion">西安</option>
                    <option class="nav_tion">成都</option>
                    <option class="nav_tion">燕郊</option>
                    <option class="nav_tion">延边</option>
                    <option class="nav_tion">烟台</option>
                    <option class="nav_tion">威海</option>
                </select>
                </td>
                <td ></td>
                <td class="nav_right"><input type="text" placeholder="输入关键字" autofocus x-webkit-speech class="searc">
                </td>
                <td class="nav_ss"><input type="submit"  value="搜索" class="sss"></td>
                <router-link to='/login' tag="td" class="nav_ss"><input type="button"  value="登陆" class="sss" ></router-link>
                <!-- <td class="nav_ss"><input type="button"  value="登陆" class="sss"></td> -->
                 <router-link to='/register' tag="td" class="nav_ss"><input type="button"  value="注册" class="sss"></router-link>
                <!-- <td class="nav_ss"><input type="button"  value="注册" class="sss"></td> -->
            </tr>
        </table>
    </div>
</template>
<style scoped>
/*��ҳ ͷ������*/
.header{ width:100%; height:44px; background:#ff8000; top:0px; left:0px; right:0px; position:fixed; overflow:hidden;}
.header_nav{ width:100%; margin:0px auto; padding-top:7px;}
.nav_left{ width:25%; font-size:16px; color:#FFF; font-family: "微软雅黑"; text-align:left; padding-left:20px;}
.nav_right{ width:65%; height:20px; text-align:center;}
.nav_r{ width:25%; height:20px; text-align:center;}
.nav_ss{ width:30%; font-size:14px; color:#FFF; font-family:"΢���ź�"; text-align:left; padding-top:2px; padding-right:10px;}
.sss{ border:0px; background:#f34b40; border-radius:15px; height:25px; width:50px; color:#FFF;}
.nav_op{ border:0px; color:#fff; height:20px; line-height:30px; border-radius:10px; width:50px; background:#ff8000;}
.nav_tion{ background:#FFF; color:#999;}
.nav_title{text-align:center; font-size:16px; color:#FFF; font-family: "微软雅黑"; width:50%;}
.nav_left1 a{ color:#FFF;}
.nav_left1{ width:25%; font-size:16px; color:#FFF; text-align:left; padding-left:20px;}
.searc{background:#fff; border:0px; font-size:12px; color:#666; text-align:left; height:25px; width:80%; border-radius:15px; padding-left:10px; }
</style>
