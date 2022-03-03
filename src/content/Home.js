import { useEffect, useState } from "react"

function Home(){
    useEffect(()=>{

      const length=document.getElementsByClassName("main_img").length
      const random=Math.floor(Math.random()*length)
      // console.log(document.getElementsByClassName("img")[0])
      document.getElementsByClassName("main_img")[random].style.display="block"
      // document.getElementsByClassName("img")[1].style.display="block"
    })
    return(
      <div className='home body_box'>
        <div className='body_wrap'>

          <div className='img_box'>
            <div className='name'></div>
            <div className='main_img'></div>
            <div className='main_img'></div>
            <div className='main_img'></div>
          </div>
        </div>
      </div>
    )
}
export default Home;
