<template>
	<div id="bookdetails">
		<vheader>阳光易教-高分宝典</vheader>
		<div class="content">
	        <div class="topbook">
	            <div class="main_visual">
					<kswiper :imgdata="imgdata"></kswiper>
	            </div>
	        </div>
	        <div class="bookintroduce">
	             <div class="booktitle clearfix">
	                 <p class="p1">易教阳光 高分宝典 高考语文 高效复习 快速提分 AI智能教辅 主编王大绩许建琦</p>
	                 <p class="p2 ">￥{{price}}</p>
	                 <p class="p3">快递费：10元</p>
	             </div>
	            <div class="enterstore clearfix">
	                <div class="t clearfix"><p class="fl"><span></span>易教阳光</p> <p class="s fr"><router-link to="/home">进入店铺</router-link><i class="fr"></i></p></div>
	                <div class="b clearfix"><p class="fl"><span></span>企业认证</p><p class="fl"><span></span>担保交易</p></spam></div>
	            </div>
	        </div>
	        <div class="bookdetail">
	            <h3>商品详情</h3>
	            <div class="img1" v-show="img1"><img src="./../assets/chdetail.jpg" alt=""></div>
	            <div class="img2" v-show="img2"><img src="./../assets/mathdetail.jpg" alt=""></div>
	            <div class="img3" v-show="img3"><img src="./../assets/englishdetail.jpg" alt=""></div>
	            <div class="more">
	                <h3>更多精选商品</h3>
	                <booklist></booklist>
	            </div>
	        </div>
	    </div>
	    <gobuy></gobuy>
	    <mt-popup position="bottom"  v-model="showgobuy">
	    	<div class="my_model now">
		        <div class="title">
		            <div class="list_img"><a href="javascript:;"><img :src="gobuyimg" alt=""></a></div>
		            <div class="list_text">
		                <p class="txt">{{productName}}</p>
		                <p class="price">￥{{price}}</p>
		            </div>
		            <span class="closeModel" @click="closemodel"></span>
		        </div>
		        <div class="list_amount clearfix">
		            <p class="fl">购买数量:</p>
		            <div class="amount_box fr clearfix">
		                <a href="javascript:;" class="reduce" :class="reSty" @click="reduce">-</a>
		                <input type="text" v-model="num" class="sum">
		                <a href="javascript:;" class="plus" @click="plus">+</a>
		            </div>
		        </div>
		        <div class="opBtn">
		            <router-link  :to="hurl" class="dialog-sure" @click.native="setdata">确定</router-link>
		        </div>
		    </div>
		</mt-popup>
	</div>

</template>
<script>
	import vheader from './../components/header';
	import kswiper from './../components/swiper';
	import booklist from './../components/booklist';
	import gobuy from './../components/gobuy';
	export default{
		data(){
			return {
				imgdata:[],
				img1:false,
				img2:false,
				img3:false,
				showgobuy:false,
				gobuyimg:"",
				num:0,
				reSty:"reSty",
				productName:"",
                price:0,
                hurl:"/submit_order",
			}
		},
		components:{
			vheader,kswiper,booklist,gobuy
		},
		mounted(){
            if(this.num==0){
                this.hurl=this.$route.path;
            }

			this.showbook();
		},
		methods:{
			showbook(){

				if(this.$route.params.id==1){
					this.imgdata=['./static/gaokaocn.png','./static/chcover-01.png'];
					this.img1=true;
					this.gobuyimg="./static/gaokaocn.png";
					this.productName="高分宝典语文";
                    this.productId="00eee17f-bba0-11e7-89c1-00163e0a192d";
                    this.price=86.7;
				}else if(this.$route.params.id==2){
					this.imgdata=['./static/gaokaomath.png','./static/macover-02.png'];
					this.img2=true;
					this.gobuyimg="./static/gaokaomath.png";
					this.productName="高分宝典数学";
                    this.productId="00fa2f94-bba0-11e7-89c1-00163e0a192d";
                    this.price=78.7;
				}else if(this.$route.params.id==3){
					this.imgdata=['./static/gaokaoenglish.png','./static/engcover-03.png'];
					this.gobuyimg="./static/gaokaoenglish.png";
					this.img3=true;
					this.productName="高分宝典英语";
                    this.price=88.7;
                    this.productId="00fc3b76-bba0-11e7-89c1-00163e0a192d";
				}
			},
			closemodel(){
				this.showgobuy=false;
			},
			plus(){
				this.num+=1;
			},
			reduce(){
				this.num-=1;
			},
			setdata(){
				var books=[];
				// if(this.$sessionStorage.get("books")){
				// 	books=this.$sessionStorage.get("books");
				// }
				var book={};
					book.img=this.gobuyimg;
					book.productNum=this.num;
					book.productName=this.productName;
                    book.price=this.price;
                    book.productId=this.productId;
					books.push(book);
				this.$sessionStorage.set("books",JSON.stringify(books));
			}
		},
		watch:{
			'$route' (to, from) {
			   this.showbook();
			   this.$router.go(0);
			},
			num:function(){
				if(this.num>=1){
					this.reSty="";
				}else{
					this.reSty="reSty";
				}
			}
		}

	}
