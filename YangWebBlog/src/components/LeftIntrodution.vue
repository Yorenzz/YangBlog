<script setup>
</script>

<template>
  <div class="left-introduction">
    <div class="avator-box">
      <el-avatar
          class="avator"
          shape="square"
          src="https://pic-1305446179.cos.ap-guangzhou.myqcloud.com/ba07afa100ed743f068fe35a75353b06.png"
      />
    </div>
      
      <hr/>
      <div>
        Yorenz
      </div>
      <span>前端开发，后端玩玩nodejs</span>

  </div>
</template>

<style scoped lang="scss">
.left-introduction {
  .avator {
    width: 100%;
    height: 100%;
    position: absolute;
      top:0;
      left:0
  }
  .avator-box {
      width:100%;
      height:0;
      padding-bottom:100%;
      position: relative;
  }
  &:hover {
    box-shadow: -1px 2px 5px 3px rgba(0, 0, 0, 0.3);
  }
  height: 80vh;
  border-radius: 0.125rem;
  background: white;
  border-style: solid;
  border-color: #cbc6c6;
  border-width: 1px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>