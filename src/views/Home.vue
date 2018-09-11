<template>
  <div class="home">
    <img class="home_logo" src="../assets/home/logo.png"/>
    <div class="home_title">
      <img src="../assets/home/toptitle.png" alt="" class="home_title_bac shake-slow shake-constant">
      <!-- <img src="../assets/home/titlefont.png" alt="" class="home_title_font"> -->
    </div>
    <ul class="home_label">
      <li><img src="../assets/home/cy.png" alt="" class="home_Ladel_left "></li>
      <li><img src="../assets/home/yk.png" alt="" class="home_Ladel_left3 "></li>
      <li><img src="../assets/home/icon.png" alt="" class="home_Ladel_left2"></li>
      <li><img src="../assets/home/cw.png" alt="" class="home_Ladel_left1"></li>
      <li><img src="../assets/home/ykk.png" alt="" class="home_Ladel_left4"></li>
    </ul>
    <ul class="home_labellist">
      <li><img src="../assets/home/cp.png" alt="" class="home_Ladel_left1 "></li>
      <li><img src="../assets/home/cww.png" alt="" class="home_Ladel_left3 "></li>
      <li><img src="../assets/home/ykk.png" alt="" class="home_Ladel_left2"></li>
      <li><img src="../assets/home/fp.png" alt="" class="home_Ladel_left"></li>
      <li><img src="../assets/home/icon.png" alt="" class="home_Ladel_left4"></li>
    </ul>
    <div class="home_bottom">
      <img src="../assets/home/btn.png" alt="" class="home_bottom_btn " @click="pageJump">
    </div> 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
   
  }
})
export default class Home extends Vue {
  private userList: Array<string> = [];
  mounted() {
  var url = window.location.href;
  console.log('授权后的地址为：'+ decodeURIComponent(url));
  }
  private pageJump() {
    this.$router.push('/about');
  }
}
</script> 
<style lang="less" scpped>
  ul,li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .home {
    width: 100vw;
    height: 100vh;
    background-color: #ffd700;
    overflow: hidden;
    .home_logo {
      margin-left: 15pt;
      margin-top: 15pt;
      height: 6vh;
    }
    .home_title {
      width: 94%;
      margin: 0 3%;
      position: relative;
      z-index: 100;
      .home_title_bac {
        width: 94vw;
      }
    }
    .home_labellist {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 26vh;
      left: 0px;
      li {
        width: 14%;
        text-align: right;
        .home_Ladel_left {
          width: 70%;
          display: inline-block;
          position: relative;
          transform: rotate(-40deg);
          animation: animatedown 2.0s ease-in 0.2s infinite;
        }
        .home_Ladel_left1 {
          width: 55%;
          display: inline-block;
          position: relative;
          transform: rotate(15deg);
          animation: animatedown 1.9s ease-in 1.5s infinite;
        }
        .home_Ladel_left2 {
          width: 75%;
          display: inline-block;
          position: relative;
          transform: rotate(-35deg);
          animation: animatedown 1.8s ease-in 2.0s infinite;
        }
        .home_Ladel_left3 {
          width: 75%;
          display: inline-block;
          position: relative;
          transform: rotate(-10deg);
          animation: animatedown 1.9s ease-in 2.0s infinite;
        }
        .home_Ladel_left4 {
          width: 62%;
          display: inline-block;
          position: relative;
          transform: rotate(26deg);
          animation: animatedown 1.8s ease-in 0.4s infinite;
        }
      }
    }
    .home_label {
      display: flex;
      position: relative;
      top: -24vh;
      z-index: 10;
      justify-content: center;
      height: 55vh;
      li {
        width: 14%;
        text-align: right;
        .home_Ladel_left {
          width: 50%;
          display: inline-block;
          position: relative;
          transform: rotate(10deg);
          animation: animatedown 1.8s ease-in 0.6s infinite;
        }
        .home_Ladel_left1 {
          width: 53%;
          display: inline-block;
          position: relative;
          transform: rotate(-20deg);
          animation: animatedown 2.0s ease-in 2.5s infinite;
        }
        .home_Ladel_left2 {
          width: 60%;
          display: inline-block;
          position: relative;
          transform: rotate(10deg);
          animation: animatedown 1.5s ease-in 0.3s infinite;
        }
        .home_Ladel_left3 {
          width: 58%;
          display: inline-block;
          position: relative;
          transform: rotate(-40deg);
          animation: animatedown 1.8s ease-in 1.2s infinite;
        }
        .home_Ladel_left4 {
          width: 90%;
          display: inline-block;
          position: relative;
          transform: rotate(15deg);
          animation: animatedown 1.9s ease-in 0.9s infinite;
        }
      }
    }
    .home_bottom {
      position: relative;
      z-index: 400;
      top: -24vh;
      margin: 0 24%;
      .home_bottom_btn {
        width: 52vw;
      }
    }
    .home_hand {
      position: relative;
      z-index: 400;
      top: -26vh;
      .home_hand_left {
        width: 9%;
        position: absolute;
        left: 37%;
        top: -27px;
        animation: handleftanimate 0.8s linear 0.1s infinite alternate;
      }
      .home_hand_btn {
        width: 14%;
        position: absolute;
        left: 42vw;
        top: -20px;
        animation: handanimate 0.8s linear 0.1s infinite alternate;
      }
    }
  }

  @keyframes animatedown {
    0% {
      top: 0;
    }
    48% {
      top: 40vh;
      opacity: 0.7;
    }
    55% {
      top: 38vh;
      opacity: 0.7;
    }
    100% {
      top: 70vh;
      opacity: 0;
    }
  }

  @keyframes handanimate {
    0% {
      top: -10px;
    }
    100% {
      top: -22px;
    }
  }

  @keyframes handleftanimate {
    0% {
      width: 8%;
      left: 38%
    }
    100% {
      width: 10%;
      left: 37%;
    }
  }

  

</style>

