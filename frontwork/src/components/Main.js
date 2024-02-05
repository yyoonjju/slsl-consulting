import React from 'react';
import MainHeader from '../components/MainHeader.js';
import Footer from '../components/Footer.js';
import '../static/css/Main.css';

const Main = () =>{

  function productbtnclick(e){
    window.location.href="/product"
  }
  function askbtnclick(e){
    window.location.href="/ask"
  }

    return(
  <div>
    {/* Header랑 MainHeader는 같은 내용입니다. 병합완료 후 
    메인 외에 상세 메뉴 페이지에서 헤더에 아래 상세 페이지가 겹처서 나오는 문제가 생겼습니다. 
    이때문에 상세페이지의 헤더와 메인화면의 헤더가 분리되어야 한다고 봅니다.*/}

    <MainHeader/>
      <div className="body">
        <div className="mainvideodetail">
          <div className="maindetail">
            <p>태양광 패널 선택시,</p>
            <p>발전수익과 설치비용 예측</p>
          </div>
          <video muted autoPlay loop className="mainvideo">
              <source src="images/slslvideo.mp4" type="video/mp4" />

          </video>
        </div>
        <div className="sub2videodetail">
          <div className="sub2detail">
            <button className="askbutton" onClick={askbtnclick}>문의하기</button>
          </div>
          <video muted autoPlay loop className="sub2video">
              <source src="images/askvideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <Footer/>
  </div>
    )
  }

export default Main;