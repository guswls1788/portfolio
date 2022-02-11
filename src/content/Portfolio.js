import { Component } from 'react';
import '../css/Portfolio.css'
import jquery, { css } from 'jquery';
import $ from 'jquery';

class Portfolio extends Component {

  // componentDidMount(){
  //   $(document).ready(function(){
  //     $(".container .section").hover(function(){
  //       var idx=$(this).index()
  //       // $(this).css("background-image","pull"+idx+".png")
  //       $(this).css("background-image","url('../images/pull0.png')")
  //       // $(this).css("background-color","red")
  //     },function(){
  //       $(this).css("background-image","url('../images/pull0.png')")
  //     })
  //   })
  // }

  render() {
    return(
      <div className='portfolio body_box'>
        <div className='body_wrap'>
          <div class="container">
            <div id="starbucks" class="section">
              <div class="content">
                <a target="_blank" href="https://guswls1788.github.io/starbucks/">
                  <h1>스타벅스</h1>
                  </a>
                  <div className='desc'>
                    <p>html, css, jquery 등을 사용한 반응형 클론코딩</p>
                    <button>
                      <a target="_blank" href="https://github.com/guswls1788/starbucks.git">Github코드</a>
                    </button>
                  </div>
              </div>
              <div class="overlay"></div>
            </div>
            <div id="nhis" class="section">
              <div class="content">
              <a target="_blank" href="https://guswls1788.github.io/nhis/">
                  <h1>국민건강보험</h1>
                  </a>
                  <div className='desc'>
                    <p>react를 이용해 국민건강보험공단 질병예측 api를 이용한 클론사이트</p>
                    <button>
                      <a target="_blank" href="https://github.com/guswls1788/nhis.git">Github코드</a>
                    </button>
                  </div>
              </div>
              <div class="overlay"></div>
            </div>
            <div id="naverbook" class="section">
              <div class="content">
              <a target="_blank" href="https://guswls1788.github.io/naverbook/">
                  <h1>네이버 책 검색</h1>
                  </a>
                  <div className='desc'>
                    <p>react와 naver api를 이용해 책 검색 페이지 제작</p>
                    <button>
                      <a target="_blank" href="https://github.com/guswls1788/naverbook.git">Github코드</a>
                    </button>
                  </div>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Portfolio;
