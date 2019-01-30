<template>
    <div class="login">
    	<div class="zhmm">找回密码</div>
        <div class="main">
        	<table width="100%" border="0" cellspacing="0" class="main_2">
            	<tr>
                    <td class="text_yz"><input type="text/css"  placeholder="输入手机号" class="text_yzz"/></td>
                </tr>
            </table>
			<table width="100%" border="0" cellspacing="0" class="main_2">
                <tr>
                    <td class="text_yz"><input type="text/css"  placeholder="输入验证" class="text_yzz"/></td>
                    <td class="text_yz"><input type="submit" value="获取验证码" class="text_yzz"/></td>
                </tr>
            </table>
        </div>
        <div class="button"><input type="submit" value="找回密码" class="text2" /></div>
    </div>
</template>

<style scoped>
    /*忘记密码*/
    .zhmm{ width:100%; font-size:24px; font-family:"微软雅黑"; color:#666; text-align:center; padding-top:50px;}
    .text_yz{ text-align:center; width:100%; border:#CCC 1px solid; height:30px; line-height:30px;}
    .text_yzz{ width:100%; border:#CCC 1px solid; height:40px; line-height:40px; font-size:16px; font-family:"微软雅黑"; }
    .main_2{ margin-top:30px;}
</style>
