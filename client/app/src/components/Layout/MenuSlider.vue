<template>
    <el-menu
        :default-active="$route.path"
        class="menu-list"
        :router="true"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
         <template v-for="(item, index) in routes" v-if="item.component && !item.meta.isFull">
        <el-submenu v-if="item.children" :key="index" :index="item.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.meta.title}}</span>
          </template>
          <el-menu-item
            v-for="(item2, index2) in item.children"
            :key="index2" 
            :index="item.path+'/'+item2.path"
          >{{item2.meta.title}}</el-menu-item>
        </el-submenu>
        <el-menu-item
          v-else
          :index="item.path"
          :key="index"
        >
          <i class="el-icon-setting"></i>
          <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
</template>
<script>
export default {
    name: "MenuSlider",
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        }
    },
    computed: {
        routes(){
            return this.$router.options.routes
        }
    },
    created(){
        // console.log(this.$router.options.routes)
    }
}
</script>
<style>
    .el-col-12 {
        width: 100%;
    } 
    .menu-list{
        border: 0;
    }
</style>

