import data from './data.json'
import Mock from 'mockjs'
Mock.mock('/good/find',{code:0,data:data.findnav})
Mock.mock('/sort',{code:0,data:data.classify})
Mock.mock('/person',{code:0,data:data.login})
