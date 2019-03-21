<template>
  <div class="info">
    <h1>{{msg}}</h1>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { robotText } from './../robots/text'

export default {
  name: 'InfoText',
  props: {
    msg: String
  },
  data: function () {
    return {

    }
  },
  computed: {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

