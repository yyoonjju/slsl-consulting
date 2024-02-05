import '../css/ValueResult.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

const ValueResult = () => {
    const location = useLocation();
    const formData = location.state && location.state.formData;

    console.log(formData);

    //지역
    const selectLocal = formData.selectLocal;

    //패널
    const selectPanel = formData.selectPanel;

    //면적
    const inputArea = formData.inputArea;

    //시작익
    const startDate = formData.startDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    
    //종료일
    const endDate = formData.endDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    
    if (!formData) {
        // formData가 없을 때 처리
        return <h2>No form data available.</h2>;
    }

    // formData를 이용하여 결과를 표시
    return (
        <article className='ValueResultPages'>
            <div id = "ValueResultTitle">
                <h1>발전수익 계산</h1>
            </div>
            <section className='ValueResult'>
                <div>{selectLocal}</div>
                <div>{selectPanel}</div>
                <div>{inputArea}</div>
                <div>{startDate}</div>
                <div>{endDate}</div>
        
            </section>

        </article>
    );
};

export default ValueResult;
