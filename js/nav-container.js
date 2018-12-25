var nav=new Vue({
    el:".nav-container",
    components:{
        navList:{
            data:function(){
                return {
                    list:[
                        {name:"小米手机",link:"javascript:"},
                        {name:"红米",link:"javascript:"},
                        {name:"电视",link:"javascript:"},
                        {name:"笔记本",link:"javascript:"},
                        {name:"家电",link:"javascript:"},
                        {name:"新品",link:"javascript:"},
                        {name:"路由器",link:"javascript:"},
                        {name:"智能硬件",link:"javascript:"},
                        {name:"服务",link:"https://www.mi.com/service/"},
                        {name:"社区",link:"http://www.xiaomi.cn/"}
                    ]
                }
            },
            template:"<div><a v-for='item in list':href='item.link' class='nav-list' target='_blank'>{{item.name}}</a></div>"
        },
        searchButton:{
            template:"<div class='nav-bar-search'><input type='text' id='content'/><label for='serch' id='search-icon'><input type=\"button\" id=\"search\" /><i class=\"iconfont icon-sousuo\"></i></label></div>",
        }
    }
});