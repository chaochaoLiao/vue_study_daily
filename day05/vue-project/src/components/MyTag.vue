<template>
  <div class="my-tag">
              <input
                class="input"
                type="text"
                placeholder="输入标签"
                v-if="isEdit"
                v-focus
                @blur="handleEnter"
                :value = "value"
                @keyup.enter="handleEnter"
              />
              <div v-else @dblclick="handleClick" class="text">{{ value }}</div>
            </div>
</template>

<script>
export default {
   data(){
    return{
        isEdit:false
    }
   },
   props:{
    value:String
   },
   methods:{
    handleClick(){
        this.isEdit = true
    },
    handleEnter(e){
        if(!e.target.value){
            alert('不能输入空值')
            return
        }
        this.$emit('input',e.target.value.trim())
        this.isEdit = false
    },

   }
}
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>