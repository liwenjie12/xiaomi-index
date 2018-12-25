var shopList=new Vue({
    el:"#shangou",
    data:{
        hour:"10",
        min:"00",
        sec:"20",
        timer:""
    },
    methods:{
       moveTo:function () {

          jQuery("#shangou-list").stop(false,true).animate({left:"-992px",transition:"all 2s",})
       },
        moveBack:function () {
           jQuery("#shangou-list").stop(false,true).animate({left:"0px",transition:"all 2s",})
        },
        secStart:function () {
            sec=parseInt(this.sec);
            min=parseInt(this.min);
            hour=parseInt(this.hour);
            if (sec!==-1)
                sec--;
            if(sec==-1)
            {
                if(min!==0){
                    sec=59;
                    min--;
                }
                else if(hour==0) {
                    alert("时间到");
                    clearInterval(this.timer);
                }
                else{
                    hour--;
                    min=59;
                    sec=59;
                }
            }
            if(sec<=9)
                this.sec="0"+sec;
            else this.sec=""+sec;
            if(min<=9)
                this.min="0"+min;
            else this.min=""+min;
            if(hour<=9)
                this.hour="0"+hour;
            else this.hour=""+hour;
            console.log(Date());
        }
    },
    beforeMount:function(){
        this.timer=setInterval(this.secStart,1000);
    },
    components:{
        sgList:{
            data:function () {
                return {
                    shanList: [
                        {path: "image/shangou/shangou-image-1.png",name:"米家电水壶&nbsp白色",content:"一杯水&nbsp,&nbsp是一家人的安心",newprice:"1元&nbsp",oldprice:"99元",biaoqian:"1元秒杀",style:{backgroundColor:"#e53935"}},
                        {path: "image/shangou/shangou-image-2.jpg",name:"小米手环3腕带&nbsp热力橙",content:"顺滑柔软&nbsp触感舒适",newprice:"1元&nbsp",oldprice:"19.9元",biaoqian:"1元秒杀",style:{backgroundColor:"#e53935"}},
                        {path: "image/shangou/shangou-image-3.jpg",name:"小米米家智能摄像机&nbsp白色",content:"智能侦测&nbsp安全守护",newprice:"1元&nbsp",oldprice:"129元",biaoqian:"1元秒杀",style:{backgroundColor:"#e53935"}},
                        {path: "image/shangou/shangou-image-4.jpg",name:"小米活塞耳机&nbsp清新版&nbsp白色",content:"新鲜绽放",newprice:"1元&nbsp",oldprice:"29元",biaoqian:"1元秒杀",style:{backgroundColor:"#e53935"}},
                        {path: "image/shangou/shangou-image-5.jpg",name:"小米路由器4Q&nbsp蓝色",content:"一键快连智能设备",newprice:"79元&nbsp",oldprice:"99元",biaoqian:"",style:{backgroundColor:"#ffffff"}},
                        {path: "image/shangou/shangou-image-6.jpg",name:"电力猫套装",content:"有插座的地方&nbsp就有WIFI",newprice:"185元&nbsp",oldprice:"249元",biaoqian:"",style:{backgroundColor:"#ffffff"}},
                        {path: "image/shangou/shangou-image-7.jpg",name:"90分轻薄无缝一体织鹅绒羽绒服&nbsp黑色",content:"轻薄无缝一体织&nbsp,&nbsp仅限黑色 ",newprice:"255元&nbsp",oldprice:"299元",biaoqian:"",style:{backgroundColor:"#ffffff"}},
                        {path: "image/shangou/shangou-image-8.jpg",name:"90分轻薄无缝一体织鹅绒羽绒服&nbsp蓝色",content:"轻薄无缝一体织&nbsp,&nbsp仅限蓝色 ",newprice:"255元&nbsp",oldprice:"299元",biaoqian:"",style:{backgroundColor:"#ffffff"}}
                    ],
                }
            },
            template:"<div class='shangou-box' v-cloak><ul id='shangou-list'><li v-for='item in shanList'><img :src='item.path' /><p v-html='item.name' class='shangou-name'></p><p v-html='item.content' class='shangou-content'></p><p class='shangou-price'><span v-html='item.newprice'></span><span v-html='item.oldprice'></span></p><p class='shangou-biaoqian' :style='item.style' v-html='item.biaoqian'></p></li><div class='clear'></div></ul></div>"
        }
    }
})