<template>
    <div>
        <div class="header">
    <table width="100%" border="0" cellspacing="0" class="header_nav">
  <tr>
        	<td width="10%" class="nav_left1"><a  href='javascript:window.history.go(-1)'></a></td>
            <td width="80%" class="nav_title">确认下单</td>
          <td width="10%" class="nav_r"></td>
        </tr>
    </table>
    </div>
	<div class="rr">
    <table width="70%" border="0" cellspacing="0" class="r1">
    	<tr>
        	<td class="yhm"><input type="text" value="联系人" class="yhm_1" /></td>
        </tr>
        </table>
    <table width="70%" border="0" cellspacing="0"  class="r1">
        <tr>
        	<td class="yhm"><input type="text" value="联系电话" class="yhm_1" /></td>
        </tr>
    </table>
    <table width="70%" border="0" cellspacing="0" class="r1">
        <tr>
        	<td class="yhm"><input type="text" value="详细地址" class="yhm_1" /></td>
        </tr>
    </table>
    <table width="70%" border="0" cellspacing="0" class="r1">
        <tr>
        	<td class="yhm">
                <select class="yhm2">
                    <option class="yhm3">支付方式</option>
                    <option class="yhm3">支付支付宝</option>
                    <option class="yhm3">支付微信支付</option>
                    <option class="yhm3">支付银行卡</option>  
                </select>
            </td>
        </tr>
    </table>
    <table width="70%" border="0" cellspacing="0" class="r1">
        <tr>
        	<td class="yhm"><textarea name="名称" rows="2" class="yhm_1">备注</textarea></td>
        </tr>
    </table>
    <table width="70%" border="0" cellspacing="0" class="r2">
    	<tr>
        	<td>合计：<span>100.00</span></td>
        </tr>
    </table>
    </div>
    <table width="100%" border="0" cellspacing="0" class="btn">
        <tr>
            <td width="50" class="btn1"><input type="button" value="确认下单" class="btn3"></td>
        </tr>
    </table>
    </div>
</template>

<style scoped>
    /*下单*/
    .bj_index{ min-width:320px; max-width:640px; margin-left:auto; margin-right:auto;}
    .yhm{ width:50px; text-align:left; height:35px;  background:#ebeaea; padding-left:20px;}
    .yhm_1{background:#ebeaea; border:0px; font-size:12px; color:#666;  width:100%; }
    .yhm2{ background:#ebeaea; border:0px; width:100%; font-size:12px; color:#666;}
    .yhm3{ background:#FFF;}
    .zc{font-size:12px; color:#000; }
    .rr{width:100%; background:#FFF; height:100%; margin-top:40px; padding-bottom:20px;}
    .r1{padding-top:7px; margin:10px auto;}
    .zc span{ color:#f60;}
    .xg{padding-top:7px; margin:10px auto;}
    .r2{ width:70%; margin:0px auto; text-align:right; margin-top:20px; font-size:14px; font-family:"微软雅黑"; color:#666;}
    .r2 span{ font-size:18px; color:#F00;}
    
.btn{bottom:0px; left:0px; right:0px; position:fixed; overflow:hidden; width:100%; height:60px; background:#f7f7f7; border-top:#CCC 1px solid;}
.btn1{ width:50%; height:40px; margin:10px auto; border:0px; background:#f7f7f7; color:#FFF; font-family:"微软雅黑"; font-size:14px; text-align:center;}
.btn2{ width:90%; height:40px; margin:10px auto; border:0px; border:#ff8000 1px solid; color:#ff8000; font-family:"微软雅黑"; font-size:14px; text-align:center; background:#f7f7f7;}
.btn3{ width:90%; height:40px; margin:10px auto; border:0px; background:#ff7f00; color:#FFF; font-family:"微软雅黑"; font-size:14px; text-align:center;}

</style>
