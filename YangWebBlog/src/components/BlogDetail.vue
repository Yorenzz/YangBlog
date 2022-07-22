<script setup>
import { computed } from '@vue/reactivity';
import { watchEffect, ref, nextTick, reactive } from 'vue';
import { useRoute } from 'vue-router'
import { getArticleById } from '../api';
const route = useRoute()
const data=reactive({
    text:'',
    title: '',
    time: '',
    top: '',
    readtime: '',
    label: '',
    num: '',
    category: ''
})
const blogID=ref(route.query.ID)
watchEffect(() => route.query.ID, (currentID, prevState) => {
    console.log('id', currentID)
}, { deep: true })
const getBlogByID=()=>{
    getArticleById(blogID.value).then((res)=>{
        console.log('res',res)
        const blogData=res.data[0]
        data.text=blogData.text.replaceAll('<pre>', '<pre class="language-js line-numbers">')
        data.title=blogData.title
        data.category=blogData.category
        data.readtime=blogData.readtime
        data.label=blogData.label
        data.num=blogData.num
        data.readtime=blogData.readtime
        data.top=blogData.top
        data.time=blogData.time
        nextTick(()=>{Prism.highlightAll()})
    }).catch((e)=>{
        console.warn(e)
    })
}
getBlogByID()
</script>
<template>
<div class="blog typo">
    <div class="blog-title typo">{{data.title}}</div>
    <div class="typo" v-html="data.text"></div>
</div>

</template>
<style scoped lang="scss">
.blog {
    height: auto;
    border-radius: 0.125rem;
    background: white;
    border-style: solid;
    border-color: #cbc6c6;
    border-width: 1px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 16px;
    padding: 0 32px 16px;
    &-title{
        font-family:Lato;
        font-size:24px;
        font-weight:700;
        margin-top: 22px;
    }
}
</style>