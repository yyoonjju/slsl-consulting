import React, { useState, useEffect } from "react";
import pageable from "pageable";
import { Link, useNavigate } from 'react-router-dom';

function Main() {

    const navigate = useNavigate();

    useEffect(() => {
        const selector = ".container";
        let myPageable;
    
        const initializePageable = () => {
            myPageable = new pageable(selector, {
                gap: 20,
            });
        };
    
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            const targetSection = document.getElementById(hash);
    
            document.querySelectorAll(".scaleChage, .fontUp1, .fontUp2, .fontUp3, .fontUp4, .fontUp5, .fontUp6, .fontShow1, .fontShow2, .fontShow3").forEach((element) => {
                element.classList.remove("active");
                element.classList.remove("load");
            });
    
            if (targetSection) {
                const scaleChageElement = targetSection.querySelector(".scaleChage");
                const fontUp1 = targetSection.querySelector(".fontUp1");
                const fontUp2 = targetSection.querySelector(".fontUp2");
                const fontUp3 = targetSection.querySelector(".fontUp3");
                const fontUp4 = targetSection.querySelector(".fontUp4");
                const fontUp5 = targetSection.querySelector(".fontUp5");
                const fontUp6 = targetSection.querySelector(".fontUp6");
                const fontShow1 = targetSection.querySelector(".fontShow1");
                const fontShow2 = targetSection.querySelector(".fontShow2");
                const fontShow3 = targetSection.querySelector(".fontShow3");
                if (scaleChageElement) {
                    scaleChageElement.classList.add("active");
                }
    
                if (fontUp1) {
                    fontUp1.classList.add("active");
                }
    
                if (fontUp2) {
                    fontUp2.classList.add("active");
                }

                if (fontUp3) {
                    fontUp3.classList.add("active");
                }

                if (fontUp4) {
                    fontUp4.classList.add("active");
                }

                if (fontUp5) {
                    fontUp5.classList.add("active");
                }

                if (fontUp6) {
                    fontUp6.classList.add("active");
                }
    
                if (fontShow1) {
                    fontShow1.classList.add("active");
                }

                if (fontShow2) {
                    fontShow2.classList.add("active");
                }

                if (fontShow3) {
                    fontShow3.classList.add("active");
                }
            }
        };
    
        const destroyPageable = () => {
            // Check if the container and myPageable exist before destroying pageable
            const container = document.querySelector(selector);
            if (container && myPageable) {
                myPageable.destroy();
            }
        };
    
        handleHashChange();
        initializePageable();
    
        window.addEventListener("hashchange", handleHashChange);
    
        const firstScaleChageElement = document.querySelector(".scaleChage");
        if (firstScaleChageElement) {
            firstScaleChageElement.classList.add("load");
        }
    
        return () => {
            destroyPageable();
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);
    

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
                    <div className="explain1">
                        <p>
                        <span className="fontUp1">태양광 발전량</span>
                        </p>
                        <p>
                        <span className="fontUp2">태양광 수익률</span>
                        </p>
                        <a href="/introduce" className="fontShow1">제품 소개</a>
                    </div>
                    <div className="explain2">
                        <p>
                        <span className="fontUp3">태양광 발전량2</span>
                        </p>
                        <p>
                        <span className="fontUp4">태양광 수익률2</span>
                        </p>
                        <a href="/introduce" className="fontShow2">제품 소개</a>
                    </div>
                    <div className="explain3">
                        <p>
                        <span className="fontUp5">태양광 발전량3</span>
                        </p>
                        <p>
                        <span className="fontUp6">태양광 수익률3</span>
                        </p>
                        <a href="/introduce" className="fontShow3">제품 소개</a>
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