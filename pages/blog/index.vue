<template>
  <div>
    <ul>
      <li v-for="(post, index) in blogPosts" :key="index">
        <pre>
          {{ post }}
        </pre>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    blogPosts () {
      return this.$store.state.blogPosts
    }
  }
}
</script>
