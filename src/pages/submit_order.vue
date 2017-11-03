<template>
	<div id="submit_order">
		<div class="header noaddress">
	        <div class="header_add">+</div>
	        <div class="header_name">创建收货地址 <p></p> </div>
	    </div>
	    <div class="header haveaddress">
	        <div class="header_adda"></div>
	        <div class="header_namea">
	            <div class="location_info">
	                <span>创建收货地址</span>
	                <span>创建收货地址</span>
	            </div>
	            <div class="user_num">123456789</div>
	            <p></p>
	        </div>
	    </div>
	    <div class="book_conten">
	        <div class="book" v-for="item in booksdata">
	            <div class="book_info">
	                <img :src="item.img">
	                <p>{{item.productName}}</p>
	                <div class="book_price">
	                    <p>￥{{item.price}}</p>
	                    <p>*{{item.productNum}}</p>
	                </div>
	            </div>
	        </div>
	    </div>
	    <div class="all_price">
	        <div class="all_price_price">配送方式 <span class="address-a">快递包邮</span>
	            <p></p>
	        </div>
	        <div class="all_price_price">合计： <span>￥{{totalmoney}}</span></div>
	    </div>
	    <footer>
            <div class="button_info">
                <p>运费： 包邮</p>
                <p>合计： {{totalmoney}}</p>
            </div>
            <div class="button" @click="placeanorder">提交订单</div>
        </footer>
    </div>
</template>

<script>
import API from './../api/API.js'
import $ from 'jquery'
const api=new API();
export default {

  name: 'submit_order',

  data () {
    return {
    	booksdata:[],
    	totalmoney:0,
        ipdizhi:"",
        data:""
    }
  },
  mounted(){
    var self=this;
  	var booksdata=this.$sessionStorage.get("books")?this.$sessionStorage.get("books"):[];
  	for(var i=0;i<booksdata.length;i++){
  		this.totalmoney+=Number(booksdata[i].productNum)*Number(booksdata[i].price);
  	}
    $.getJSON("http://chaxun.1616.net/s.php?type=ip&output=json&callback=?&_=" + Math.random(),function(data){
        self.ipdizhi = data.Ip;
        console.log(self.ipdizhi);
    });
    console.log(localStorage.getItem("userId"));
  	this.booksdata=booksdata;
  },
  methods:{
    placeanorder(){
         var self=this;
         var params = {
            "userid": localStorage.getItem("userId"),
            "openid": localStorage.getItem("openid"),
            "ipaddress": self.ipdizhi,
            "orderType": "1",
            "totalMoney": self.totalmoney,
            "products": this.booksdata,
            "inviteCode":  sessionStorage.getItem("invite_code"),
            "receiverName": "张海枝",
            "receiverPhone": "13641377331",
            "receiverProvince": "江西省",
            "receiverCity": "樟树市",
            "receiverDistrict": "测试的哈",
            "receiverAddress": "测试哈哈哈"
        }
        var response=api.placeanorder(params);
            response.then(function(res){
                let  data=res.data;
                let secondlist=data.result.children;
                self.data=secondlist;
                if (self.data.message == "Success") {
                    let  datacon = JSON.parse(self.data.result);
                    if (typeof WeixinJSBridge == "undefined") {
                        if (document.addEventListener) {
                            document.addEventListener('WeixinJSBridgeReady', self.onBridgeReady, false);
                        } else if (document.attachEvent) {
                            document.attachEvent('WeixinJSBridgeReady', self.onBridgeReady);
                            document.attachEvent('onWeixinJSBridgeReady', self.onBridgeReady);
                        }
                    } else {
                        self.onBridgeReady(datacon);
                    }
                } else {
                    tip("下单失败");

                }
            }).catch(function(err){

            });
    },
    onBridgeReady(data) {
        var self=this;
        var oiupafge = 'prepay_id=' + data.prepayid;
        WeixinJSBridge.invoke(
            'getBrandWCPayRequest', {
                "appId": data.appid,
                "timeStamp": data.timestamp,
                "nonceStr": data.noncestr, //随机串
                "package": oiupafge,
                "signType": "MD5",
                "paySign": data.paysign
            },
            function(res) {
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                    //alert("付款成功");
                    for(i=0;i<self.booksdata.length;i++){
                       // if(self.booksdata[i].productId==){

                       // }
                    }
                    self.sessionStorage.remove("books");
                    window.location.href='./bookstore.html?inviteCode='+sessionStorage.getItem("invite_code");
                    // sessionStorage.removeItem("booklist");

                    window.history.go(-1);
                } else {
                    tip("付款失败");
                }
            }
        )
    }
  },
  watch:{
    '$route' (to, from) {
       this.$router.go(0);
    }
  }  
}
</script>

