import { Component } from 'react';
import '../css/Skill.css'

class Skill extends Component {
  render() {
    return(
      <div className='skill body_box'>
        <div className='body_wrap'>
           <div class="container">
            <div className='user'>
              <div className='img'></div>
              <p>김현진</p>
            </div>
            <div className='skill_right'>
              <div className='skill_right_top'>
                <div className='box name'>
                  <p>kjnnn8437@naver.com</p>
                  <p>1997.01.31</p>
                  <p>대구광역시 중구</p>
                  <div className='date'>
                    <p>2015~2017 영진전문대학</p>
                    <p>2016.12~2017.12 게임 모델링 회사</p>
                    <p>2019.05~2019.11 그린컴퓨터 디자인학원 UXUI 디자인(800H) 수료</p>
                    <p>2019.12~2021.08 분양광고 회사</p>
                    <p>2021.10~2022.02 IT KOREA</p>
                  </div>
                </div>
              </div>
              <div className='skill_right_bottom'>
                <div class="box html"></div>
                <div class="box css"></div>
                <div class="box js"></div>
                <div class="box react"></div>
                <div class="box node"></div>
                <div class="box pho"></div>
                <div class="box ai"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Skill;