</script>
<style scoped>
.book1,.book2,.book3{
    display: none;
}
.t a{
	color:#000;
}
.more .list{
	padding-top: 0px;
}
.main_visual{
	width:100%;
}
p{
	text-align: left;
}
div{
    margin: 0 auto;
}
.bookdetail{
	padding:0px 0.2rem;
}
.content{
    width: 100%;
    padding-top:0.9rem;
    background: #fff;
    padding-bottom: 1rem;
}
.topbook{
    border-bottom: 1px solid #dddddd;
    /*height: 9rem;*/

}
.topbook .img{
    width:95%;
    height: 8rem;
    background-image: url("./../assets/chinesexie.png");
    background-size: 100% 100%;
    background-color: #ffffff;
}
.booktitle{
    margin: .1rem .2rem;
}
.booktitle .p2{
    color: #ff0000;
    margin-right: 12px;
    margin: .1rem 0;
}
.booktitle .p3{
     color: #959595
}
.enterstore{
    background-color:#f8f8f8 ;
    padding:0 11px;
    margin: .2rem 0;
}
.enterstore .t{
    height: .7rem;
    line-height: .7rem;
    border-bottom: 1px solid #d8d8d8;
}
.enterstore .b{
    height: .7rem;
    line-height: .7rem;
}
.enterstore .t span{
    display: inline-block;
    background-image: url("./../assets/booktip.png");
    background-size: 100% 100%;
    width: 0.3rem;
    height: 0.3rem;
    margin-right: .06rem;
}
.enterstore .b span{
    display: inline-block;
    background-image: url("./../assets/duihao.png");
    background-size: 100% 100%;
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 3px;
}
.enterstore .b p{
    margin-left: 7px;
    margin-right: 10px;
}
.enterstore .t .s{
    margin-right: 20px;
}
.enterstore i{
    float: right;
    display: inline-block;
    width: 12px;
    height: 12px;
    /*position: absolute;*/
    margin-top: .35rem;
    border-left: 2px solid #a2a2a2;
    border-bottom: 2px solid #a2a2a2;
    -webkit-transform: translate(0,-50%) rotate(-135deg);
    transform: translate(0,-50%) rotate(-135deg);
}
.enterstore .t .fr{

}
.bookdetail .img1 img{
    width:100%;
    background-color: #ffffff;
}
.bookdetail .img2 img{
    width:100%;
    background-color: #ffffff;
}
.bookdetail .img3 img{
    width:100%;
    background-color: #ffffff;
}
.bookdetail h3{
    margin-bottom: .3rem;
}
.bookdetail .more{
    margin-top: .3rem;
    width:100%;
    /*height: 10.3rem;*/
    margin: 0  auto;
}
.more h3{
    /*margin: 0  auto;*/
    text-align: center;
}
.footer{
    height: 1rem;
    width: 100%;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    bottom: 0;
    background-color: #ffffff;
}
.footer .shopcar{
    /*margin-top: .3rem;*/
    /*width:100%;*/
    /*height: 10.3rem;*/
    width:22%;
    background-color: #ffffff;
    padding-top: 8px;
}
.footer .shopcar span{
    display: inline-block;
    background-image: url("./../assets/shopcar.png");
    background-size: 100% 100%;
    width: 44px;
    height: 34px;
}
.footer .joincar{
    width: 40%;
    background-color: #ff9403;
    color: #ffffff;
}
.footer .buy{
    width: 38%;
    background-color: #ff6018;
    color: #ffffff;
}

