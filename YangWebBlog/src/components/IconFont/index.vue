<script setup>
import '../../../libs/iconfont'

const props = defineProps({
    type: {
        type: String,
        default: '',
    },
})
</script>

<template>
    <el-icon>
        <svg
            class="icon"
            aria-hidden="true"
        >
            <use :xlink:href="`#${props.type}`" />
        </svg>
    </el-icon>
</template>

<style lang="scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentcolor;
        overflow: hidden;
    }
</style>