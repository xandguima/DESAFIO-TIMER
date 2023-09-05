import state from './state.js'
import * as el from './elements.js'
import * as timer from './timer.js'
import * as sound from './sounds.js'


export function toggleRunning(){
  
  state.isRunning=document.documentElement.classList.toggle('running')
  sound.btnSound.play()
  if(state.isRunning){
    timer.countDown()
    console.log("estou no toggleRunning estou rodando")
  }else{
    console.log("estou no toggleRunning e estou pausado")
  }
  

}

export function reset(){
  state.isRunning= false
  sound.btnSound.play()
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function plus(){
  sound.btnSound.play()
  let minutes=Number(el.minutes.textContent)+5
  minutes = minutes>60 ? 60 : minutes
  
  timer.updateDisplay(minutes,el.seconds.textContent)
}
export function less(){
  sound.btnSound.play()
  let minutes=Number(el.minutes.textContent)-5
  minutes= minutes<0 ? 0 : minutes

  timer.updateDisplay(minutes,el.seconds.textContent)
}

/*songs functions */
export function floresta(){ 
  state.isMute=el.floresta.classList.toggle("press")

  if(state.isMute){
    sound.florestaSound.play()
    return
  }
  sound.florestaSound.pause()
}

export function chuva(){
  state.isMute=el.chuva.classList.toggle("press")
  if(state.isMute){
    sound.chuvaSond.play()
    return
  }
  sound.chuvaSond.pause()
}

export function cafeteria(){
  state.isMute=el.cafeteira.classList.toggle("press")
  if(state.isMute){
    sound.cafeteriaSound.play()
    return
  }
  sound.cafeteriaSound.pause()
}
export function lareira(){
  state.isMute=el.lareira.classList.toggle("press")
  if(state.isMute){
    sound.lareiraSound.play()
    return
  }
  sound.lareiraSound.pause()
}