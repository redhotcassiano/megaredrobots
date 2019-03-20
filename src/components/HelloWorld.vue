<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-form-select v-model="selected" :options="options"/>
        </b-col>
        <b-col>
          <b-form-input
            id="input1"
            type="text"
            v-model="pesquisa"
            required
            placeholder="Termo de Pesquisa..."
          />
        </b-col>
        <b-col>
          <b-button variant="outline-primary" @click="start(pesquisa, selected)">Go Robot</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { robotText } from './../robots/text'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      pesquisa: '',
      selected: null,
      options: [
        { value: null, text: 'Selecione Uma Opção' },
        { value: 'Who is', text: 'Who is ' },
        { value: 'what is', text: 'what is ' },
        { value: 'The History of', text: 'The History of ' }
      ]
    }
  },
  computed: {},
  methods: {
    start (search, selected) {
      const content = {}
      let robots = {
        text: null
      }

      content.search = search
      content.prefix = selected
      
      robots.text = robotText(content)

      console.log(content)
    }
  }
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
