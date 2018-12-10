<template>
  <!--搜索框加轮播-->
  <div>
    <div class="seek clearfix">
      <input type="text">
      <!--<div class="seek_div">-->
        <!--&lt;!&ndash;<ul v-for="(lists,index) in list" :key="index">&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<li>{{lists.title}}</li>&ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;</ul>&ndash;&gt;-->
      <!--</div>-->
      <button>搜索</button>
    </div>
    <van-swipe :autoplay="3000" class="title_swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!--分类-->
    <div class="class">
      <ul>
        <li v-for="(class_imgs,index) in class_img" :key="index">
          <img :src=class_imgs.url alt="">
          <p>{{class_imgs.name}}</p>
        </li>
      </ul>
    </div>

    <div class="title">
      <h2 @click="news">新闻资讯</h2>
      <a href="/hzal/">查看更多&gt;</a>
    </div>
    <!--新闻咨询-->
    <div class="news clearfix" v-for="(list,index) in list_news" :key="index">
      <div class="news_left">
        <img :src=list.img_url>
      </div>
      <div class="news_right">
        <h2>{{list.title}}</h2>
        <p>{{list.text}}</p>
        <div class="clearfix">
          <p class="left"><img src="static/class/shijian.png">{{list.data}}</p>
          <p class="right">{{list.admin}}</p>
        </div>
      </div>
    </div>
    <div class="title">
      <h2 @click="">网红项目</h2>
      <a href="/hzal/">查看更多&gt;</a>
    </div>
    <!--网红项目-->
    <div class="wanghong clearfix">
      <ul v-for="(lists,index) in wanghong" :key="index">
        <li>
          <img :src=lists.img_url alt="老妈搪瓷烫饭">
          <h2>{{lists.title}}</h2>
          <h3>{{lists.text}}</h3>
        </li>
      </ul>
    </div>
    <div class="title">
      <h2 @click="">企业风采</h2>
      <a href="/hzal/">查看更多&gt;</a>
    </div>
    <van-swipe :autoplay="3000" class="group_view">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="title ">
      <h2 @click="">申请合作</h2>
    </div>
    <footers></footers>
  </div>
