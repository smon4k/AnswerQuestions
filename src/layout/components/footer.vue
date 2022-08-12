<template>
    <div class="app-container">
        <van-tabbar v-model="active" route @change="getRouterClick">
            <van-tabbar-item style="cursor: pointer;" replace to="/home">首页</van-tabbar-item>
            <van-tabbar-item style="cursor: pointer;" replace to="/ranking">排行</van-tabbar-item>
            <!-- <van-tabbar-item replace to="/home/follow">关注</van-tabbar-item> -->
            <!-- <van-tabbar-item style="cursor: pointer;" replace>关注</van-tabbar-item> -->
            <!-- <van-tabbar-item style="cursor: pointer;" replace to="/release">
                <img src="@/assets/add.png" alt="" width="30">
            </van-tabbar-item> -->
            <!-- <van-tabbar-item replace to="/news">消息</van-tabbar-item> -->
            <van-tabbar-item style="cursor: pointer;" replace to="/ticket/list">W2E</van-tabbar-item>
            <!-- <van-tabbar-item style="cursor: pointer;" replace to="/news">消息</van-tabbar-item> -->
            <van-tabbar-item style="cursor: pointer;" replace to="/user">我</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    name: '',
    data() {    
        return {
            active: 0
        }
    },
    created() {

    },
    watch: {

    },
    components: {
        
    },
    methods: {
        getRouterClick(index) {
            console.log(index);
            // alert(index)
            // if(index == 1) {
            //     this.$notify({ type: 'warning', message: "敬请期待" });
            // }
        }
    },
    computed: {

    },
    mounted() {

    },
}
</script>
<style lang="scss" scoped>
    .app-container {
        /deep/ {
            .van-tabbar {
                background-color: #00000040;
            }
            .van-tabbar-item {
                color: #fff;
                .van-tabbar-item__text {
                    font-size: 18px;
                }
            }
            .van-tabbar-item--active {
                background-color: transparent;
                .van-tabbar-item__text {
                    font-size: 20px;
                    font-weight: 800;
                    color: #FFD879;
                }
            }
        }
    }
</style>
