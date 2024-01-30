import React, { useState, useEffect } from "react";
import pageable from "pageable";


function Main() {
    useEffect(() => {
        const selector = ".container";
        const myPageable = new pageable(selector, {
            gap: 20,
        });

        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            const targetSection = document.getElementById(hash);

            document.querySelectorAll(".scaleChage, .fontUp1, .fontUp2").forEach((element) => {
                element.classList.remove("active");
                element.classList.remove("load");
            });

            if (targetSection) {
                const scaleChageElement = targetSection.querySelector(".scaleChage");
                const li = targetSection.querySelector("li");
                const fontUp1 = targetSection.querySelector(".fontUp1");
                const fontUp2 = targetSection.querySelector(".fontUp2");
                if (scaleChageElement) {
                    scaleChageElement.classList.add("active");
                }
                if (fontUp1) {
                    fontUp1.classList.add("active");
                }
                if (fontUp2) {
                    fontUp2.classList.add("active");
                }
            }
        };

        handleHashChange();

        window.addEventListener("hashchange", handleHashChange);

        const firstScaleChageElement = document.querySelector(".scaleChage");
        if (firstScaleChageElement) {
            firstScaleChageElement.classList.add("load");
        }  

        return () => {
            myPageable.destroy();
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