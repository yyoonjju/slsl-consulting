import '../css/ValueResult.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

const ValueResult = () => {
    const location = useLocation();
    const formData = location.state && location.state.formData;

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
                <h2>ValueResult Page</h2>
                <p>Received Form Data:</p>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </section>

        </article>
    );
};

export default ValueResult;
