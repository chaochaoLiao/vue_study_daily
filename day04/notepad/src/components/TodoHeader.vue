<template>
      <header class="header">
      <h1>小黑记事本</h1>
      <input @keyup.enter="add" v-model.trim="todoname" placeholder="请输入任务" class="new-todo" />
      <button class="add" @click="add">添加任务</button>
    </header>
</template>

<script>
export default {
    data(){
     return { todoname:''}
    },
    methods:{
      add(){
        if(!this.todoname){
          alert('请输入你要做的事情')
          return
        }
      this.$emit('add',this.todoname)
      this.todoname = ''
      }
    }
}
</script>

<style>

</style>