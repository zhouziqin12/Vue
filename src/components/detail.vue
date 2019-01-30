<template>
    <div>
        <div class="header">
            <table width="100%" border="0" cellspacing="0" class="header_nav">
                <tr>
                    <td width="10%" class="nav_left1"><a  href='javascript:window.history.go(-1)'>&lt;</a></td>
                    <td width="80%" class="nav_title">产品详情</td>
                    <td width="10%" class="nav_r"></td>
                </tr>
            </table>
        </div>
        <div class="bodymain">
            <div><img src="../assets/img/dq.png" width="100%" height="auto"/></div>
            <div class="cp">
                <div class="cp_left">
                        <div>I3 4160/GT730 diy电脑主机台式机游戏主机组装机兼容机全套整机好定西</div>
                    </div>
                    <div class="cp_right">3999.00</div>
                </div>
            </div>
            <div class="mybuycar" v-show="bl">
                <dl >
                    <dt><input type="button" value="-"  @click="decrement"/>&nbsp;&nbsp;{{count}}&nbsp;&nbsp;<input type="button" value="+" @click="increment"/></dt>
                    <dt>{{iptsum}}</dt>
                    <dt @click="entercar2">
                        <input type="button" value="加入购物车">
                    </dt>
                </dl>
            </div>
            <div class="btn">
                <table width="100%" border="0" cellspacing="0">
                    <tr>
                        <td class="btn1"  @click="entercar"> <a href="javascript:;"><input type="button" value="加入购物车" class="btn2"></a></td>
                        <td class="btn1"><a href="javascript:;"><input type="button" value="立即购买" class="btn3"></a></td>
                    </tr>
                </table>
            </div>
         <div class="nr">
            我是<strong style="font-size:36px"> {{$route.params.id}}</strong>数据,
             炫酷视觉:GT730 1G D5限量免费升级到七彩虹GT730K-2G D5独显，显存更大更靠谱，娱乐游戏毫无压力！比市面上普遍的GT730 1G显卡性能提升30%！亲们抓紧机会！

<p>②强悍性能：I3 4150 免费升级到Intel第四代酷睿i3 4160双核四线程处理器，3.6GHz主频，性能秒杀低端四核处理器！</p>

<p>③稳定电源：额定230W电源免费升级到一线大牌金河田智能芯3200  额定300W电源 ，7*24小时长时间工作无故障运行，全方位的保护您的主机。金河田是全国最大的机电厂商之一，电流更纯净，性能更稳定。认准知名品牌，信赖100%！</p>

<p>④极速硬盘：500G机械硬盘免费升级到国内一线老品牌太阳花 128G固态硬盘，提速不提价！让您随时体会飞一般的感觉。</p></div>
 <div class="btnn">
            <table width="100%" border="0" cellspacing="0">
                <tr>
                    <td class="bt"><input type="button" value="产品详情" class="b"></td>
                    <td class="bt"><input type="button" value="产品评价" class="bb"></td>
                    </tr>
            </table>
        </div>
         <div><!--产品详情-->
        <div class="pic"><img src="../assets/img/dq.png" width="100%" height="auto"/></div>
        <div class="pic"><img src="../assets/img/dq.png" width="100%" height="auto"/></div>
        <div class="pic"><img src="../assets/img/dq.png" width="100%" height="auto"/></div>
    </div>
    <div><!--产品详情-->
        <div class="pic"><img src="../assets/img/dq.png" width="100%" height="auto"/></div>
        <div class="pic"><img src="../assets/img/dq.png" width="100%" height="auto"/></div>
        <div class="pic"><img src="../assets/img/dq.png" width="100%" height="auto"/></div>
    </div>
    
    <div class="pl"><!--产品评价-->
    		<div class="pll">
        	<div class="pl_1"><h4>他爱小三</h4></div> 
            <div class="pl_2">满意：★★★★☆ <span>| 2015-06-12</span></div>
            <div class="pl_3">中国饭好吃,外国人爱吃也是不争的事实。中国的饮食文化源远流长.</div>
            <div class="pl_pic">
            	<table width="100%" border="0" cellspacing="0">
                	<tr>
                    	<td class="pic_x"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></td>
                        <td class="pic_x"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></td>
                        <td class="pic_x"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></td>
                        <td class="pic_x"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="pll">
        	<div class="pl_1"><h4>他爱小三</h4></div> 
            <div class="pl_2">满意：★★★★☆ <span>| 2015-06-12</span></div>
            <div class="pl_3">中国饭好吃,外国人爱吃也是不争的事实。中国的饮食文化源远流长.</div>
            <div class="pl_pic">
            	<table width="100%" border="0" cellspacing="0">
                	<tr>
                    	<td class="pic_x"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></td>
                        <td class="pic_x"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></td>
                        <td class="pic_x"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></td>
                        <td class="pic_x"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    methods: {
        entercar(){
            console.log('....')
            this.bl = true ;
        },
        entercar2(){
            this.$store.dispatch('addshop' , {id:this.$route.params.id ,count:this.count,price:this.price2,leibie1:this.$route.query.leibie,leibie2:this.$route.query.leibie2})

            let con = confirm('操作成功，需要帮您跳转到购物车吗？')
            if(con){
               this.$router.push('/buycar')
            }else{
                this.bl = false ;
            }
        },
        increment(){
            this.count ++ ;
            // this.price+=this.price ;
        },
        decrement(){
            if(this.count<=0){
                this.count = 0 ;
            }else{
                this.count --;
                // this.price-=1050 ;
            }
        },   
    },
    data(){
        return{
            count:0,
            price:0,
            bl:false,
            price2:0

        }
    },
    computed: {
        iptsum(){
               this.price = this.price2 * this.count ;
                return this.price;
        }
    },
    mounted() {
        this.$http({
            url:'/data/detail.json',
        }).then((res)=>{
            console.log(res.data)
           res.data.forEach((item ,index)=>{
               if(this.$route.params.id == item.id){
                   this.price2 = item.price ;
               }
            // console.log(item.id)
            // console.log(this.$route.params)
           })
        // this.price = res.data
        })
    },
}
</script>

