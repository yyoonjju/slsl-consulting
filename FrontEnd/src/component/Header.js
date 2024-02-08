import { FaBars } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [clickedCategory, setClickedCategory] = useState('');
    const navigate = useNavigate();
    const currentPath = window.location.pathname;

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    function logobtnclick(e) {
        window.location.href = "/"
    };

    function productbtnclick(e) {
        if (currentPath === "/") {
            window.location.href = "/Product"
        } else {
            navigate("/Product");
        }
        setClickedCategory('product');
    };

    function predictInputClick(e) {
        if (currentPath === "/") {
            window.location.href = "/MapSelect"
        } else {
            navigate("/MapSelect");
        }
        setClickedCategory('predictInput');
    };

    function valueInputClick(e) {
        if (currentPath === "/") {
            window.location.href = "/ValueInput"
        } else {
            navigate("/ValueInput");
        }
        setClickedCategory('valueInput');
    }

    function faqbtnclick(e) {
        if (currentPath === "/") {
            window.location.href = "/FAQ"
        } else {
            navigate("/FAQ");
        }
        setClickedCategory('faq');
    };

    function askbtnclick(e) {
        if (currentPath === "/") {
            window.location.href = "/InquiryInput"
        } else {
            navigate("/InquiryInput");
        }
        setClickedCategory('ask');
    };

    useEffect(() => {
        const visible = currentPath === '/Product' || currentPath === '/MapSelect' || currentPath === '/ValueInput' || currentPath === '/FAQ' || currentPath === '/InquiryInput' || currentPath === '/ValueResult';
        setIsOpen(visible);
    }, [window.location.pathname])

    return (
        <div className={`header ${isOpen ? 'active' : ''}`}>
            <div>
                <img src="images/slsllogo.png" className={`logo1 ${isOpen ? 'active' : ''}`} onClick={logobtnclick} alt="logo" />
                <img src="images/slsllogoHeader.png" className={`logo2 ${isOpen ? '' : 'active'}`} onClick={logobtnclick} alt="logo" />
                <div id="cursor" className="menuicon" onClick={handleMenuToggle} position="relative">
                    <FaBars size={50} color="white" className={`faBars ${isOpen ? 'active' : ''}`} />
                    {isMenuOpen && (<div className="menuboard">
                        <button className="btn" onClick={productbtnclick}>제품 소개 </button><br />
                        <button className="btn" onClick={predictInputClick}>발전량 예측 조회 </button><br />
                        <button className="btn" onClick={valueInputClick}>태양광 발전수익 및<br />모듈비용 예측 </button><br />
                        <button className="btn" onClick={faqbtnclick}>FAQ </button> <br />
                        <button className="btn" onClick={askbtnclick}>문의하기</button>
                    </div>)}
                </div>
            </div>
            <div className={`categoryBox ${isOpen ? 'active' : ''}`}>
                <div className={`category ${clickedCategory === 'product' ? 'clicked' : ''}`} onClick={productbtnclick}>제품소개 </div><br />
                <div className={`category ${clickedCategory === 'predictInput' ? 'clicked' : ''}`} onClick={predictInputClick}>발전량 예측조회 </div><br />
                <div className={`category ${clickedCategory === 'valueInput' ? 'clicked' : ''}`} onClick={valueInputClick}>발전수익 및 모듈비용 예측 </div><br />
                <div className={`category ${clickedCategory === 'faq' ? 'clicked' : ''}`} onClick={faqbtnclick}>FAQ </div> <br />
                <div className={`category ${clickedCategory === 'ask' ? 'clicked' : ''}`} onClick={askbtnclick}>문의하기</div>
            </div>
        </div>
    )
}

export default Header;