<style lang="css" scoped>
#submit_order {
    background: #f8f8f8;
    margin: 0 auto;
    padding-top: 1.2rem;
}
label{
    position: relative;
    display: inline-block;
    z-index: 1;
    border: 1px solid #b8b8b8;
    margin-left: 10px;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
}
label.mark{
    background: url("./../assets/mark1.png") no-repeat -1px -1px;
}
body{
    max-width:750px;
    background: #f8f8f8;
    margin:0 auto;
    padding-top: 1.2rem;
}
.header{
    width: 100%; 
    height: 1.2rem;
    border-bottom: 1px solid #d8d8d8;
    position: fixed;
    top: 0;
    z-index: 99;
}
.header_add{
    width: 0.8rem;
    height: 0.8rem;
    background: #ff6018;
    border-radius: 8px;
    text-align: center;
    line-height: 0.7rem;
    color: white;
    font-size: 0.8rem;
    font-weight: 10;
    margin-top: 0.2rem;
    margin-left: 0.3rem;
    float: left;
}
.header_name{
    float: left;
    margin-top: 0.2rem;
    margin-left: 0.3rem;
    width: 5.9rem;
    text-align: left;
    font-size: 0.33rem;
}
.header_name p{
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    float: right;
    font-size: 0.33rem;
    background: url(./../assets/back.png) no-repeat right;
    position: absolute;
    top: 50%;
    right: 0.1rem;
    margin-top: -0.17rem;
}
.header_adda{
    width: 0.8rem;
    height: 0.8rem;
    /*background: #ff6018;*/
    /*border-radius: 8px;*/
    /*text-align: center;*/
    /*line-height: 0.7rem;*/
    /*color: white;*/
    /*font-size: 0.8rem;*/
    /*font-weight: 10;*/
    background: url(./../assets/location.png) no-repeat right;
    background-size: 100%;
    margin-top: 0.2rem;
    margin-left: 0.3rem;
    float: left;
}
.header_namea{
    float: left;
    margin-left: 0.3rem;
    width: 5.9rem;
    text-align: left;
    font-size: 0.33rem;
    height: 1.2rem;
}
.header_namea p{
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    float: right;
    font-size: 0.33rem;
    background: url(./../assets/back.png) no-repeat right;
    position: absolute;
    top: 50%;
    right: 0.1rem;
    margin-top: -0.17rem;
}
.location_info{
    width: 3rem;
    display: inline-block;
    height: 1.2rem;
}
.user_num{
    width: 2.3rem;
    display: inline-block;
    height: 1.2rem;
    position: absolute;
    right: 0.7rem;
    line-height: 1.2rem;
    color: #959595;
    text-align: right;
}
.header_namea span {
    display: block;
    width: 3rem;
    height: 0.4rem;
    line-height: 0.8rem;
    font-size: 0.28rem;
}
.header_namea span:last-of-type{
    color: #959595;
}
.book_conten{
    /*margin-top:1.2rem;*/
    width: 100%;
    background: #fff;
}
.book{
    height: 2.4rem;
    width: 100%;
    padding-top: 0.3rem;
    border-bottom: 1px solid #d8d8d8;
}
.book_info{
    width: 7rem;
    margin: 0 auto; 
    height: 2rem;
}
.book img{
    width: 1.5rem;
    display: inline-block;
    float: left;
}
.book_info>p{
    font-size: 0.3rem;
    width: 3.9rem;
    display: inline-block;
    float: left;
    margin-left: 0.3rem; 
}
.book_price{
    width: 1rem;
    height: 100%;
    float:right;
}
.book_price p{
    font-size: 0.3rem;
    text-align: right;
}
.book_price p:last-of-type{
    margin-top: 0.3rem;
    color: #959595;
}
.all_price{
    width: 100%;
    margin-bottom: 1.2rem;
    background: #fff;
    text-align: left;
    /*margin-top: */
}
.all_price_price{
    width: 100%;
    /*text-align: left;*/
    font-size: 0.33rem;
    height: 1.1rem;
    line-height: 1rem;
    position: relative;
    border-bottom: 1px solid #d8d8d8;
    text-indent: 0.5rem;
}
.address-a{
    margin-right: 1rem;
    float: right;
}
.all_price_price p{
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    /*float: right;*/
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -0.25rem;
    font-size: 0.33rem;
    background: url(./../assets/back.png) no-repeat right;
    margin-right: 0.4rem; 

}
.all_price div:first-of-type span{
    float:right;
    margin-right: 1rem; 
    color: #959595;
}
.all_price div:last-of-type span{
    float:right;
    margin-right: 0.5rem; 
    color: red;
}
footer{
    width: 100%; 
    max-width:750px;
    height: 1.2rem;
    border-top: 1px solid #d8d8d8;
    position: fixed;
    bottom: 0;
    background: #fff;
}
.button{
    display: inline-block;
    position: absolute;
    right: 0;
    width: 2.4rem;
    height: 1.2rem;
    background: #ff6018;
    color: #fff;
    font-size: 0.3rem;
    text-align: center;
    line-height: 1.2rem;
}
.button_info{
    position: absolute;
    right: 2.4rem;
    height: 1.2rem;
}
.button_info p{
    font-size: 0.24rem;
    display: block;
    height: 0.6rem;
    line-height: 0.6rem;
    margin-right: 0.3rem;
    color: #959595;
    text-align: right;
}
.address{
    display: none;
    /*position: fixed;*/
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
    width: 100% ;
    height:7.5rem;
    max-width:750px;
    max-height:600px;
    background: #fff;
    border-top: 1px solid #d8d8d8;
    font-size: 0.28rem;
    overflow: hidden;
    z-index: 1000;
}
.haveaddress{
    display: none
}
.noaddress{
    /*display: none*/

}
.address_info{
    width: 90%;
    height: 100%;
    margin: 0 auto;
}
.address_name {
    width: 100%;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    font-size: 0.3rem;
    position: relative;
}
.address_name p{
    display: block;
    position: absolute;
    top: 0.25rem;
    right: 0;
    width: 0.5rem;
    height: 0.5rem;
    background: url(./../assets/close.png) no-repeat right;
    background-size: 100%;
}
/*.address_username{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.28rem;
}*/
.address_active span{
    display: inline-block;
    width: 1.4rem;
}
.address_active{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.28rem;
    border-bottom: 1px solid #d8d8d8;

}
.input_active{
    width: 4.5rem;
    height: .8rem;
    margin-left: 0.5rem;
    border: 0px;
}
.address_button{
    width: 100%;
    border-radius: .08rem;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    background: #ff6018;
    color: #fff;
}
</style>