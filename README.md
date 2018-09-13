# wxh5

一个微信端的h5活动:

1. 由于这个微信网页是一个用户测试未来的活动，开始测试之前需授权获取用户信息，所以新建一个firstPage页面作为/页面来判断需不需要授权。如果测试完成分享给用户，用户看到的是分享人的结果页面，这个页面是不需要授权的。扫描其中的二维码开始测试才需要授权。所以在前端路由里传一个query 的参数。根据这个参数(this.$route.query.xxx)判断，用户打开的是结果页（不需授权）还是测试页（需授权）。

2. 分享给好友的结果页，里面动态生成的二维码url需携带当前用户的信息。以便在授权页面拿到分享人的信息。为了方便，授权页面最好独立写到一个文件里 page_relation.vue  

3. 授权这里由后端处理。授权完成后由后端将页面重定向到指定页面。

   ```
   let url = encodeURIComponent(
         "https://stg-pteppp.leanapp.cn/h5/migrationQuiz/auth?router_path=home&fromwxuser="
       );
       
       url = url + userId;
       window.location.href =
         "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6e8235ac81ee7570&redirect_uri=" +
         url +
         "&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect";
   ```

   这里注意：因为前端路由是带#的。比如重定向后跳转的页面是：https://xxx.cn?id=xxx#/home 这个时候如果直接给后端这个地址，发现这个页面是找不到的。在这个项目中后端在路由里传入了一个router_path的参数。我要重定向到#/home页面，就在地址中加上router_path=home即可。另外附上后端nodejs代码。看到这个，大家应该不难懂了。

   ![后端代码](https://github.com/clara222/wxh5/blob/master/public/shouquan.png)

   另外，为了方便前端测试，我们可爱的后端还兼容了本地配置的域名，参照如下代码

   ```
    // let debug_redirect_url = encodeURIComponent("http://pteppp.leanapp.cn");

       // let url = encodeURIComponent(
       //   "https://stg-pteppp.leanapp.cn/h5/migrationQuiz/auth?debug_redirect_url=" +
       //     debug_redirect_url +
       //     "&router_path=home&fromwxuser="
       // );
   ```

   如上，本地开发配置的域名为：http://pteppp.leanapp.cn

   这里注意：为了能够正常使用开发者工具调试，配置的域名应在公众号JS接口安全域名下。

4. 由于官方文档所说：**通过config接口注入权限验证配置**

   所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用（同一个url仅需调用一次，对于变化url的SPA的web app可在每次url变化时进行调用）所以获取签名的代码写在App.vue文件里。created钩子函数里调用一次。watch到route变化时也调用一次。

5. 如果项目采用非history模式(vue-router默认 hash 模式 )，则需要去掉url上#后的部分传给后端换取微信签名

6. 分享给好友、分享到朋友圈时，发现左小角的图标找不到。正确做法时将这些图片放到服务器上。url使用服务器的链接。

7. 分享的link，根据分享后用户需要看到的内容而定，需要在子组件将link，emit到App.vue里进行获取。

   本项目中用户测试完成的结果页result.vue页面里，需将分享链接发送给 App.vue。其他情况下sharelink默认为网站的初始页。

8. 打包到服务器时发现文件都404，在vue-cli2.0的处理方式是：

​           build -> config -> index.js -> build{} -> assetsPublicPath: './'

​	由于本项目中用到了vuecli3+typescript: 所以相应的配置如下：

​	 baseUrl: './'

​	![baseUrl: './'](https://github.com/clara222/wxh5/blob/master/public/2.png)

9. 由于本项目最后生成的结果页是一个html页面。而产品的需求是，在最终的结果页面，可以长按保存成图片，也就是要在前端将h5页面生成一张图片。用到了html2canvas。具体使用方式参见代码。在处理这个功能的时候，也遇到了一个大坑。参照如图所示:

![大坑](https://github.com/clara222/wxh5/blob/master/public/canvas.png) 

就是因为最终要生成的图片有用户的微信头像，跨域了，不得不说，微信还是很坑的。最终后端给的解决方案是：

将用户的微信头像改成通过我们这边h5的服务器来获取,然后再发给前端头像地址,改成用我们的服务器的地址。

至此，这个项目就算完工了。