<style scoped>
   /*产品详情*/
.bodymain{width:100%; background:#FFF; height:100%; margin-top:40px;}
.cp{ width:100%; margin:0px auto; height:60px; border-bottom:#CCC 1px solid;}
.cp_left{ width:60%; float:left; font-size:16px; color:#666; font-family: "微软雅黑";  padding-left:20px; overflow:hidden;  text-overflow:ellipsis; height:40px; margin-top:5px;}
.cp_right{ width:30%; float:right; text-align:left; color:#F00; font-family: "微软雅黑"; line-height:60px; font-size:24px;}
.dz{ width:100%; margin:0px auto; height:110px; margin-top:10px;}
.dz_left{ width:70%; float:left; color:#999; font-family: "微软雅黑"; line-height:25px; font-size:14px; margin-left:20px;}
.dz_right{ width:20%; float:right; margin-top:10px;}
/*加入购物 立即购买*/
.btn{width:100%; height:60px; background:#fff;  margin-top:10px;}
.btn1{ width:50%; height:40px; margin:10px auto; border:0px; background:#f7f7f7; color:#FFF; font-family:"微软雅黑"; font-size:14px; text-align:center;}
.btn2{ width:90%; height:40
	px; margin:10px auto; border:0px; border:#ff8000 1px solid; color:#ff8000; font-family:"微软雅黑"; font-size:14px; text-align:center; background:#f7f7f7;}
.btn3{ width:90%; height:40px; margin:10px auto; border:0px; background:#ff7f00; color:#FFF; font-family:"微软雅黑"; font-size:14px; text-align:center;}
/*产品详情 评论*/
.btnn{width:100%; height:40px; background:#f7f7f7;  margin-top:20px; padding-bottom:10px; padding-top:10px;}
.nr{ width:90%; margin:0px auto; color:#666; font-family:"微软雅黑"; font-size:14px; margin-top:20px; }
.bt{ width:50%; background:#fff;}
.b{width:100%; height:40px; margin:10px auto; border:0px; border-top:#ccc 1px solid; border-bottom:#ccc 1px solid; border-left:#ccc 1px solid; color:#999; font-family:"微软雅黑"; font-size:14px; text-align:center; background:#fff;}
.bb{width:100%; height:40px; margin:10px auto; border:0px; border:#ccc 1px solid; color:#fff; font-family:"微软雅黑"; font-size:14px; text-align:center; background:#ccc;}
.pic{ padding-top:10px;}
.kb{ width:100%; height:80px;}
.pl{ width:100%; height:auto;}
.pll{ width:90%; height:auto; margin:10px auto;}
.pl_1{ font-size:14px; font-family:"微软雅黑"; color:#666; line-height:25px;}
.pl_2{ font-size:14px; font-family:"微软雅黑"; color:#f60; line-height:25px;}
.pl_2 span{ font-size:12px; font-family:"微软雅黑"; color:#666; line-height:25px; text-align:right;}
.pl_3{ font-size:14px; font-family:"微软雅黑"; color:#333; line-height:20px;}
.pl_pic{ width:100%; margin:10px auto; border-bottom:#CCC 1px solid; padding-bottom:20px;}
.pic_x{ padding-left:5px; padding-right:5px;}
.mybuycar{position: absolute;top:37%;left:6px;width: 200px;height: 100px;text-align: center;background: #f00;color: #000;border-radius: 15px;}
.mybuycar dt{margin-top: 5px}
.mybuycar dl dt:nth-child(3) input{border: none;border-radius: 3px;font-size: 10px;color: #f0f;font-weight: bold;}
.mybuycar dl dt:nth-child(1) input{width: 30px;height: 15px;border: none;border-radius: 10px;}
</style>
