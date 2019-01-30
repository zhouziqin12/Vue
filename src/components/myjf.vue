<template>
    <div>
        <div class="header">
        <table width="100%" border="0" cellspacing="0" class="header_nav">
            <tr>
                <td width="10%" class="nav_left1"><a  href='javascript:window.history.go(-1)'></a></td>
                <td width="80%" class="nav_title">我的积分</td>
                <td width="10%" class="nav_r"></td>
            </tr>
        </table>
	</div>
    <div class="my">
    	<div class="jk">
        <table width="100%" border="0" cellspacing="0" class="my_name">
            	<tr>
                	<td class="my_mainp">当前积分：200.00</td>
                    <td class="my_mainnp"><a href="text.html">如何赚取积分？</a></td>
                </tr>
            </table>	
        </div>            
        	<table width="100%" border="0" cellspacing="0" class="my_name">
            	<tr>
                	<td class="my_main_p">额外奖励</td>
                    <td class="my_mainn_pp"><span>+20</span></td>
                </tr>
                <tr>
                	<td class="my_main_p">兑换</td>
                    <td class="my_mainn_pp">-100</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style scoped>
    /*我的金库*/
.jk{ padding-bottom:10px; background:#f0f0f0;}
.my_mainn_pp span{color:#390; font-size:16px; font-family:"微软雅黑"; width:20%; text-align:left;}
.my_mainn_pp{background:#FFF; width:30%; height:50px; border-bottom:#CCC 1px solid; font-size:16px; color:#666; font-family:"微软雅黑"; }
.my_mainp{ width:50%; background:#FFF; height:50px; border-bottom:#CCC 1px solid; font-size:14px; font-family:"微软雅黑"; color:#666; padding-left:30px;}
.my_mainnp{width:50%; background:#FFF; height:50px; border-bottom:#CCC 1px solid; font-size:12px; font-family:"微软雅黑"; color:#390; padding-left:30px; text-align:right;}
</style>