import React from 'react';
import Faq from "react-faq-component";
import './faq.css'

const FAQ = () => {
    const data = {
        title: "FAQ",
        rows: [
            {
                title: <p1>How much does TourneAIO cost?</p1>,
                content: <p>TourneAIO cost £240 initial cost and then £50 every month</p>,
            },
            {
                title: <p1>Which platforms does TourneAIO support?</p1>,
                content:
                    <p>TourneAIO currently only supports Windows devices</p>,
            },
            {
                title: <p1>Is my key unbindable?</p1>,
                content: <p>Yes! The key is unbindable after the 2 month cooldown period</p>,
            },
            {
                title: <p1>When is the next restock?</p1>,
                content: <p>Restocks for TourneAIO are announced via our <a href="https://twitter.com/AioTourne">Twitter</a></p>,
            },
        ],
    };

    const styles = {
        //bgColor: 'blue',
        //titleTextColor: "blue",
        rowTitleColor: "blue",
        rowContentColor: 'grey',
        arrowColor: "grey",
    };

    const config = {
        animate: true,
        //arrowIcon: "V",
        tabFocus: true
    };


    return (
        <div className='faq-box' id='faq'>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
            </div>
    );
}

export default FAQ;