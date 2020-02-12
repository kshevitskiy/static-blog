const state = () => ({
  blogPosts: []
})

const mutations = {
  setBlogPosts (state, list) {
    state.blogPosts = list
  }
}

const actions = {
  async nuxtServerInit ({ commit }) {
    const files = await require.context('~/assets/content/blog/', false, /\.json$/)
    const blogPosts = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)
  }
}

export default {
  state,
  mutations,
  actions
}
