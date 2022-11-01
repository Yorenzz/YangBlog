<script setup>
import { ref } from 'vue';

const activeName=ref('')
</script>

<template>
  <div class="left-introduction">
    <div class="avatar-box">
      <el-avatar
        class="avatar"
        shape="square"
        src="http://rjha510cm.hn-bkt.clouddn.com/picture/ba07afa100ed743f068fe35a75353b06.png?e=1667314838&token=16HaNdopyMmYvaL1MQ_wpUVxN_m_Ttv32XOYgWpK:_ucO4kV889kr2Iu60E5EjZ01PTk="
      />
    </div>

    <div class="name">Yorenz</div>
    <div class="introduction">
      <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="接触过的技术..." name="1">
        <div>
          JavaScript、Nodejs、MongoDB、Koa2、Express、Vue、React、Typescript...
        </div>
      </el-collapse-item>
      <el-collapse-item title="玩过的游戏..." name="2">
        <div>
          LOL、SkyLine、死亡细胞、D4L2、公主连结、明日方舟、无期迷途...
        </div>
      </el-collapse-item>
      <el-collapse-item title="喜欢听的歌..." name="3">
        <div>
          你猜&#128536;
        </div>
      </el-collapse-item>
    </el-collapse>
    </div>
  </div>
</template>

<style scoped lang="scss">
.left-introduction {
  height: 80vh;
  border-radius: 0.125rem;
  background: white;
  border: 1px #cbc6c6 solid;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 18.75%;
  text-align: center;
  .avatar {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .avatar-box {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
  }
  &:hover {
    box-shadow: -1px 2px 5px 3px rgba(0, 0, 0, 0.3);
  }
  .name {
    font-size: 30px;
    font-weight: 600;
    font-family: STLiti;
    margin: 16px 0;
  }
  .introduction {
    margin: 16px 16px;
  }
}
</style>
