import React, { useEffect, useState } from "react";
import pageable from "pageable";
import BtnSlider from "./BtnSlider";
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
    
            document.querySelectorAll(".scaleChage, .fontUp1, .fontUp2, .fontShow1").forEach((element) => {
                element.classList.remove("active");
                element.classList.remove("load");
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

    useEffect(()=>{
        const interval = setInterval(()=>{
            nextSlide();        
        }, 8000);
        return () => clearInterval(interval);
    });


    return (
        <div className="container" id="container">
            <section data-anchor="Page 1" className="pg-page pg-active" id="page-1">
                <div className="scaleChage">
                    <div className="explain">
                        <p>
                        <span className="fontUp1">태양광 발전량</span>
                        </p>
                        <p>
                        <span className="fontUp2">태양광 수익률</span>
                        </p>
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
                        <div className={`slideFont${slideIndex+1}`}>                  
                            <p>
                                <span className="fontUp1">태양광 발전량</span>
                            </p>
                            <p>
                                <span className="fontUp2">태양광 수익률</span>
                            </p>
                            <a href="/product" className="fontShow1">제품 소개</a>
                        </div>
                        <BtnSlider moveSlide={nextSlide} direction={"next"}/> 
                        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>                                                      
                    </div>
                </div>
            </section>

            <section data-anchor="Page 3" className="pg-page" id="page-3">
                <div className="scaleChage">
                    <div className="explain">
                        <p>
                        <span className="fontUp1">태양광 발전량</span>
                        </p>
                        <p>
                        <span className="fontUp2">태양광 수익률</span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;