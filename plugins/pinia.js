import { createPinia } from 'pinia'

// add a property named `secret` to every store that is created
// after this plugin is installed this could be in a different file
function SecretPiniaPlugin() {
  return { secret: 'the cake is a lie' }
}

const pinia = createPinia()
// give the plugin to pinia
pinia.use(SecretPiniaPlugin)

// in another file
const store = useStore()
store.secret // 'the cake is a lie'