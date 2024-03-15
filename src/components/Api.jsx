import React, { useState, useEffect } from "react";
import './Api.css';

const Api = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = () => {
        fetch('https://api.quotable.io/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch quote');
                }
                return response.json();
            })
            .then(data => {
                setQuote(data.content);
            })
            .catch(error => console.error('Error fetching quote:', error));
    };

    return (
        <div className="container">
            <div className="box">
                <section className="api" id="api">
                    <h1 className="name">_____________Quotes Generator___________</h1>
                    <div className="content">
                        <blockquote className="quote">{quote}</blockquote>
                        <button className="btn" onClick={fetchQuote}>New Quote</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Api;
