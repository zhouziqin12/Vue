<template>
    <div class="bodymain">
    	<div class="pass">
            <table width="90%" border="0" cellspacing="0">
                <tr>
                    <td>姓名：</td>
                    <td><input type="text"  class="work" /></td>
                </tr>
                <tr>
                    <td>手机：</td>
                    <td><input type="text"  class="work" /></td>
                </tr>
                <tr>
                    <td>收货地址：</td>
                    <td><input type="text" class="work" /></td>
                </tr>
            </table>
        </div>
        <div class="qrq"><input type="button" value="确认提交" class="qr"></div>
    </div>
</template>
<style scoped>
        /*产品详情*/
    .bodymain{width:100%; background:#FFF; height:100%; margin-top:40px;}
    .cp{ width:100%; margin:0px auto; height:40px; border-bottom:#CCC 1px solid;}
    /*修改密码*/
    .pass{ width:90%; margin:0px auto; line-height:50px; text-align:right; font-size:16px; font-family:"微软雅黑"; color:#666; padding-top:20px;}
    .qrq{width:80%; margin:10px auto; margin-top:30px;}
    .qr{ width:100%; height:40px; margin:0px auto; border:0px;  color:#fff; font-family:"微软雅黑"; font-size:14px; text-align:center; background:#ff8000;}
    .work{height:30px; width:100%;}
</style>