</template>
<script>
  import request from '@/utils/request'
  import footers from '@/components/component/footers'
  export default {
    name:'index',
    components:{
      'footers':footers
    },
    data() {
      return {
        list:
          [
            {
              "img" : "Upload\/image\/1544258319.png",
              "content" : "百年传承，古传配方，专利技术，无人拷贝。大品牌原料，统一采购渠道，统一流程，保证质量，安全放心。 ....",
              "id" : 25,
              "time" : "2018-12-08 16:38:39",
              "title" : "酱香排骨",
              "read" : "5681",
              "text" : "<p>的撒大大<\/p>",
              "image" : "20181208\/79710a78bb1887126a0ea08e05a9f7a7.jpg",
              "pid" : "中式快餐"
            },
            {
              "img" : "Upload\/image\/1544258421.png",
              "content" : "严格把关，自然好品质，让创业直击你心扉......",
              "id" : 29,
              "time" : "2018-12-08 16:40:21",
              "title" : "酱天下米粉",
              "read" : "2988",
              "text" : "<p>刚发的广泛地<\/p>",
              "image" : "20181208\/84164f574ab13839ac044bc2ea7c67e6.jpg",
              "pid" : "中式快餐"
            },
            {
              "img" : "Upload\/image\/1544258421.png",
              "content" : "严格把关，自然好品质，让创业直击你心扉......",
              "id" : 29,
              "time" : "2018-12-08 16:40:21",
              "title" : "酱天下米粉",
              "read" : "2988",
              "text" : "<p>刚发的广泛地<\/p>",
              "image" : "20181208\/84164f574ab13839ac044bc2ea7c67e6.jpg",
              "pid" : "中式快餐"
            }
        ],
        images: [
          '../static/carousel/1542961037.png',
          '../static/carousel/1542961137.png',
          '../static/carousel/1542961037.png',
          '../static/carousel/1542961137.png'
        ],
        class_img:[
          {
            url:"../static/class/jianjie.png",
            name:"企业简介"
          },
          {
            url:"../static/class/hezuo.png",
            name:"合作项目"
          },
          {
            url:"../static/class/gushi.png",
            name:"创业故事"
          },
          {
            url:"../static/class/yaowen.png",
            name:"行业要闻"
          },
          {
            url:"../static/class/zixun.png",
            name:"新闻咨询"
          },
          {
            url:"../static/class/hezuo.png",
            name:"合作优势"
          },
          {
            url:"../static/class/liucheng.png",
            name:"合作流程"
          },
          {
            url:"../static/class/lianxi.png",
            name:"联系我们"
          }
        ],
        list_news:[
          {
            img_url:"http://cbb.cbbcy888.com//Upload/image1542962973.png",
            title:"王晓飒：张一绝集团副主席",
            text:"张一绝集团副主席，张一绝集团合伙人副主席、张一绝旗下吃饱宝公司总经理张一绝集团副主席，张一绝集团合伙人副主席、张一绝旗下吃饱宝公司总经理张一绝集团副主席，张一绝集团合伙人副主席、张一绝旗下吃饱宝公司总经理",
            admin:"编辑：admin",
            data:"2018-09-08"
          },
          {
            img_url:"http://cbb.cbbcy888.com//Upload/image1542962973.png",
            title:"王晓飒：张一绝集团副主席",
            text:"张一绝集团副主席，张一绝集团合伙人副主席、张一绝旗下吃饱宝公司总经理",
            admin:"编辑：admin",
            data:"2018-09-08"
          }
        ],
        wanghong:[
          {
            img_url:"http://www.jscclt.com/d/file/lmtctf/info/2018-11-28/efcf5fe0bf8f45a5d42aa9ede4654db4.jpg",
            title:"老妈搪瓷烫饭",
            text:"走进老妈烫饭，就如同走进了50年代，那个物质匮乏，却饱含劳动精神的年代，辛苦劳作后一口质朴的“烫饭”就是人间美味。我们还原那个年代，同时也把“烫饭”的美味食感带给现代人。"
          },
          {
            img_url:"http://www.jscclt.com/d/file/zmgnxhx/info/2018-07-23/45fb2d0bfa6716ef3eb81cee7b878ff5.jpg",
            title:"醉美姑娘小海鲜",
            text:"走进老妈烫饭，就如同走进了50年代，那个物质匮乏，却饱含劳动精神的年代，辛苦劳作后一口质朴的“烫饭”就是人间美味。我们还原那个年代，同时也把“烫饭”的美味食感带给现代人。"
          },
          {
            img_url:"http://www.jscclt.com/d/file/szsj/info/2018-03-26/ae09ffddd06fcb7421ca3b5313fb562f.jpg",
            title:"薯战薯决",
            text:"走进老妈烫饭，就如同走进了50年代，那个物质匮乏，却饱含劳动精神的年代，辛苦劳作后一口质朴的“烫饭”就是人间美味。我们还原那个年代，同时也把“烫饭”的美味食感带给现代人。"
          },
          {
            img_url:"http://www.jscclt.com/d/file/grd/info/2018-10-23/5956782a8fe70fc8afe742c5903bc730.jpg",
            title:"果燃掂",
            text:"走进老妈烫饭，就如同走进了50年代，那个物质匮乏，却饱含劳动精神的年代，辛苦劳作后一口质朴的“烫饭”就是人间美味。我们还原那个年代，同时也把“烫饭”的美味食感带给现代人。"
          }
        ]
      }
    },
    methods:{
      news(){
        request({
          method:'get',
          url:'/get/tags'
        }).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .title_swipe{
    box-shadow:8px 4px 20px #9A9A9A;
    margin-top: 3px;
    width: 100%;
    img{
      width: 100%;
    }
  }
  .seek{
    position: relative;
    width: 99%;
    margin: auto;
    .seek_div{
      background: #fff;
      position: absolute;
      left: 0px;
      top: 1rem;
      width: 74%;
      border: 1px solid #ccc;
      float: left;
      z-index: 999;
      li{
        font-size: 0.5rem
      }
    }
    input{
      padding: 0;
      margin: 0;
      width: 74%;
      border: 2px solid #e60012;
      border-right: none;
      height: 1rem;
      line-height: 0.5rem;
      text-indent: 10px;
      float: left;
      font-size: 0.5rem;
      border-radius: 0;
    }
    button{
      width: 26%;
      background: #e60012;
      color: #fdd000;
      border: none;
      float: left;
      height:1rem;
      line-height: 1rem;
      font-size: 0.5rem;
      left: 6px;
    }
  }
  .class{
    ul{
      overflow: hidden;
      clear: both;
      margin-top: 10px;
      li{
        width: 25%;
        float: left;
        text-align: center;
        margin-bottom: 15px;
        img{
          width: 80%;
        }
        p{
          color: #231815;
          font-size: 0.4rem;
          line-height: 20px;
          margin-top: 2px;
        }
      }
    }
  }
  .title{
    margin: 0.1rem 6px;
    clear: both;
    border-bottom: 2px solid #e60012;
    padding-bottom: 6px;
    line-height: 22px;
    a{
      display: inline-block;
      float: right;
      color: #666;
      font-size: 0.1rem;
    }
    h2{
      border-left: 3px solid #e60012;
      font-size: 0.4rem;
      display: inline-block;
      padding-left: 10px;
      font-weight: bold;
    }
  }
  .news{
    padding: 0 1%;
    div{
      display: inline-block;
      float: left;
    }
    .news_left{
      width: 40%;
      height: 2.5rem;
      img{
        width: 100%;
      }
    }
    .news_right{
      width: 59%;
      padding:0 5px;
      h2{
        font-size: 0.35rem;
        font-weight: bold;
        color: #333;
        text-overflow:ellipsis;
        line-clamp: 4;
        overflow: hidden;
        margin: 0 auto;
      }
      p{
        font-size: 0.3rem;
        margin-top: 2px;
        color: #999;
        /*overflow: hidden;*/
        /*white-space: nowrap;*/
        /*text-overflow: ellipsis;*/
        text-overflow:ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      div{
        width: 100%;
        margin-top: 0px;
      }
      .left{
        float: left;
        width: 50%;
        img{
          width: 10%;
        }
      }
      .right{
        float: right;
        margin-right: 10px;
      }
    }
  }
  .wanghong{
    margin-bottom: 0.4rem;
    li{
      width: 50%;
      display: inline-block;
      float: left;
      margin-top: 0.2rem;
      img{
        width: 100%;
        padding: 5px;
      }
      h2{
        padding: 0 0.1rem;
        font-weight: bold;
        font-size: 0.35rem;
        color: #e60012;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      h3{
        padding: 5px;
        padding: 0 0.1rem;
        font-size: 0.3rem;
        margin-top: 2px;
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .group_view{
    margin: 5px 0 10px 0;
    width: 100%;
    img{
      width: 100%;
    }
  }
</style>
