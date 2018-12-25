$.noConflict();
var imgShow=new Vue({
    el:".img-show",
    data: {
        id:0,
        flag:0,
        imgList: [
            {id: 1, path: "image/img-show-1.jpg",index:"z-index:5"},
            {id: 2, path: "image/img-show-2.jpg",index:"z-index:4"},
            {id: 3, path: "image/img-show-3.jpg",index:"z-index:3"},
            {id: 4, path: "image/img-show-4.jpg",index:"z-index:2"},
            {id: 5, path: "image/img-show-5.jpg",index:"z-index:1"}
        ],
        timer:"",
    },
    methods:{
        autoPlay:function () {
            jQuery(".shopimg").eq(this.id+1).stop(false,true).fadeIn(1000).siblings("img.shopimg").stop(false,true).fadeOut(1000);
            this.id++;
            if(this.id===jQuery(".shopimg").length-1){
                this.id=-6;
            }
            console.log(this.id);
        },
        stopPlay:function () {
            clearInterval(this.timer);
        },
        continuePlay:function () {
            this.timer=setInterval(this.autoPlay,3000);
        },
        backPlay:function () {
            jQuery(".shopimg").eq(this.id-1).stop(false,true).fadeIn(1000).siblings("img.shopimg").stop(false,true).fadeOut(1000);
            this.id--;
            if(this.id===-jQuery(".shopimg").length)
                this.id=jQuery(".shopimg").length;
            console.log(this.id);
        },
        },
    beforeMount:function(){
      this.timer=setInterval(this.autoPlay,3000);
    },
    components:{
        categoryList:{
            data:function(){
                return {
                    cateList:[
                        {id:1,cateOne:"手机",cateTwo:"电话卡",icon:">",link:"javascript:"},
                        {id:2,cateOne:"电视",cateTwo:"盒子",icon:">",link:"javascript:"},
                        {id:2,cateOne:"笔记本",cateTwo:"平板",icon:">",link:"javascript:"},
                        {id:2,cateOne:"家电",cateTwo:"插线板",icon:">",link:"javascript:"},
                        {id:2,cateOne:"出行",cateTwo:"穿戴",icon:">",link:"javascript:"},
                        {id:2,cateOne:"智能",cateTwo:"路由器",icon:">",link:"javascript:"},
                        {id:2,cateOne:"电源",cateTwo:"配件",icon:">",link:"javascript:"},
                        {id:2,cateOne:"健康",cateTwo:"儿童",icon:">",link:"javascript:"},
                        {id:2,cateOne:"耳机",cateTwo:"音响",icon:">",link:"javascript:"},
                        {id:2,cateOne:"生活",cateTwo:"箱包",icon:">",link:"javascript:"},
                    ]
                }
            },
            template:"<div class='category'><ul class='category-box'><li class='category-list' v-for='item in cateList' :key='item.id'><a :href='item.link'><span>{{item.cateOne}}</span><span class='cateTwo'>{{item.cateTwo}}</span><span class='icon'><i class=\"iconfont icon-erji\"></i></span><div></div></a></li></ul></div>",
        },
        leftBtn:{
            template:"<a href='javascript:' class='left-btn' @click=''><i class=\"iconfont icon-fanhui\"></i></a>"
        },
        rightBtn:{
            template:"<a href='javascript:' class='right-btn'><i class=\"iconfont icon-gengduo\"></i></a>"
        }
    }
});