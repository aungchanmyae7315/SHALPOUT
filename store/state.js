import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      isLoggedIn: false,
      toggleSidebar: false,
      updateLang: true,
      locales: ['en', 'mm', 'th'],
      token: '',
      locale:"en",
      // locale:localStorage.getItem('locale'),
    }
  },
  //   mutations: {
  //     logIn(state, userInfo) {
  //         localStorage.setItem('userInfo', JSON.stringify(userInfo));
  //         state.isLoggedIn = true;
  //     },
  //     accessToken(state, token) {
  //         state.token = token;
  //         localStorage.setItem('token', (token));
  //     },
  //     logOut(state) {
  //         localStorage.removeItem('forgot_phone_number');
  //         localStorage.removeItem('userInfo');
  //         localStorage.removeItem('token');
  //         localStorage.removeItem('bti_Link');
  //         helper.cleanCache()
  //         state.isLoggedIn = false;
  //     },
  //     TOGGLE_SIDEBAR(state) {
  //         state.toggleSidebar = !state.toggleSidebar
  //     },

  //     SET_LANG(state, locale) {
  //         if (state.locales.indexOf(locale) !== -1) {
  //             state.locale = locale
  //             localStorage.setItem('locale', locale);
  //         }
  //     },
  //     AupdateIsLoggedIn(state, isLoggedIn) {
  //       alert('3')

  //         state.isLoggedIn = isLoggedIn;
  //     },
  //     updateLang(state, updateLang) {
  //         state.updateLang = updateLang;
  //     },
  //     profile(state, data) {
  //         state.data = data;
  //         localStorage.setItem('profile', JSON.stringify(data));
  //     },
  // },
  // mutations: {
  //   TOGGLE_SIDEBAR(state) {
  //     state.toggleSidebar = !state.toggleSidebar
  // },
  // },
  // getters: {
  //   toggleSidebar: (state) => state.toggleSidebar,
  // },
    // toggleSidebar: state => state.toggleSidebar,
    // toggleSidebar() {
    //   console.log('ppppppp')
    // }
  actions: {
    logIn(userInfo) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      this.isLoggedIn = true;
      console.log(this.isLoggedIn, 'login st')
    },
    accessToken(token) {
      token = token;
      localStorage.setItem('token', (token));
    },
    logOut() {
      localStorage.removeItem('forgot_phone_number');
      localStorage.removeItem('userInfo');
      localStorage.removeItem('token');
      localStorage.removeItem('profile');
      this.isLoggedIn = false;
      this.isLoggedIn = ''
    },
    // TOGGLE_SIDEBAR() {
    //   this.toggleSidebar = !this.toggleSidebar
    // },
    updateIsLoggedIn(isLoggedIn) {
      this.isLoggedIn = isLoggedIn
      console.log(isLoggedIn)
      localStorage.setItem('isLoggedIn', isLoggedIn);
    },
    updateLang(updateLang) {
      updateLang = updateLang;
    },
    profile(data) {
      data = data;
      localStorage.setItem('profile', JSON.stringify(data));
    },
    SET_LANG(data) {
      console.log(data, 'setttt')
      if (data.indexOf(data) !== -1) {
        this.data = data
        localStorage.setItem('locale', data);
      }
    },
 
    // toggleSidebar(data) {
    //   console.log(data,'okkk')
    //   this.toggleSidebar = !this.toggleSidebar
    //    // commit('TOGGLE_SIDEBAR')
    // },
  //   toggleSidebar() {
  //     console.log(state,'==========')
  //     this.toggleSidebar = !this.toggleSidebar
  // }
    //     TOGGLE_SIDEBAR(state) {
    //     state.toggleSidebar = !state.toggleSidebar
    // },
  }
})