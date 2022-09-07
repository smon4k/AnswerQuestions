<template>
    <div class="app-container">
        <van-tabbar v-model="active" route @change="getRouterClick">
            <van-tabbar-item style="cursor: pointer;" replace to="/home">
                <span>{{ $t('nav:home') }}</span>
                <template #icon>
                    <img src="@/assets/answer/nav-home.png" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item style="cursor: pointer;" replace to="/ranking">
                <span>{{ $t('nav:performance') }}</span>
                <template #icon>
                    <img src="@/assets/answer/nav-merits.png" />
                </template>
            </van-tabbar-item>
            <!-- <van-tabbar-item replace to="/home/follow">关注</van-tabbar-item> -->
            <!-- <van-tabbar-item style="cursor: pointer;" replace>关注</van-tabbar-item> -->
            <!-- <van-tabbar-item style="cursor: pointer;" replace to="/release">
                <img src="@/assets/add.png" alt="" width="30">
            </van-tabbar-item> -->
            <!-- <van-tabbar-item replace to="/news">消息</van-tabbar-item> -->
            <van-tabbar-item style="cursor: pointer;" replace to="/ticket/list">
                <span>{{ $t('nav:tickets') }}</span>
                <template #icon>
                    <img src="@/assets/answer/nav-ticket.png" />
                </template>
            </van-tabbar-item>
            <!-- <van-tabbar-item style="cursor: pointer;" replace to="/news">消息</van-tabbar-item> -->
            <van-tabbar-item style="cursor: pointer;" replace to="/user">
                <span>{{ $t('nav:my') }}</span>
                <template #icon>
                    <img src="@/assets/answer/nav-my.png" />
                </template>
            </van-tabbar-item>
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
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                max-width: 750px;
                background-color: #64B8FC;
                height: 60px;
            }
            .van-tabbar-item {
                color: #fff;
                .van-tabbar-item__text {
                    font-size: 15px;
                }
                .van-tabbar-item__icon img {
                    width: 30px;
                    height: 30px;
                }
            }
            .van-tabbar-item--active {
                background-color: transparent;
                .van-tabbar-item__text {
                    font-size: 15px;
                    font-weight: 800;
                    color: #FFD879;
                }
            }
        }
    }
</style>
