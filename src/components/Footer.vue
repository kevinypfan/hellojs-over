<template>
    <footer>
      <ul>
<!--
        <li class="fa fa-home"></li>
        <li class="fa fa-search"></li>
        <li class="fa fa-plus-square"></li>
        <li class="fa fa-heart"></li>
        <li class="fa fa-user"></li>
-->
        <router-link to="/home" tag="li" class="fa fa-home" activeClass="active"></router-link>
        <router-link to="/search" tag="li" class="fa fa-search" activeClass="active"></router-link>
        <router-link to="/post" tag="li" class="fa fa-plus-square" activeClass="active"></router-link>
        <router-link to="/like" tag="li" class="fa fa-heart" activeClass="active"></router-link>
        <router-link to="/profile" tag="li" class="fa fa-user" activeClass="active"></router-link>
      </ul>
    </footer>
</template>

<script>
export default {
}
</script>

<style scoped>
footer {
    position: fixed;
    bottom: 0px;
    color: #ccc;
    width: 100vw;
    border-top: 1px solid #ccc;
    background-color: #fff;
}
footer ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
    padding: 0;
    margin: 0;
}
footer ul .fa {
    font-size: 25px;
    display: block;
    padding: 10px 0px;
}
footer ul .active {
  color: #333;
}

</style>
