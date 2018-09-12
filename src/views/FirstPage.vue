<template>
  <div></div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Index extends Vue {
    created () { 
        if (!this.$route.query.content) {         
           this.$router.push('/relation')
        }
        
    }
}
</script>

<style lang='less'>

</style>

