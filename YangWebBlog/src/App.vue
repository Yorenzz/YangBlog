<script setup>
import Home from './pages/Home.vue'
const template = (text) => `
                 __._                                   
                / ___)_                                 
               (_/Y ===\\                            __ 
               |||.==. =).                            | 
               |((| o |p|      |  ${text}
            _./| \\(  /=\\ )     |__                    
          /  |@\\ ||||||||.                             
         /    \\@\\ ||||||||\\                          
        /   \\  \\@\\ ||||||//\\                        
       (     Y  \\@\\|||| // _\\                        
       |    -\\   \\@\\ \\\\//    \\                    
       |     -\\__.-./ //\\.---.^__                        
       | \\    /  |@|__/\\_|@|  |  |                         
       \\__\\      |@||| |||@|     |                    
       <@@@|     |@||| |||@|    /                       
      / ---|     /@||| |||@|   /                                 
     |    /|    /@/ || |||@|  /|                        
     |   //|   /@/  ||_|||@| / |                        
     |  // \\ ||@|   /|=|||@| | |                       
     \\ //   \\||@|  / |/|||@| \\ |                     
     |//     ||@| /  ,/|||@|   |                        
     //      ||@|/  /|/||/@/   |                        
    //|   ,  ||//  /\\|/\\/@/  / /                      
   //\\   /   \\|/  /H\\|/H\\/  /_/                     
  // |\\_/     |__/|H\\|/H|\\_/                         
 |/  |\\        /  |H===H| |                            
     ||\\      /|  |H|||H| |                            
     ||______/ |  |H|||H| |                             
      \\_/ _/  _/  |L|||J| \\_                          
      _/  ___/   ___\\__/___ '-._                       
     /__________/===\\__/===\\---'                      
                                                        
`
console.log(template('有朋自远方来，不亦乐乎'))
</script>
<template>
  <div id="blog-app">
    <div class="main-app">
      <Home />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import './scss/vue.scss';
#blog-app {
  display: flex;
  height: 100%;
  box-sizing: border-box;
  background-color: $theme-color;
}
.main-app::-webkit-scrollbar {
  display: none;
}
.main-app {
  flex: 1;
  height: 100%;
  overflow: scroll;
}
</style>
