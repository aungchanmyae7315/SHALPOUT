import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
        isLoggedIn: false,
        toggleSidebar: false,
        updateLang: true,
        locales: ['en','th'],
        // locale:localStorage.getItem('locale'),
    };
  },
  getters: {
    toggleSidebar: state => state.toggleSidebar,
},
mutations: {
    logIn(state, userInfo) {
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        state.isLoggedIn = true;
    },
    accessToken(state, token) {
        state.token = token;
        localStorage.setItem('token', (token));
    },
    logOut(state) {
        localStorage.removeItem('forgot_phone_number');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('token');
        localStorage.removeItem('bti_Link');
        helper.cleanCache()
        state.isLoggedIn = false;
    },
    TOGGLE_SIDEBAR(state) {
        state.toggleSidebar = !state.toggleSidebar
    },

    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
            localStorage.setItem('locale', locale);
        }
    },
    updateIsLoggedIn(state, isLoggedIn) {
        state.isLoggedIn = isLoggedIn;
    },
    updateLang(state, updateLang) {
        state.updateLang = updateLang;
    },
    profile(state, data) {
        state.data = data;
        localStorage.setItem('profile', JSON.stringify(data));
    },
},
actions: {
    toggleSidebar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    }
}
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});