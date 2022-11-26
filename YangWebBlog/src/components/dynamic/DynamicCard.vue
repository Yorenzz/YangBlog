<script setup>
import { computed, ref, watch } from 'vue';
import IconFont from '../IconFont/index.vue'
const props=defineProps({
    time: {
        type: String,
        default: '',
    },
    content: {
        type: String,
        default: '',
    },
    like: {
        type: Number,
        default: 0,
    },
    watch: {
        type: Number,
        default: 0,
    },
    dynamicID: {
        type: String,
        default: '',
    }
})

const isLike = ref(false)
const viewLike = ref(0)
viewLike.value = props.like

const heartColor = computed(()=>{
    return isLike.value ? 'red' : ''
})

const heartType = computed(()=>{
    return isLike.value ? 'yorenz-shixin' : 'yorenz-kongxin'
})

const cancelOrLikeDynamic = () => {
    const cancelOrLikeNum = isLike.value ? -1 : 1
    viewLike.value = viewLike.value + cancelOrLikeNum
    isLike.value = !isLike.value
    // 调接口传num
}

</script>

<template>
    <div class="dynamic-card">
        <el-card>
            <template #header>
                <div class="card-header">
                    <span class="font-test">Yorenz</span>
                    <span>{{ props.time }}</span>
                </div>
            </template>
            <div v-html="props.content"/>
            <footer class="card-foot">
                <div class="foot-content">
                    <div>
                        <IconFont
                            :type="heartType"
                            class="icon"
                            @click="cancelOrLikeDynamic"
                        />
                        <span>{{ viewLike }}</span>
                    </div>
                    <div class="see">
                        <IconFont
                            type="yorenz-yanjing"
                            class="icon-see"
                        />
                        <span>{{ props.watch }}</span>
                    </div>
                </div>
            </footer>
        </el-card>
    </div>
</template>

<style scoped lang="scss">
.dynamic-card {
    :deep(.el-card__header) {
        padding: 8px 16px 8px
    }

    :deep(.el-card__body) {
        padding-bottom: 4px;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .font-test {
            font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        }
    }

    .card-foot {
        border-top: 1px solid #eee;
        margin: 20px -20px 0;
        padding-top: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .foot-content {
            width: 100%;
            margin: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 24px;
            .icon {
                margin-right: 4px;
                cursor: pointer;
                color: v-bind("heartColor");
            }
            .see {
                line-height: 24px;
                display: flex;
                flex-direction: row;
                align-items: center;
                .icon-see {
                    margin-right: 3px;
                    color: #efefef;
                }
            }
        }
    }
}
</style>
