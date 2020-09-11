<template>
  <div @click="fullScreenControl" style="font-size: 20px;font-family:楷体;">
    <!--    <el-button @click="alert" type="primary">-->
    <i class="el-icon-full-screen"/> {{ fullScreenText }}
    <!--    </el-button>-->
  </div>
</template>

<script>
    export default {
        name: "FullScreenButton",
        data() {
            return {
                isFullScreen: false,
                fullScreenText: '全屏',
            };
        },
        methods: {
            fullScreenControl() {
                const el = document.documentElement;
                this.isFullScreen = !this.isFullScreen;
                this.fullScreenText = this.isFullScreen ? '退出全屏' : '全屏';

                let rfs;
                //全屏
                if (this.isFullScreen) {
                    rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
                    if (typeof rfs != "undefined" && rfs) {
                        rfs.call(el);
                    }
                    return;

                } else {

                    //退出全屏
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                }

            }
        },
    }

</script>

<style scoped>
  .item {
    /*flex-grow:5;*/
  }
</style>
