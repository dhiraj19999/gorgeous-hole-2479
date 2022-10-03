import './slider.css'
import React from "react"
import {useState, useEffect} from 'react'
function Slider (){
const [data,setData]=useState("")
let [count,setCount]=useState(0)
let arr=[
    {img:'https://logan.nnnow.com/content/dam/nnnow-project/15-sep-2022/SC_TopBanner_Exclusivelyatsephoradesktop.jpg'},
    {img:'https://logan.nnnow.com/content/dam/nnnow-project/20-sep-2022/Mac_Topbannerdesktop.jpg'},
    {img:'https://logan.nnnow.com/content/dam/nnnow-project/29-sep-2022/1125X500_HPBanner_Webcopy2.jpg'},
    {img:'https://logan.nnnow.com/content/dam/nnnow-project/29-sep-2022/Benefit_HomepageBanner_Diwalidesktop.jpg'},
    {img:'https://logan.nnnow.com/content/dam/nnnow-project/26-aug-2022/se/TooFaced_TopBannerdesktop.jpg'},
    {img:'https://logan.nnnow.com/content/dam/nnnow-project/15-sep-2022/Sephora_Homepagebanner_kajaldesktop.jpg'},
    {img:'https://logan.nnnow.com/content/dam/nnnow-project/24-aug-2022/EsteeLauder_TopBannerdesktop.jpg'},
    {img:'https://logan.nnnow.com/content/dam/nnnow-project/01-sep-2022/Sephora_TopBanner_PrepPlease_Desktop.jpg'}
]
if(count==7){
    setCount((prevCount)=>prevCount-7)
   
 }
useEffect(()=>{
    const id=setInterval(()=>{
      
       setCount((prevCount)=>prevCount+1)
      
       },2000)
       
       return ()=>{clearInterval(id)}
     
},[])
    return(
        <div>
    <div className='slider'>
    
      <img   src={arr[count].img}/>
    </div>
        </div>
    )
}

export default Slider