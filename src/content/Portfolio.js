import { useEffect, useState } from "react"
import '../css/Portfolio.css'
import $ from 'jquery';

function Portfolio() {
    return(
      <div className='portfolio body_box'>
        <div className='body_wrap'>
          <div className="container">
              <div id="starbucks" class="section">
                <div class="content">
                  <a target="_blank" href="https://guswls1788.github.io/starbucks/">
                    <h2>스타벅스</h2>
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
                    <h2>국민건강보험</h2>
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
                <a target="_blank" href="https://guswls1788.github.io/mini_shopping/">
                    <h2>미니 쇼핑몰</h2>
                    </a>
                    <div className='desc'>
                      <p>react hook과 firebase를 이용한 미니 쇼핑몰</p>
                      <button>
                        <a target="_blank" href="https://github.com/guswls1788/mini_shopping.git">Github코드</a>
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
export default Portfolio;
