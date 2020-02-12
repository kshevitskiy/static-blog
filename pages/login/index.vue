<template>
  <div>
    <h1>Netlify CMS login page</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }  
}
</script>
