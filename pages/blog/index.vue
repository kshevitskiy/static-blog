<template>
  <div>
    <ul>
      <li v-for="(post, index) in blogPosts" :key="index">
        <h3>
          <n-link
            :to="{
              name: 'blog-post-slug',
              params: {
                slug: post.slug
              }
            }
          ">
            {{ post.title }}
          </n-link>
        </h3>
        <p>{{ post.description }}</p>
        <h5>Post object</h5>
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
