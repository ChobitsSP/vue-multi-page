<template>
  <div>
    <NavHeader></NavHeader>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <img src="@/assets/logo.png">
          <HelloWorld/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavHeader from '@/components/NavHeader.vue'
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    components: {
      NavHeader,
      HelloWorld,
    }
  }
</script>
