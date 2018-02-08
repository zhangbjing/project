<template>
    <section class="section-box">
        <h2 v-if="title" class='title'>{{title}}</h2>
        <slot></slot> 
    </section>
</template>
<script>
export default {
    name: 'Content',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>
<style>
    .title{
        padding: 10px 0;
    }
</style>

