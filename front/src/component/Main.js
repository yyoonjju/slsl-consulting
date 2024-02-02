import React, { useEffect, useState } from "react";
import pageable from "pageable";
import BtnSlider from "./BtnSlider";
import SolarInfo from './SolarInfo';
import '../css/Slider.css';

function Main() {

    useEffect(() => {

        const selector = ".container";
        let myPageable;


        // pageable 라이브러리를 설정하기 위해 초기화 시키는 코드
    
        const initializePageable = () => {
            myPageable = new pageable(selector);
        };


        // scale이 커지거나, translateY로 이동을 시키기 위해
        // 클래스 이름을 붙임. 위의 기능은 CSS로 구현
    
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            const targetSection = document.getElementById(hash);

            // 스크롤하면 붙여졌던 클래스 이름을 없애는 코드
    
            document.querySelectorAll(".scaleChage, .fontUp1, .fontUp2, .fontShow1").forEach((e) => {
                e.classList.remove("active");
                e.classList.remove("load");
            });


            // 스크롤 시 선언한 요소들에 active라는 클래스명을 붙이는 코드
    
            if (targetSection) {
                const scaleChageElement = targetSection.querySelector(".scaleChage");
                const fontUp1 = targetSection.querySelector(".fontUp1");
                const fontUp2 = targetSection.querySelector(".fontUp2");
                const fontShow1 = targetSection.querySelector(".fontShow1");


                if (scaleChageElement) {
                    scaleChageElement.classList.add("active");
                }
    
                if (fontUp1) {
                    fontUp1.classList.add("active");
                }
    
                if (fontUp2) {
                    fontUp2.classList.add("active");
                }
    
                if (fontShow1) {
                    fontShow1.classList.add("active");
                }
            }
        };
    
        const destroyPageable = () => {
            const container = document.querySelector(selector);
            if (container && myPageable) {
                myPageable.destroy();
            }
        };


        // 함수를 실행하는 코드
    
        handleHashChange();
        initializePageable();
    
        window.addEventListener("hashchange", handleHashChange);


        // 원래는 scale이 0.8에서 1로 변경되는 애니매이션이 있지만
        // 처음으로 페이지에 들어갈 때만 scale을 1로 만들어 애니매이션이
        // 실행되지 않기 위해 다른 클래스 이름을 붙이고 CSS로 구현
    
        const firstScaleChageElement = document.querySelector(".scaleChage");
        const fontUp1 = document.querySelector(".fontUp1");
        const fontUp2 = document.querySelector(".fontUp2");

        if (firstScaleChageElement) {
            firstScaleChageElement.classList.add("load");
            fontUp1.classList.add("active");
            fontUp2.classList.add("active");
        }
    
        return () => {
            destroyPageable();
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);
    


    const [slideIndex, setSlideIndex] = useState(0);

    // 버튼 클릭 시 뒤의 사진들로 이동하는 코드

    const nextSlide = () => {

        setSlideIndex(slideIndex === 3 - 1 ? 0 : slideIndex + 1);

    }

    // 버튼 클릭 시 전의 사진들로 이동하는 코드

    const prevSlide = () => {

        setSlideIndex(slideIndex === 0 ? 3 - 1 : slideIndex - 1);

    }

    // 8초마다 다음 사진을 보이게 하기 위한 코드

    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         nextSlide();        
    //     }, 8000);
    //     return () => clearInterval(interval);
    // });

    const solarInfoProps = {
        fontUp1: "태양광 모듈",
        fontUp2: "제품을 소개합니다",
        Route: "FAQ",
        Button: "제품 소개",
      };
    
      
      if (slideIndex === 1) {
        solarInfoProps.fontUp1 = "날짜와 시간, 지역을 선택하면";
        solarInfoProps.fontUp2 = "발전량을 예측해드립니다";
        solarInfoProps.Route = "MapSelect";
        solarInfoProps.Button = "발전량 조회";
      } else if (slideIndex === 2) {
        solarInfoProps.fontUp1 = "흑자전환 기간과";
        solarInfoProps.fontUp2 = "투자 비용을 예측해드립니다";
        solarInfoProps.Route = "ValueInput";
        solarInfoProps.Button = "예측 조회";
      }

      function askbtnclick(e){
        window.location.href="/ask"
      }


    return (
        <div className="container" id="container">
            <section data-anchor="Page 1" className="pg-page pg-active" id="page-1">
                <div className="scaleChage">
                    <video muted autoPlay loop className="mainvideo">
                        <source src="./images/slslvideo.mp4" type="video/mp4" />
                    </video>
                    <SolarInfo fontUp1="태양광 모듈 선택시," fontUp2="발전수익과 설치비용 예측" />
                </div>
            </section>

            <section data-anchor="Page 2" className="pg-page" id="page-2">
                <div className="scaleChage"> 
                    <div className="containerSlider">                    
                        <img
                        src={process.env.PUBLIC_URL + `/images/Slider${slideIndex+1}.jpg`}
                        className="slideImg"
                        />
                        <SolarInfo {...solarInfoProps} />
                        <BtnSlider moveSlide={nextSlide} direction={"next"}/> 
                        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>                                                      
                    </div>
                </div>
            </section>

            <section data-anchor="Page 3" className="pg-page" id="page-3">
                <div className="scaleChage">
                <video muted autoPlay loop className="sub2video">
                    <source src="./images/askvideo.mp4" type="video/mp4" />
                </video>
                    <SolarInfo fontUp1="CONTACT US." fontUp2="SLSL과 함께하세요" Route= "InquiryInput" Button="문의하기"/>
                </div>
            </section>
        </div>
    );
}

export default Main;