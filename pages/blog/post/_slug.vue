<template>
  <article>
    <h1>{{ blogPost.title }}</h1>
    <div>{{ blogPost.body }}</div>
  </article>
</template>

<script>
export default {
  async asyncData ({ params, payload }) {
    if (payload) {
      return {
        blogPost: payload
      }
    }
    return {
      blogPost: await require(`~/assets/content/blog/${params.slug}.json`)
    }
  }
}
</script>
