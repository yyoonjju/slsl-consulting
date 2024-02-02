import React from "react";

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