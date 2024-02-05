import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import '../static/css/Header.css';

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

    function askbtnclick(e){
        window.location.href="/ask"
    };

    function valueInputClick (e){
        window.location.href="/ValueInput"
    }

    return(
        <div className="header">
            <button>
                <img src="images/slsllogo.png" className="logo" onClick={logobtnclick}/>
            </button>
           
            <div className="menuicon" onClick={handleMenuToggle} position="relative">
                <FaBars size={50} color="rgb(26,51,92)" position="absolute"/>
                {isMenuOpen && (<div className="menuboard">
                                    <button className="productbtn" onClick={productbtnclick}>제품 소개 </button><br/>
                                    <button className="producebtn">발전량 예측 조회 </button><br/>
                                    <button className="calculatebtn" onClick = {valueInputClick}>태양광 발전수익 및 설치비용 예측 </button><br/>
                                    <button className="infobtn">자료실 </button> <br/>
                                    <button className="askbtn" onClick={askbtnclick}>문의하기</button>
                                </div>)}
            </div>
        </div>
    )
}

export default Header;