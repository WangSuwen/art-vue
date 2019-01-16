<template>
  <div class="app-container documentation-container">
    编辑文章
  </div>
</template>
<script>
import DropdownMenu from '@/components/Share/dropdownMenu';

export default {
  name: 'documentation',
  components: { DropdownMenu },
  data() {
    return { };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.documentation-container {
  margin: 50px;
  .document-btn {
    float: left;
    margin-left: 50px;
    vertical-align: middle;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
