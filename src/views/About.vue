<template>
  <div class="firstPage">
    <img src="../assets/firstpage/bc.jpg" alt="" class="firstPage_background">
    <div class='firstPage_top'>
      <img src="../assets/firstpage/TV.png" alt="" class="firstPage_tv">
      <img src="../assets/firstpage/btnlTV.png" alt="" class="firstPage_btnLtv " v-if="istvanimate">
      <img src="../assets/firstpage/btnTV.png" alt="" class="firstPage_btntv btntvanimate" v-if="!istvanimate">
      <img src="../assets/firstpage/xhua.jpg" alt="" class="firstPage_backgtv" :class="{'tvanimate': istvanimate  }" v-show='xuhuaImg'>
      <img :src="oplists[indexId].imgurl" alt="" class="firstPage_backgtv" :class="{'tvanimate2': istvanimate  }" v-show='!xuhuaImg'>
    </div>
    <div class='firstPage_font' v-if="!flag">
      <input type="text" class="inputname" v-model="inputValue" placeholder="请输入你的姓名">
      <img src="../assets/firstpage/startbtn.png" alt="" class="firstPage_title " @click="tvClick">
    </div>
    <ul class='optionList' v-if="flag">
      <li v-for="(item,index) in oplists[indexId].question" :key="index" class="itemstyle" @click="selectClick(oplists[indexId].question[index])">
        <span :style="{backgroundImage: backgroundImg }" v-if="index != selectedId" class=" ">{{item.icon}}</span>
        <span :style="{backgroundImage: activebackgroundImg }" class="itemstyle_activeFont shake-opacity shake-constant" v-if="index === selectedId">{{item.icon}}</span>
        <p class='itemstyle_optitle' :class="{'itemstyle_active': index === selectedId}">{{item.optitle}}</p>
      </li>
    </ul>
    <div class="bottomBtn">
      <img src="../assets/firstpage/switchBtn.png" alt="" class="bottomBtn_switchBtn" v-show='!xuhuaImg' @click="pagesWitch">
    </div>

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

interface Option{
  icon: string;
  optitle: string;
  score: number;
  questionId: number;
}
interface options{
  imgurl: string;
  question: Array<Option>;
}

interface resultItem{
  score: number,
  conts: string,
}

@Component({
  components: {},
})
export default class About extends Vue {
  private flag: boolean = false;
  private istvanimate: boolean = false;
  private xuhuaImg: boolean = true;
  private indexId: number = 0;
  private scoreItem: number = 0;
  private selectedId: number = -1;
  private inputValue: string = '';
  private backgroundImg: string = "url(" + require("../assets/firstpage/seltect.png") + ") ";
  private activebackgroundImg: string = "url(" + require("../assets/firstpage/selected.png") + ") ";
  private resultId: number = 0;
  private resultList: Array < resultItem > = [{
      score: 5,
        conts: '回国发展，大好前程，创业风头，等着你呢。留澳洲干嘛'
      },
      {
        score: 6,
        conts: '一段奋不顾身的轰轰烈烈的爱情突然出现，令你猝不及防'
      },
      {
        score: 7,
        conts: '参加高考，金榜题名，清华北大，为科研奋斗终身'
      },
      {
        score: 8,
        conts: '参加101女团c位出道'
      },
      {
        score: 9,
        conts: '参加中国好声音，被导师选中，星光灿烂'
      },
      {
        score: 10,
        conts: '苦心作画，和毕加索比肩'
      },
      {
        score: 11,
        conts: '钢琴大师，勤奋的你不断在国际讲台上获奖'
      },
      {
        score: 12,
        conts: '起来去搬砖了，兄弟'
      },
      {
        score: 13,
        conts: '凭借对服装的独特审美，一跃巴黎时装周风云人物'
      },
      {
        score: 14,
        conts: '凭借风趣幽默的 主持方式以及高超的游戏技巧，成为千万级别的知名主播'
      },
      {
        score: 15,
        conts: '你忘了你家里有矿了嘛，你的未来从出生就已经知道了~~'
      },
    ]
  private oplists: Array < options > = [{
      imgurl: require("../assets/firstpage/Q1.jpg"),
      question: [{
          icon: 'A',
          optitle: '从来不带',
          score: 3,
          questionId: 1,
        },
        {
          icon: 'B',
          optitle: '偶尔带',
          score: 2,
          questionId: 2,
        },
        {
          icon: 'C',
          optitle: '经常借朋友的',
          score: 1,
          questionId: 3,
        },
      ],
    },
    {
      imgurl: require("../assets/firstpage/Q2.jpg"),
      question: [{
          icon: 'A',
          optitle: '早已不会',
          score: 3,
          questionId: 1,
        },
        {
          icon: 'B',
          optitle: '偶尔会',
          score: 2,
          questionId: 2,
        },
        {
          icon: 'C',
          optitle: '每次都会',
          score: 1,
          questionId: 3,
        },
      ],
    },
    {
      imgurl: require("../assets/firstpage/Q3.jpg"),
      question: [{
          icon: 'A',
          optitle: '美食',
          score: 3,
          questionId: 1,
        },
        {
          icon: 'B',
          optitle: '家人朋友',
          score: 2,
          questionId: 2,
        },
        {
          icon: 'C',
          optitle: '更好的职业发展',
          score: 1,
          questionId: 3,
        },
      ],
    },
    {
      imgurl: require("../assets/firstpage/Q4.jpg"),
      question: [{
          icon: 'A',
          optitle: '丰富的文娱生活',
          score: 3,
          questionId: 1,
        },
        {
          icon: 'B',
          optitle: '优秀教育资源',
          score: 2,
          questionId: 2,
        },
        {
          icon: 'C',
          optitle: '宜居的环境',
          score: 1,
          questionId: 3,
        },
      ],
    },
    {
      imgurl: require("../assets/firstpage/Q5.jpg"),
      question: [{
          icon: 'A',
          optitle: '当然，本宝宝是学霸',
          score: 3,
          questionId: 1,
        },
        {
          icon: 'B',
          optitle: '还在努力的路上',
          score: 2,
          questionId: 2,
        },
        {
          icon: 'C',
          optitle: 'PTE? 从没听说过',
          score: 1,
          questionId: 3,
        },
      ],
    },


  ]

  
  private tvClick() {
    if (this.inputValue != '') {
      this.istvanimate = true;
      setTimeout(() => {
        this.xuhuaImg = false;
        this.flag = true;
        console.log(this.flag);
      }, 1800);
      console.log(this.flag);
      this.$store.commit('inputName', this.inputValue);
    }
  }
   
