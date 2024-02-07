import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


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

    function valueInputClick (e){
        window.location.href="/ValueInput"
    }

    function faqbtnclick(e){
        window.location.href="/FAQ"
    };

    function askbtnclick(e){
        window.location.href="/InquiryInput"
    };

    useEffect(() => {
        const currentPath =  window.location.pathname;;
        const unVisible = currentPath === '/product' || currentPath === '/MapSelect' || currentPath === '/ValueInput' || currentPath === '/FAQ' || currentPath === '/InquiryInput';
        setIsOpen(unVisible);
    }, [window.location.pathname])

    return(
        <div className={`header ${isOpen ? 'active' : ''}`}>
            <div>
                <img src="images/slsllogo.png" className="logo" onClick={logobtnclick}/>
                
                <div id="cursor" className="menuicon" onClick={handleMenuToggle} position="relative">
                    <FaBars size={50} color="white" position="absolute"/>
                    {isMenuOpen && (<div className="menuboard">
                        <button className="btn" onClick={productbtnclick}>제품 소개 </button><br/>
                        <button className="btn" onClick = {predictInputClick}>발전량 예측 조회 </button><br/>
                        <button className="btn" onClick = {valueInputClick}>태양광 발전수익 및<br/>모듈비용 예측 </button><br/>
                        <button className="btn" onClick={faqbtnclick}>FAQ </button> <br/>
                        <button className="btn" onClick={askbtnclick}>문의하기</button>
                    </div>)}
                </div>
            </div>
            <div className={`categoryBox ${isOpen ? 'active' : ''}`}>
                <button className="category" onClick = {productbtnclick}>제품 소개 </button><br/>
                <button className="category" onClick = {predictInputClick}>발전량 예측 조회 </button><br/>
                <button className="category" onClick = {valueInputClick}>태양광 발전수익 및 모듈비용 예측 </button><br/>
                <button className="category" onClick = {faqbtnclick}>FAQ </button> <br/>
                <button className="category" onClick = {askbtnclick}>문의하기</button>
        </div>     
        </div>
    )
}

export default Header;