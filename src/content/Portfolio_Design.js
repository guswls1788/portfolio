import { useEffect, useState } from "react"
import '../css/Portfolio_Design.css'
import $ from 'jquery';
import img_1 from '../images/desigin_01.png'
import img_2 from '../images/desigin_02.png'
import img_3 from '../images/desigin_03.png'
function Portfolio_Design() {
    const [modal,setModal]=useState(false)
    const [modal_img,setModal_img]=useState([{img_1},{img_2},{img_3}])
    const [main_modal_img,setMain_modal_img]=useState()
    const [desigin_list]=useState([
      {title:"모바일 청첩장",id:"wedding",img:img_1},
      {title:"MAMA 어워드 이벤트",id:"mama",img:img_2},
      {title:"네이처 리퍼블릭 그린더마 이벤트",id:"NATURE",img:img_3},
    ])
    useEffect(()=>{
        $(document).ready(function(){
          $(".section").click(function(){
            var a=$(this).index()
            $(".Portfolio_Design .modal_back #modal_wrap .img").attr("src",modal_img[a])
          })
            $(".section").find("a.view").click(function () {
                $("html,body").on('scroll touchmove mousewheel', function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                })
            })
            $("#close").click(function(){
                $("html,body").off('scroll touchmove mousewheel')
            })
        })
    })
    const Modal=(data)=>{
        setModal(!modal)
        setMain_modal_img(data.img)
    }
    const desigin_result=desigin_list.map(
      (data)=>(<div className="section" id={data.id}><div className="content">
        <h2>{data.title}</h2><div className="desc"><button> <a onClick={()=>Modal(data)} class="view">자세히보기</a></button></div>
        <div class="overlay"></div></div></div>)
    )
    return(
      <div className='Portfolio_Design body_box'>
        <div className='body_wrap'>
          <div className="container">
            {desigin_result}
          </div>
        </div>
        {modal?<div  className="modal_back">
                <div id="modal_wrap">
                    <img id="img" src={main_modal_img}></img>
                    <a onClick={Modal} id="close"></a>
                </div>
        </div>:<></>}
      </div>
    )
}
export default Portfolio_Design;
