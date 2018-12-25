var topBar=new Vue({
    el:"#top-bar",
    data:{
       navList:[
            {name:"小米商城",link:"https://www.mi.com/index.html"},
            {name:"MIUI",link:"https://www.miui.com/"},
            {name:"ioT",link:"https://iot.mi.com/index.html"}
            ],
        msgList:[
            {name:"登录"},
            {name:"注册"},
            {name:"消息通知"}
        ],
        shopList:[
            {content:"购物车",link:"https://static.mi.com/cart/"}
        ]
    },
    components:{
        topList:{
            props:["list"],
            template:
                "<div class='top-bar-nav'>" +
                    "<span v-for='item in list'>" +
                    " <a :href='item.link' target='_blank'>{{item.name}}</a>" +
                        "<span class='seq'>|</span>" +
                    "</span>" +
                "</div>"
        },
        topMsg:{
            props:["msg"],
            template:
                "<div class='top-bar-msg'>" +
                    "<span v-for='item in msg'>" +
                        "<a :href='item.link' target='_blank'>{{item.name}}</a>" +
                            "<span class='sem'>|</span>" +
                    "</span>" +
                "</div>"
        },
        topShop:{
            data:function(){
                return {
                    flag:false
                }
            },
            props:["shop"],
            template:
                "<div class='top-bar-shop' @mouseover='flag=true' @mouseout='flag=false;console.log(flag)'>" +
                    "<a v-for='item in shop' :href='item.link'>" +
                        "<span><i class=\"iconfont icon-caigou-xianxing\"></i></span>{{item.content}}<span>(0)</span>" +
                            "<div class='carList' v-show='flag'></div>" +
                    "</a>" +
                "</div>"
        }
    },
    mounted:function () {
        var line=document.getElementsByClassName("seq");
        line[line.length-1].style.display="none";
    }
});