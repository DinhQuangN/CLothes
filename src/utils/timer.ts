export const timer = (time:number)=>{
    let min = "0" + Math.floor(time/60)
    let sec = Math.floor(time%60).toString()
    if(Number(sec)<10){
        sec = "0" + sec
    }
    return `${min}:${sec}`
}