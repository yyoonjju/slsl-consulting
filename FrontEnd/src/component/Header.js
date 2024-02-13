import { FaBars } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [clickedCategory, setClickedCategory] = useState('');
    const navigate = useNavigate();
    const currentPath = window.location.pathname;


    // isMenuOpen를 true로 변경하기 위한 코드
    // menuboard가 보이도록 하기 때문에 true로 해줌

    const handleMenuToggle = () => {
        setIsMenuOpen(true);
    };

    // 로고 클릭 시 메인 페이지로 이동하는 코드

    function logobtnclick(e) {
        window.location.href = "/"
    };

    // 제품 소개 클릭 시 Product로 이동하는 코드
    // 메인 페이지에서 navigate로 이동 시 "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node." 라는 버그가 있어
    // 메인 페이지일 때는 window.location.href 이용

    function productbtnclick(e) {
        if (currentPath === "/") {
            window.location.href = "/Product"
        } else {
            navigate("/Product");
        }
    };

    // 제품 소개 클릭 시 MapSelect로 이동하는 코드
    // 메인 페이지에서 navigate로 이동 시 "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node." 라는 버그가 있어
    // 메인 페이지일 때는 window.location.href 이용

    function predictInputClick(e) {
        if (currentPath === "/") {
            window.location.href = "/MapSelect"
        } else {
            navigate("/MapSelect");
        }
    };

    // 제품 소개 클릭 시 ValueInput로 이동하는 코드
    // 메인 페이지에서 navigate로 이동 시 "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node." 라는 버그가 있어
    // 메인 페이지일 때는 window.location.href 이용

    function valueInputClick(e) {
        if (currentPath === "/") {
            window.location.href = "/ValueInput"
        } else {
            navigate("/ValueInput");
        }
    }

    // 제품 소개 클릭 시 FAQ로 이동하는 코드
    // 메인 페이지에서 navigate로 이동 시 "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node." 라는 버그가 있어
    // 메인 페이지일 때는 window.location.href 이용

    function faqbtnclick(e) {
        if (currentPath === "/") {
            window.location.href = "/FAQ"
        } else {
            navigate("/FAQ");
        }
    };

    // 제품 소개 클릭 시 InquiryInput로 이동하는 코드
    // 메인 페이지에서 navigate로 이동 시 "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node." 라는 버그가 있어
    // 메인 페이지일 때는 window.location.href 이용

    function askbtnclick(e) {
        if (currentPath === "/") {
            window.location.href = "/InquiryInput"
        } else {
            navigate("/InquiryInput");
        }
    };

    // 링크 주소가 Product, MapSelect, ValueInput, FAQ, InquiryInput, ValueResult일 경우
    // 헤더의 요소들의 클래스 이름을 추가하기 위한 코드

    useEffect(() => {

        // setIsOpen을 true로 바꾸어 클래스 이름을 추가하기 위한 코드

        const visible = currentPath === '/Product' || currentPath === '/MapSelect' || currentPath === '/ValueInput' || currentPath === '/FAQ' || currentPath === '/InquiryInput' || currentPath === '/ValueResult';
        setIsOpen(visible);

        // setClickedCategory에 값을 집어 넣어 특정 카테고리 요소에 클래스를 이름을 추가하는 코드

        if (currentPath === '/Product') {
            setClickedCategory('product');
        } else if (currentPath === '/MapSelect') {
            setClickedCategory('predictInput');
        } else if (currentPath === '/ValueInput' || currentPath === '/ValueResult') {
            setClickedCategory('valueInput');
        } else if (currentPath === '/FAQ') {
            setClickedCategory('faq');
        } else if (currentPath === '/InquiryInput') {
            setClickedCategory('ask');
        }
    }, [window.location.pathname])

    return (
        // isOpen이 true면 클래스 이름에 active 추가
        <div className={`header ${isOpen ? 'active' : ''}`}>
            <div>

                {/* isOpen이 true면 클래스 이름에 active 추가 */}
                <img src="images/slsllogo.png" className={`logo1 ${isOpen ? 'active' : ''}`} onClick={logobtnclick} alt="logo" />
                <img src="images/slsllogoHeader.png" className={`logo2 ${isOpen ? '' : 'active'}`} onClick={logobtnclick} alt="logo" />

                {/* handleMenuToggle은 isMenuOpen을 true로 바꿈. true가 되면 menuboard가 보임 */}
                <div id="cursor" className="menuicon" onClick={handleMenuToggle} position="relative">

                    {/* FaBars는 햄버거 요소 JSX 코드임. isOpen이 true면 클래스 이름에 active 추가 */}
                    <FaBars size={50} color="white" className={`faBars ${isOpen ? 'active' : ''}`} />
                    {isMenuOpen && (<div className="menuboard">

                        {/* onClick 이벤트로 페이지를 이동함 */}
                        <button className="btn" onClick={productbtnclick}>제품 소개 </button><br />
                        <button className="btn" onClick={predictInputClick}>발전량 예측 조회 </button><br />
                        <button className="btn" onClick={valueInputClick}>태양광 발전수익 및<br />모듈비용 예측 </button><br />
                        <button className="btn" onClick={faqbtnclick}>FAQ </button> <br />
                        <button className="btn" onClick={askbtnclick}>문의하기</button>
                    </div>)}
                </div>
            </div>
            {/* isOpen이 true면 클래스 이름에 active 추가 */}
            <div className={`categoryBox ${isOpen ? 'active' : ''}`}>

                {/* clickedCategory에 특정 값이 들어오면 특정 카테고리에만 클래스 이름에 clicked가 추가하는 코드 */}
                {/* onClick으로 페이지를 이동함 */}
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