  private selectClick(optionItem: Option) {
    this.scoreItem = optionItem.score;
    this.selectedId = optionItem.questionId - 1;
  }

  private pagesWitch() {
    console.log("scoreItem" + this.scoreItem)
    // 当前题目不是最后一个题目 且用户已经选择答案
    if (this.indexId <= this.oplists.length - 2 && this.scoreItem != 0) {
      this.indexId++;
      this.$store.commit('selectOption', this.scoreItem);
    } else if (this.indexId == this.oplists.length - 1) {
      this.$store.commit('selectOption', this.scoreItem);
      this.scoreItem = 0;

      let score = this.$store.state.score;
      console.log(score);
      this.resultList.forEach((value, index, array) => {
        if (array[index].score === score)
          this.resultId = index;
      });
      var resContent = encodeURIComponent(this.resultList[this.resultId].conts)
      console.log(resContent);
      
      this.$router.push(`/result?content=${resContent}&userInput=${this.inputValue}`);
    }
    this.scoreItem = 0;
    this.selectedId = -1;
  }
  

}
  
</script>

<style lang='less' scoped>
ul,
li,
p {
  margin: 0;
  padding: 0;
  list-style: none;
}

.firstPage {
  .firstPage_background {
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 10;
  }
  .firstPage_top {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    .firstPage_tv {
      width: 94vw;
      margin: 0 3vw;
      margin-top: 9vw;
    }
    .firstPage_btntv {
      position: relative;
      top: -48vw;
      left: 47.2vw;
      width: 5.5vw;
    }
    .firstPage_btnLtv {
      position: relative;
      top: -47.7vw;
      left: 47.2vw;
      width: 5.5vw;
    }
    .btntvanimate {
      animation: btnAnimate 0.5s linear infinite alternate;
    }
    .firstPage_backgtv {
      width: 70.6vw;
      position: relative;
      top: -56.5vw;
      left: 5vw;
    }
    .tvanimate {
      animation: tvAnimate 2s ease-out 1s 1;
    }
    .tvanimate2 {
      animation: tvAnimate2 3s linear 1;
    }
  }
  .firstPage_font {
    position: absolute;
    top: 57vh;
    left: 20vw;
    z-index: 20;
    .firstPage_title {
      width: 30vw;
      margin-top: 16vh;
      margin-left: 15vw;
    }
    .inputname {
      display: inline-block;
      width: 60vw;
      height: 10vw;
      line-height: 11vw;
      text-align: center;
      border: 2px solid rgb(48, 47, 47);
      border-radius: 30px;
      font-size: 18px;
      outline: none;
    }
  }
  .optionList {
    width: 80vw;
    position: absolute;
    top: 50vh;
    left: 10vw;
    z-index: 20;
    font-size: 22px;
    .itemstyle {
      width: 80vw;
      height: 11vw;
      line-height: 11vw;
      margin-bottom: 5vh;
      display: flex;
      justify-content: space-around;
      .itemstyle_optitle {
        margin: 0;
        width: 36vh;
        text-align: center;
        border: 2px solid rgb(85, 84, 84);
        border-radius: 30px;
      }
      .itemstyle_active {
        background-color: #ffd700;
        border: 2px solid #ffd700;
      }
      .itemstyle_activeFont {
        color: #fff;
      }
    }
    .itemstyle>span {
      display: inline-block;
      width: 11vw;
      text-align: center;
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
  .bottomBtn {
    position: absolute;
    bottom: 9vh;
    right: 10vw;
    z-index: 20;
    .bottomBtn_switchBtn {
      width: 30vw;
    }
  }
}

@keyframes btnAnimate {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes tvAnimate {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes tvAnimate2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

