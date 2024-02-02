import React from "react";
import '../css/Product.css';

const Product= ()=>{
    return(
    <div>
        <p className="introduceproduct">제품 소개</p>
        <div className="productdetail">
            <div className="koreaproduct">
                <img src="images/koreacell.png" className="koreaproductimg"></img><br/>
                <p className="koreaproductname">한화 Q.PEAK DUO XL G11.7</p><br/>
                <p><span className="productDetail">출력</span> : 570Wp</p><br/>
                <p><span className="productDetail">최대 효율</span> : 21.7%</p><br/>
                <p><span className="productDetail">크기</span>(mm) : 2416 * 1134 * 35 </p><br/>
                <p><span className="productDetail">가격</span> : 43만 9570원</p>
            </div>
            <div className="usaproduct">
                <img src="images/usacell.png" className="usaproductimg"></img><br/>
                <p className="usaproductname">미국 AmeriSolar AS-8M120-HC</p><br/>
                <p><span className="productDetail">출력</span> : 580Wp</p><br/>
                <p><span className="productDetail">최대 효율</span> : 21.38%</p><br/>
                <p><span className="productDetail">크기</span>(mm) : 2172 * 1303 * 35 </p><br/>
                <p><span className="productDetail">가격</span> : 39만 7650원</p>
            </div>
        </div>
    </div>    
    )
}

export default Product;