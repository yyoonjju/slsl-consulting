import React, { useEffect, useState } from "react";
import pageable from "pageable";
import BtnSlider from "./BtnSlider";
import SolarInfo from './SolarInfo';
import '../css/SolarInfo.css';
import '../css/Slider.css';
import '../css/Main.css';

function Main() {

    useEffect(() => {

        const selector = ".container";
        let myPageable;


        // pageable 라이브러리를 설정하기 위해 초기화 시키는 코드
    
        const initializePageable = () => {
            myPageable = new pageable(selector);
        };


        // scale이 커지거나, translateY로 이동을 시키기 위해
        // 클래스 이름을 붙임. 이동하는 기능은 CSS로 구현
    
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            const targetSection = document.getElementById(hash);

            // 스크롤하면 붙여졌던 클래스 이름을 없애는 코드
    
            document.querySelectorAll(".scaleChage, .fontUp1, .fontUp2, .fontUp3, .fontShow").forEach((e) => {
                e.classList.remove("active");
                e.classList.remove("load");
            });


            // 스크롤 시 선언한 요소들에 active라는 클래스명을 붙이는 코드
    
            if (targetSection) {
                const scaleChageElement = targetSection.querySelector(".scaleChage");
                const fontUp1 = targetSection.querySelector(".fontUp1");
                const fontUp2 = targetSection.querySelector(".fontUp2");
                const fontUp3 = targetSection.querySelector(".fontUp3");
                const fontShow = targetSection.querySelector(".fontShow");


                if (scaleChageElement) {
                    scaleChageElement.classList.add("active");
                }
    
                if (fontUp1) {
                    fontUp1.classList.add("active");
                }

                if (fontUp3) {
                    fontUp3.classList.add("active");
                }
    
                if (fontUp2) {
                    fontUp2.classList.add("active");
                }
    
                if (fontShow) {

                    // Main에 들어갔을 시 링크에서 # 뒤에 있는 문장이 page-1일 경우
                    // 무조건 fontShow1 뒤에 있던 클래스 이름 active를 지우는 코드
                    
                    fontShow.classList.add("active");
                    if (hash === "page-1") {
                        document.querySelector(".fontShow").classList.remove("active");
                    }
                }       
            }
        };

  
        // 아래 코드는 myPageable 인스턴스를 소멸시켜 해당 인스턴스가 사용하고 있던
        // 자원들을 해제하고 메모리 누수를 방지, 이벤트 리스너 제거를 위해 넣음
        // 결과적으로 myPageable의 객체를 소멸시키는 코드
    
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

    useEffect(()=>{
        const interval = setInterval(()=>{
            nextSlide();        
        }, 6000);
        return () => clearInterval(interval);
    });
    

    // solarInfo 페이지 안의 JSX 구조에 값을 넣는 코드

    // slideIndex의 기본값이면 SolarInfo의 값은
    // solarInfoProps임

    const solarInfoProps = {
        fontUp1: "SLSL 태양광 모듈",
        fontUp2: "제품을 소개합니다",
        Route: "product",
        Button: "제품 소개",
      };
    
    // 이미지 태그의 /images/Slider${slideIndex+1}.jpg 경로에서
    // slideIndex가 바뀔 때마다 SolarInfo의 값이 바뀌게 하는 코드
      
      if (slideIndex === 1) {
        solarInfoProps.fontUp1 = "날짜와 지역을 선택하면";
        solarInfoProps.fontUp2 = "발전량을 예측해드립니다";
        solarInfoProps.Route = "mapselect";
        solarInfoProps.Button = "발전량 조회";
      } else if (slideIndex === 2) {
        solarInfoProps.fontUp1 = "흑자전환 날짜와";
        solarInfoProps.fontUp2 = "설치비용을 예측해드립니다";
        solarInfoProps.Route = "valueinput";
        solarInfoProps.Button = "설치비용 조회";
      }


    return (
        <article className="container" id="container">
            <section data-anchor="Page 1" className="pg-page pg-active" id="page-1">
                <div className="scaleChage">
                    <video muted autoPlay loop className="mainvideo">
                        <source src="./images/slslvideo.mp4" type="video/mp4" />
                    </video>
                    {/* SolarInfo.js에 아래 코드의 JSX가 있습니다 */}
                    <SolarInfo fontUp1="태양광 모듈 선택 시" fontUp2="발전 수익과 설치비용 예측" />
                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-anchor="Page 2" className="pg-page" id="page-2">
                <div className="scaleChage"> 
                    <div className="containerSlider">                    
                        <img
                        src={process.env.PUBLIC_URL + `/images/Slider${slideIndex+1}.jpg`}
                        className="slideImg"
                        />
                        {/* SolarInfo.js에 아래 코드의 JSX가 있습니다 */}
                        <SolarInfo {...solarInfoProps} />
                        {/* BtnSlider.js에 아래 코드의 JSX가 있습니다 */}
                        <BtnSlider moveSlide={nextSlide} direction={"next"}/> 
                        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>                                             
                    </div>
                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-anchor="Page 3" className="pg-page" id="page-3">
                <div className="scaleChage">
                <video muted autoPlay loop className="sub2video">
                    <source src="./images/askvideo.mp4" type="video/mp4"/>
                </video>
                    {/* SolarInfo.js에 아래 코드의 JSX가 있습니다 */}
                    <SolarInfo fontUp3="CONTACT US." fontUp2="SLSL과 함께하세요" Route= "inquiryinput" Button="문의하기"/>
                </div>
            </section>
        </article>
    );
}

export default Main;
