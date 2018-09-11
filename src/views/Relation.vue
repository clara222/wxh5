<template>
  <div></div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import {stringify} from 'qs'
import qs from 'qs';

@Component({
  components: {}
})
export default class Index extends Vue {
  mounted() {
    let url = window.location.href.split('#')[0];
    let queryStringUrl = url.slice(url.indexOf('?')+1)
    var urlParamsObj = qs.parse(queryStringUrl,{ignoreQueryPrefix:true})
    let userId = urlParamsObj.fromresult;    
    console.log(userId);
    
    this.todo(userId);
  }

  private todo(userId: string) {
    
    // let debug_redirect_url = encodeURIComponent("http://pteppp.leanapp.cn");

    // let url = encodeURIComponent(
    //   "https://stg-pteppp.leanapp.cn/h5/migrationQuiz/auth?debug_redirect_url=" +
    //     debug_redirect_url +
    //     "&router_path=home&fromwxuser="
    // );


    let url = encodeURIComponent(
      "https://stg-pteppp.leanapp.cn/h5/migrationQuiz/auth?router_path=home&fromwxuser="
    );
    
    url = url + userId;
    window.location.href =
      "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6e8235ac81ee7570&redirect_uri=" +
      url +
      "&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect";
  }
}
</script>

<style lang='less'>
</style>

