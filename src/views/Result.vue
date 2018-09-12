<template>
  <div id="result">
    <div id="resContainer">
      <div class='res-top'>
      <img :src="imgUrl" class="headImg">
      <p class="headtitle">
        如果不移民，
        <span>{{userName}}</span>
        的将来会是：
      </p>
      </div>
      <div :style="{backgroundImage: backgroundImg }" class="contentbac">
        <p class="contentfont">{{resContent}}</p>
      </div>
      <p class="headtitles">{{msg}}</p>
      <div class="bottom">
        <img :src="imgdate" alt="">      
        <p>扫描二维码</p>
        <p>测一下你的未来</p>
      </div>
    </div>  

    <div class="mask">
      <p>正在生成结果。。。</p>
    </div>

    <img class="resImg" id="resImg" crossOrigin="crossOrigin" v-if="!isShowDiv" :src="canvasUrl">  
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import html2canvas from "html2canvas";
import { createQrCodeImg } from "@/utils/wxqrcode.js";
import { stringify } from "qs";
import qs from "qs";
interface resultItem {
  score: number;
  conts: string;
}

const QrCodeImg = require("@/utils/wxqrcode.js");
@Component({})
export default class Result extends Vue {
  private isShowDiv: Boolean = true;
  private canvasUrl: string = "";
  private imgUrl: string = "";
  private imgdate: any = "";
  private resultId: number = 0;
  private userName: string = "画画";
  private msg: string = "套路是我学的，但希望你过的好是认真的，希望你未来的每一天都活成幸福的样子。";
  private backgroundImg: string = "url(" +
    require("../assets/firstpage/resultbac.png") +
    ") ";
  private resContent: string = "";
  private resultList: Array<resultItem> = [
    {
      score: 5,
      conts: "回国发展，大好前程，创业风头，等着你呢。留澳洲干嘛"
    },
    {
      score: 6,
      conts: "一段奋不顾身的轰轰烈烈的爱情突然出现，令你猝不及防"
    },
    {
      score: 7,
      conts: "参加高考，金榜题名，清华北大，为科研奋斗终身"
    },
    {
      score: 8,
      conts: "参加101女团c位出道"
    },
    {
      score: 9,
      conts: "参加中国好声音，被导师选中，星光灿烂"
    },
    {
      score: 10,
      conts: "苦心作画，和毕加索比肩"
    },
    {
      score: 11,
      conts: "钢琴大师，勤奋的你不断在国际讲台上获奖"
    },
    {
      score: 12,
      conts: "起来去搬砖了，兄弟"
    },
    {
      score: 13,
      conts: "凭借对服装的独特审美，一跃巴黎时装周风云人物"
    },
    {
      score: 14,
      conts: "凭借风趣幽默的 主持方式以及高超的游戏技巧，成为千万级别的知名主播"
    },
    {
      score: 15,
      conts: "你忘了你家里有矿了嘛，你的未来从出生就已经知道了~~"
    }
  ];

  created() {
    this.resContent = decodeURIComponent(this.$route.query.content);
    this.$emit("userShareResult", window.location.href);
    let url = window.location.href.split("#")[0];
    let queryStringUrl = url.slice(url.indexOf("?") + 1);
    var urlParamsObj = qs.parse(queryStringUrl, { ignoreQueryPrefix: true });
    let userId = urlParamsObj.id;
    // let shareLink = url + "&fromresult=" + userId;
    var shareLink = 'https://stg-pteppp.leanapp.cn/h5/migrationQuiz/index.html?fromresult='+ userId
    this.imgdate = QrCodeImg.createQrCodeImg(shareLink, { size: 90 });
    this.userName = urlParamsObj.name;
    this.imgUrl = urlParamsObj.headimgurl;
  }

  mounted() {
    let content_html: any = document.getElementById("resContainer"); //要转化的div
    let width = content_html.offsetWidth;
    let height = content_html.offsetHeight;
    let offsetTop = content_html.offsetTop;
    let canvas = document.createElement("canvas");
    let context: any = canvas.getContext("2d");
    let scaleBy = Math.ceil(window.devicePixelRatio);
    canvas.width = width*scaleBy;
    canvas.height = (height+offsetTop)*scaleBy;
    context.scale(scaleBy, scaleBy);
    var opts = {
      allowTaint: true, //允许加载跨域的图片
      useCORS: true, // 【重要】开启跨域配置
      scale: scaleBy, // 添加的scale 参数
      canvas: canvas, //自定义 canvas
      logging: false, //日志开关，发布的时候记得改成false
      width: width, //dom 原始宽度
      height: height //dom 原始高度
    };
    html2canvas(content_html, opts).then((canvas: any) => {
      var context = canvas.getContext("2d");
      // 【重要】关闭抗锯齿
      context.mozImageSmoothingEnabled = false;
      context.webkitImageSmoothingEnabled = false;
      context.msImageSmoothingEnabled = false;
      context.imageSmoothingEnabled = false;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      this.canvasUrl = canvas.toDataURL(); 
    
         
      this.$nextTick(() => {
        this.isShowDiv = false;
      })
    })
    .catch((err:any) => {
      console.log(err);
      
    })
  }
}
</script>

<style lang='less'>
#result {
  width: 100vw;
  height: 100vh;
  background-color: #ffd700;
  position: relative;
  .resImg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 4;
  }
}
#resContainer,.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffd700;
  top:0;
  left: 0;
}

.mask {
  z-index: 2;
}

.res-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .headImg {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border: 4px solid #383737;
    margin-top: 10px;
  }
  .headtitle {
    margin: 0;
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 8px;
    span {
      font-size: 40px;
    }
  }
}

.contentbac {
  width: 100vw;
  height: 42vw;
  background-size: 100vw;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .contentfont {
    width: 70vw;
    font-size: 24px;
  }
}

.headtitles {
  margin: 10px auto;
  padding: 0 20px;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
}
.bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    padding: 0;
    margin: 0;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
  }
}
</style>
