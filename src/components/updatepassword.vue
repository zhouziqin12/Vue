<template>
    <div>
        <div class="header">
            <table width="100%" border="0" cellspacing="0" class="header_nav">
                <tr>
                    <td width="10%" class="nav_left1"><a  href='javascript:window.history.go(-1)'></a></td>
                    <td width="80%" class="nav_title">修改密码</td>
                    <td width="10%" class="nav_r"></td>
                </tr>
            </table>
        </div>
        <!--/*主要部分*/-->
        <div class="bodymain">
            <div class="pass">
                <table width="90%" border="0" cellspacing="0">
                    <tr>
                        <td>旧密码：</td>
                        <td><input type="password"  class="work" v-model="oldpassword"/></td>
                    </tr>
                    <tr>
                        <td>新密码：</td>
                        <td><input type="password"  class="work" v-model="newpassword"/></td>
                    </tr>
                    <tr>
                        <td>确认新密码：</td>
                        <td><input type="password" class="work" /></td>
                    </tr>
                </table>
            </div>
            <div class="qrq"><input type="button" value="确认提交" class="qr" @click="check"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            oldpassword:'',
            newpassword:''
        }
    },
    methods: {
        check(){
            this.$http({
                url:'http://localhost:3000/checkpassword',
                params:{oldpassword:this.oldpassword,newpassword:this.newpassword}
            }).then((res)=>{
                console.log(res)
                if(res.data.error == 0){
                    alert('修改成功')
                    this.$router.push('/user')
                }else if(res.data.error == 1){
                    alert('修改密码失败，请重新修改')
                }
            })
        }
    },
}
</script>
<style>
    /*导航*/
    body{height: 100%;background: #fff}
    .header{ width:100%; height:40px; background:#ff8000; top:0px; left:0px; right:0px; position:fixed; overflow:hidden;}
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
        /*产品详情*/
    .bodymain{width:100%; background:#FFF; height:100%; margin-top:40px;}
    .cp{ width:100%; margin:0px auto; height:40px; border-bottom:#CCC 1px solid;}
        /*修改密码*/
    .pass{ width:90%; margin:0px auto; line-height:50px; text-align:right; font-size:16px; font-family:"微软雅黑"; color:#666; padding-top:20px;}
    .qrq{width:80%; margin:10px auto; margin-top:30px;}
    .qr{ width:100%; height:40px; margin:0px auto; border:0px;  color:#fff; font-family:"微软雅黑"; font-size:14px; text-align:center; background:#ff8000;}
    .work{height:30px; width:100%;}
</style>
