import { Component } from 'react';

class Home extends Component {
  componentDidMount(){
    const length=document.getElementsByClassName("img").length
    console.log(length)
    const random=Math.floor(Math.random()*length)
    console.log(random)
    // console.log(document.getElementsByClassName("img")[0])
    document.getElementsByClassName("img")[random].style.display="block"
  }
  render() {
    return(
      <div className='home body_box'>
        <div className='body_wrap'>

          <div className='img_box'>
            <div className='name'></div>
            <div className='img'></div>
            <div className='img'></div>
            <div className='img'></div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
