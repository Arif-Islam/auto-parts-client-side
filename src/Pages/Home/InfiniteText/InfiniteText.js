import React, { useState } from 'react';
import './InfiniteText.css';
import { useSpring, animated } from "react-spring";


const InfiniteText = ({ text }) => {
    const [key, setKey] = useState(1);

    const scrolling = useSpring({
        from: { transform: "translate(100%,0)" },
        to: { transform: "translate(-100%,0)" },
        config: { duration: 20000 },
        reset: true,
        loop: true,
        //reverse: key % 2 == 0,
        onRest: () => {
            setKey(key + 1);
        }
    });

    return (
        <div key={key} style={{ overflowX: "hidden" }}>
            <animated.div style={scrolling}>{text}</animated.div>
        </div>
    );
};

export default InfiniteText;