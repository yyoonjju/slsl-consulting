import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const currentPath =  window.location.pathname;;


    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    function logobtnclick(e){
        window.location.href="/"
    };

    function productbtnclick(e){
        if (currentPath === "/") {
            window.location.href="/Product"
        } else {
            navigate("/Product");
        }
    };

    function predictInputClick(e){
        if (currentPath === "/") {
            window.location.href="/MapSelect"
        } else {
            navigate("/MapSelect");
        }
    };

    function valueInputClick (e){
        if (currentPath === "/") {
            window.location.href="/ValueInput"
        } else {
        navigate("/ValueInput");
        }
    }

    function faqbtnclick(e){
        if (currentPath === "/") {
            window.location.href="/FAQ"
        } else {
        navigate("/FAQ");
        }
    };

    function askbtnclick(e){
        if (currentPath === "/") {
            window.location.href="/InquiryInput"
        } else {
        navigate("/InquiryInput");
        }
    };

    useEffect(() => {
        const visible = currentPath === '/Product' || currentPath === '/MapSelect' || currentPath === '/ValueInput' || currentPath === '/FAQ' || currentPath === '/InquiryInput' || currentPath === '/ValueResult';
        setIsOpen(visible);
    }, [window.location.pathname])

    return(
        <div className={`header ${isOpen ? 'active' : ''}`}>
            <div>
                
                <img src="images/slsllogo.png" className={`logo1 ${isOpen ? 'active' : ''}`} onClick={logobtnclick}/>
                <img src="images/slsllogoHeader.png" className={`logo2 ${isOpen ? '' : 'active'}`} onClick={logobtnclick}/>
                
                <div id="cursor" className="menuicon" onClick={handleMenuToggle} position="relative">
                    <FaBars size={50} color="rgb(26,51,92)" className={`faBars1 ${isOpen ? '' : 'active'}`}/>
                    <FaBars size={50} color="white" className={`faBars2 ${isOpen ? '' : 'active'}`}/>
                    {isMenuOpen && (<div className="menuboard">
                        <button className="btn" onClick = {productbtnclick}>제품 소개 </button><br/>
                        <button className="btn" onClick = {predictInputClick}>발전량 예측 조회 </button><br/>
                        <button className="btn" onClick = {valueInputClick}>태양광 발전수익 및<br/>모듈비용 예측 </button><br/>
                        <button className="btn" onClick = {faqbtnclick}>FAQ </button> <br/>
                        <button className="btn" onClick = {askbtnclick}>문의하기</button>
                    </div>)}
                </div>
            </div>
            <div className={`categoryBox ${isOpen ? 'active' : ''}`}>
                <div className="category" onClick = {productbtnclick}>제품 소개 </div><br/>
                <div className="category" onClick = {predictInputClick}>발전량 예측 조회 </div><br/>
                <div className="category" onClick = {valueInputClick}>태양광 발전수익 및 모듈비용 예측 </div><br/>
                <div className="category" onClick = {faqbtnclick}>FAQ </div> <br/>
                <div className="category" onClick = {askbtnclick}>문의하기</div>
            </div>
        </div>
    )
}

export default Header;