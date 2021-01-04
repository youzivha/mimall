<template>
  <div class="home">
    this is home,{{msg}}

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  data () {
    return {
      msg: 'hello world',
      arr: []
    }
  },
  mounted () {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(res => {
    //     this.arr = res
    //   })
    const url = '/x/web-interface/web/channel/category/list'
    fetch(url)
      .then(response => response.json())
      .then(res => {
        console.log(res.data.categories)
      })
  }
}
</script>
