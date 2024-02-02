import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    function logobtnclick(e){
        window.location.href="/"
    };

    function productbtnclick(e){
        window.location.href="/product"
    };

    function predictInputClick(e){
        window.location.href="/MapSelect"
    };

    function askbtnclick(e){
        window.location.href="/InquiryInput"
    };

    function faqbtnclick(e){
        window.location.href="/FAQ"
    };

    function valueInputClick (e){
        window.location.href="/ValueInput"
    }

    return(
        <div className="header">
                <img src="images/slsllogo.png" className="logo" onClick={logobtnclick}/>
            <div id="cursor" className="menuicon" onClick={handleMenuToggle} position="relative">
                <FaBars size={50} color="rgb(26,51,92)" position="absolute"/>
                {isMenuOpen && (<div className="menuboard">
                    <button className="btn" onClick={productbtnclick}>제품 소개 </button><br/>
                    <button className="btn" onClick = {predictInputClick}>발전량 예측 조회 </button><br/>
                    <button className="btn" onClick = {valueInputClick}>태양광 발전수익 및 설치비용 예측 </button><br/>
                    <button className="btn" onClick={faqbtnclick}>FAQ </button> <br/>
                    <button className="btn" onClick={askbtnclick}>문의하기</button>
                </div>)}
            </div>
        </div>
    )
}

export default Header;