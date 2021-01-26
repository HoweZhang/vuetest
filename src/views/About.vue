<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>填写您的姓名：<input type="text" v-model="myName"></p>
    <p>填写您的住址：<input type="text" v-model="address"></p>
    <input type="button" value="add" @click="addPerson">
    <ul>
      <li v-for="(item,index) in personArr" :key="item.name">
        <span>{{index}}、</span>
        <span>姓名：{{item.name}}——</span>
        <span>住址：{{item.address}}</span>
      </li>
    </ul>
  </div>
</template>
<script>

import testFn from "./about.js"
export default {
  name: "About",
  setup(){
    return { ...testFn }
  }
};
</script>
