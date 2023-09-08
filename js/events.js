import * as el from './elements.js'
import * as actions from './actions.js'




export function registerControlers(){
  el.controlers.addEventListener('click',(event)=>{
    const action=event.target.dataset.action
    
    if(typeof actions[action]!="function"){
      console.log("nao sou função"+action)
      return
    }

    actions[action]()
  })
  
  el.songs.addEventListener('click',(event)=>{
    const song=event.target.id
    console.log(song)
    if(typeof actions[song]!="function"){
      console.log("não sou um função")
      return
    }
    actions[song]()
  })
}