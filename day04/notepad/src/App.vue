<template>
  <!-- 主体区域 -->
  <section id="app">
    <!-- 输入框 -->
<TodoHeader @add = add ></TodoHeader>
    <!-- 列表区域 -->
<TodoMain :list="list" @del = del></TodoMain>
    <!-- 统计和清空 -->
<TodoFooter :list =list @clear = clear></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  components:{
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  data () {
    return {
        list:JSON.parse(localStorage.getItem('list')) || [
          {id:1,name:'打篮球'},
          {id:2,name:'看电影'}
        ]
    }
  },
  methods:{
    add(name){
      this.list.unshift({
        id:+ new Date(),
        name: name
      })
    },
    del(id){
      this.list = this.list.filter( item => item.id !== id)
    },
    clear(){
      this.list = []
    }
  },
  watch:{
    list:{
      deep:true,
      handler(newValue){
        localStorage.setItem('list',JSON.stringify(newValue))
      }
    }
  }
}
</script>

<style>

</style>
