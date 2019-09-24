import {SEARCHABOUT,HOTSEARCH,TJGOOD} from './name'
export default {
  [SEARCHABOUT](state, searchAbout) {
    state.searchAbout = searchAbout
  },
  [HOTSEARCH](state,hotSaerch){
    state.hotSearch = hotSaerch
  },
  [TJGOOD](state,tj){
    state.tj=tj
  }
}