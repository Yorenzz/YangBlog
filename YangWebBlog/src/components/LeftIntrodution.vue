<script setup>
</script>

<template>
  <div class="left-introduction">
    <div class="avatar-box">
      <el-avatar
          class="avatar"
          shape="square"
          src="/public/empty.png"
          alt="https://pic-1305446179.cos.ap-guangzhou.myqcloud.com/ba07afa100ed743f068fe35a75353b06.png"
      />
    </div>
      
      <hr/>
      <div class="name">
        Yorenz
      </div>
      <span>占位占位占位</span>

  </div>
</template>

<style scoped lang="scss">
.left-introduction {
  height: 80vh;
  border-radius: 0.125rem;
  background: white;
  border: 1px #cbc6c6 solid;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  .avatar {
    width: 100%;
    height: 100%;
    position: absolute;
      top:0;
      left:0
  }
  .avatar-box {
      width:100%;
      height:0;
      padding-bottom:100%;
      position: relative;
  }
  &:hover {
    box-shadow: -1px 2px 5px 3px rgba(0, 0, 0, 0.3);
  }
  .name {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>