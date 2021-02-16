<template>
  <section
    :class="
      story.content.classes
        ? 'Page ' + story.content.classes
        : story.full_slug == 'home'
        ? 'Page coming-soon'
        : 'Page'
    "
  >
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </section>
</template>

<script>
const loadData = function ({
  api,
  cacheVersion,
  errorCallback,
  version,
  path,
}) {
  return api
    .get(`cdn/stories${path}`, {
      version,
      cv: cacheVersion,
    })
    .then((res) => {
      if (res.data) {
        console.log(res.data)
        return res.data
      }
    })
    .catch((res) => {
      errorCallback({
        statusCode: 404,
        message: 'Failed to receive content form api',
      })
    })
}
export default {
  data() {
    return {
      story: { content: {} },
    }
  },
  mounted() {
    // Use the input event for instant update of content
    this.$storybridge.on('input', (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content
      }
    })
    // Use the bridge to listen the events
    this.$storybridge.on(['published', 'change'], (event) => {
      // window.location.reload()
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true,
      })
    })
  },
  async fetch(context) {
    // Loading reference data - Articles in our case
    if (context.store.state.articles.loaded !== '1') {
      let articlesRefRes = await context.app.$storyapi.get(`cdn/stories/`, {
        starts_with: 'articles/',
        version: 'draft',
      })
      context.store.commit('articles/setArticles', articlesRefRes.data.stories)
      context.store.commit('articles/setLoaded', '1')
    }
  },
  asyncData(context) {
    let editMode = true
    const version = editMode ? 'draft' : 'published'
    const path = context.route.path === '/' ? '/home' : context.route.path

    return loadData({
      version,
      api: context.app.$storyapi,
      cacheVersion: context.store.state.cacheVersion,
      errorCallback: context.error,
      path,
    })
  },
}
</script>
