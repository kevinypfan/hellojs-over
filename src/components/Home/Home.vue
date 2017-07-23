<template>
    <div class="container">
        <div class="row">
            <div class="post col-xs-12" v-for="post in posts">
                <div class="postUser bold">
                    <img :src="post.userImg" alt=""/>
                    <span>{{post.user}}</span>
                </div>
                <div class="picture">
                    <img :src="post.postImg" alt=""/>
                </div>
                <div class="postFoot">
                    <div class="icon">
                        <i class="fa fa-heart-o fa-2x"></i>
                        <i class="fa fa-comment-o fa-2x"></i>
                    </div>
                <div class="totleLike">
                    <span>按讚的人</span>
                    <span class="bold">{{ post.checkLike[0] }} {{ post.checkLike[1] }}</span>
                    <span>和</span>
                    <span class="bold">其他{{ post.checkLike.length-2 }} 人</span>
                </div>
                <div class="postTitle">
                    <span class="bold">{{post.user}}</span>
                    <span>{{ post.postTitle }}</span>
                </div>
                <div class="msg" v-for="msg in post.msgAry">
                    <span class="bold">{{ msg.user }}</span>
                    <span>{{ msg.msg }}</span></div>
                </div>
            </div>
            <div class="space"></div>
        </div>
    </div>
</template>

<script>
    var posts =[{
  user:"kevinypfan",
  userImg:"https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/20140031_1519698221448757_7578386114127055667_n.jpg?oh=a1fbea1b96bf83bc9a5e67fec18b1eca&oe=5A01258C",
  postTitle:"天氣真好",
  postImg:"https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/20140031_1519698221448757_7578386114127055667_n.jpg?oh=a1fbea1b96bf83bc9a5e67fec18b1eca&oe=5A01258C",
  msgAry:[{
    user:"lauren_chuuu",
    msg:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date:"20170722-0245"
  },
   {
    user:"challenge_studio_clothing",
    msg:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date:"20170722-0300"
  }],
  checkLike:["consectetur","adipisicing","elit","kevinypfan","losevoid","lauren_chuuu"]
},{
  user:"challenge_studio_clothing",
  userImg:"https://scontent-tpe1-1.cdninstagram.com/t51.2885-19/s150x150/13398719_1559123444382528_1993375417_a.jpg",
  postTitle:"越南午餐，魚米粉，味道很像魷魚羹",
  postImg:"https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-0/p480x480/20228399_1446417995446062_9071899679311419729_n.jpg?oh=efa9b62179f419eff300e573d49336ac&oe=5A08635E",
  msgAry:[{
    user:"lauren_chuuu",
    msg:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date:"20170722-0250"
  }],
  checkLike:["kevinypfan","amet","consectetur","adipisicing","elit"]
},{
  user:"maggie_o827",
  userImg:"https://scontent-tpe1-1.cdninstagram.com/t51.2885-19/s150x150/19367040_1552709864753949_4276223715122872320_a.jpg",
  postTitle:"殺落尖沙嘴搞簽名會Hani提早復工會",
  postImg:"http://static.apple.nextmedia.com/images/apple-photos/apple/20160305/large/05ee15p1.jpg",
  msgAry:[{
    user:"lauren_chuuu",
    msg:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date:"20170722-0250"
  }],
  checkLike:["kevinypfan","amet","consectetur","adipisicing","elit"]
}]

export default {
    data(){
        return{
            posts: posts
        }
    }
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);
* {
  font-family: "Noto Sans TC", "sans-serif";
}

.post {
  border-bottom: 1px solid #ddd;
}
.post .postUser {
  padding: 5px 10px;
}
.post .postUser img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.post .postUser span {
  padding: 5px 10px;
}
.post .picture {
  text-align: center;
  background-color: #eee;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.post .picture img {
  height: 60vh;
  max-width: 100%;
}
.post .icon {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  text-align: center;
}
.post .icon .fa {
  padding: 5px 0px;
  margin-right: 7px;
}

.bold {
  font-weight: bold;
  padding-right: 5px;
}

.postFoot {
  padding: 5px 10px;
}
.space {
height: 45px;
    }
</style>
