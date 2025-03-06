import { useState, useEffect } from "react";
import "./DigitalClock.css";

export default function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString("fr-FR", { hour12: false });
    };

    return (
        <div className="clock-container">
            <div className="clock-card">
                <h1 className="clock-title">
                    <span className="bold pink">M</span>y{" "}
                    <span className="bold">D</span>igital{" "}
                    <span className="bold pink">C</span>lock
                </h1>
                <h2 className="clock-time">{formatTime(time)}</h2>
            </div>
        </div>
    );
}
