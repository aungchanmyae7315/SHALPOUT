// import { defineStore } from 'pinia'

// export const useStore = defineStore('storeId', {
//   // arrow function recommended for full type inference
//   state: () => {
//     return {
//       // all these properties will have their type inferred automatically
//         isLoggedIn: false,
//         toggleSidebar: false,
//         updateLang: true,
//         locales: ['en','th'],
//         token:''
//     }
//   },
//     getters: {

//       accessToken(token) {
//         this.token = token;
//         localStorage.setItem('token', (token));
//     },
//       logIn(userInfo) {
//         localStorage.setItem('userInfo', JSON.stringify(userInfo));
//           isLoggedIn = true;
//     },
//      updateIsLoggedIn(state,isLoggedIn) {
//       alert('3')
//       console.log(isLoggedIn,'eeeeeee')
//         state.isLoggedIn = isLoggedIn;
//         localStorage.setItem('isLoggedIn', isLoggedIn);
//     },
//     updateLang(updateLang) {
//         updateLang = updateLang;
//     },
//      profile(data) {
//       data = data;
//       localStorage.setItem('profile', JSON.stringify(data));
//     },
//         logOut() {
//           alert('logout state')
//         localStorage.removeItem('forgot_phone_number');
//         localStorage.removeItem('userInfo');
//         localStorage.removeItem('token');
//         localStorage.removeItem('bti_Link');
//         isLoggedIn = false;
//     },

//         SET_LANG(state, locale) {
//         if (state.locales.indexOf(locale) !== -1) {
//             state.locale = locale
//             localStorage.setItem('locale', locale);
//         }
//     },
// },
// actions: {
//     updateIsLoggedIn({ commit }) {
//         commit('AupdateIsLoggedIn')
//     }
//     // toggleSidebar({ commit }) {
//     //     commit('TOGGLE_SIDEBAR')
//     // }
//         //     TOGGLE_SIDEBAR(state) {
//     //     state.toggleSidebar = !state.toggleSidebar
//     // },
// }
// })