/*自己定义的模态框*/
.model_bg{
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.6);
    z-index: 999;
    display: none;
    height: 103rem;
}
.my_model{
    width: 100%;
    height: 4.3rem;
    border: 1px solid #aeaeae;
    border-radius: 3px;
    /*padding: 0 .1rem;*/
    background: #fff;
    text-align: center;
}
.my_model .title{
    color: #3c3c3c;
    height: 1.6rem;
    border-bottom:1px solid #e3e3e3;
}
.mint-popup{
	width:100%;
}
.my_model .title .closeModel{
    display: inline-block;
    float: right;
    cursor: pointer;
    margin-top: .3rem;
    margin-right: .5rem;
    width: .5rem;
    height: .5rem;
    background-image: url("./../assets/close.png");
    background-size: 100% 100%;
    /* font-size: .4rem; */
    line-height: .4rem;
    text-align: center;
    color: gray;
}
.my_model p{
    line-height:0.4rem;
}
.my_model .opBtn{
    margin-bottom: .3rem;
    margin: 0 auto;
    width: 80%;
}
.my_model .opBtn a{
    width: 6rem;
    height: .7rem;
    line-height: .7rem;
    text-align: center;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    -ms-border-radius: 1px;
    border-radius: 6px;
    display: inline-block;
}
.my_model .dialog-sure{
    background: #ff6018;
    color: #fff;
    border: 1px solid #ff6018;
}

.my_model .dialog-close{
    background: #fff;
    border: 1px solid #d9d9d9;
    color: #3c3c3c;
}


 .list_img{
     width: .8rem;
     height: 1rem;
     /*vertical-align: top;*/
     margin-top: 20px;
      float: left;
}
.list_img img{
    width: 100%;
    vertical-align: top;
}
.list_text{
    margin: 0.1rem 0 0 0.1rem;
    line-height: 18px;
    width: 3rem;
    float: left;
}
.list_text p{
    color: #3c3c3c;
}
.list_text p.txt{
    margin-bottom: .2rem;
}

.list_text p.price{
    font-size: .3rem;
    color: red;
    text-align: left;
    margin-left: .18rem;
}


/*数量*/
 .list_amount{
    display: inline-block;
    width: 100%;
     height: 1rem;
}
.list_amount p{
    line-height: 1rem;
    margin-left: .2rem;
}
.list_amount .amount_box{
    margin-top: 10px;
    position: relative;
    margin-right: .3rem;
    line-height: 1rem;
    width:1.5rem;
}
 .list_amount .amount_box input{
    width: 0.47rem;
    height: 0.28rem;
    line-height: 15px;
    border: 1px solid #aaa;
    color: #343434;
    text-align: center;
    padding: 4px 0;
    background-color: #fff;
    z-index: 2;
    position: absolute;
    left: 0.5rem;
    float: left;
    font-size: 0.3rem;
}
 .list_amount .amount_box a{
    float: left;
    height: 0.4rem;
    width: 0.5rem;
    border: 1px solid #e5e5e5;
    background: #f0f0f0;
    text-align: center;
    line-height: 0.4rem;
    color: #444;
    position: absolute;
    top:0;
}
 .list_amount .amount_box a:hover{
    border-color: #ff873e;
    text-decoration: none;
    color: #ff873e;
    z-index: 3;
}

.list_amount .amount_box .reduce{
    left: 0;
}

 .list_amount .amount_box .reSty{
    color: #cbcbcb;
}
 .list_amount .amount_box .reSty:hover{
    border-right: none;
    border-color: #e5e5e5;
    text-decoration: none;
    color: #cbcbcb;
}

.list_amount .amount_box .plus{
    border-left-color: transparent;
    right: 0;
}



</style>