export default function ({ app, route, store, isDev }) {
  return store.dispatch('loadSettings')
}
