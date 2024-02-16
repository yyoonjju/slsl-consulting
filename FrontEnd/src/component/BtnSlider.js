import React from "react";

// BtnSlider의 JSX 구조는 Main에서 값을 받음
// Main에서 받은 값을 확인 후 이미지를 내보냄. 결과적으로 Main의 BtnSlider에 나오게 됨

function BtnSlider({direction, moveSlide}) {
    return(
        <div>
            <button onClick={moveSlide} className={direction === "prev" ?  
            "btn-slide next" : "btn-slide prev"}>
                <img src={direction === "prev" ? process.env.PUBLIC_URL + `/images/SlideNext.png` : process.env.PUBLIC_URL + `/images/SlidePrev.png`}/>
            </button>
            <button onClick={moveSlide} className={direction === "next" ?  
            "btn-slide next" : "btn-slide prev" }>
                <img src={direction === "next" ? process.env.PUBLIC_URL + `/images/SlideNext.png` : process.env.PUBLIC_URL + `/images/SlidePrev.png`}/>
            </button>
        </div>
    )
}

export default BtnSlider;