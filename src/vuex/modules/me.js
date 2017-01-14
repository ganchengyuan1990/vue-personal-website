// import { } from '../mutation-types'
let state = {
    iframe_url:'',
    iframe_title:'',
    get_weather_info: false,
}
const mutations = {
    ['SET_IFRAME_URL'](state,urlObj){
        state.iframe_url = urlObj.url
        state.iframe_title = urlObj.title
    },
    ['GET_WEATHER_INFO'](state, flag) {
        state.get_weather_info = flag;
    },
}

export default {
  state,
  mutations
}