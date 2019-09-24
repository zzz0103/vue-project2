import ajax from './index'
//find页面的nav
const BASC = '/api'
export const reqFindNav=()=>ajax('/good/find')
export const reqSortlist=()=>ajax('/sort')
export const reqLogin=()=>ajax('/person')
export const reqSAbout = (value) => ajax(BASC + `/xhr/search/searchAutoComplete.json?keywordPrefix=${value}`, 'get')
export const reqserHot = () => ajax(BASC + '/xhr/search/init.json')
export const reqfind = () => ajax(BASC + `/topic/v1/find/recAuto.json?page=1&size=5`)