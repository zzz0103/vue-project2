import {reqSAbout,reqserHot,reqfind} from '../api/api'
import {
  SEARCHABOUT,
  HOTSEARCH,
  TJGOOD
} from './name'
export default{
    async serAbout({commit},searchName){
      let result = await reqSAbout(searchName)
      //console.log(result)
      if(result.code==="200"){
        if(result.data.length>0){
          const about = result.data
          commit(SEARCHABOUT, about)
        }
        
      }
    },
    async serHot({commit}){
      let result= await reqserHot()
      if (result.code === "200") {
        if (result.data.hotKeywordVOList.length > 0) {
          const hotSaerch = result.data.hotKeywordVOList
          console.log(hotSaerch)
          commit(HOTSEARCH, hotSaerch)
        }
      }
    },
    async findtj({commit}){
      let result = await reqfind()
      console.log(result)
      if (result.code === "200") {
          const tj = result.data.result
          console.log(tj)
          commit(TJGOOD, tj)
        }
    },
}