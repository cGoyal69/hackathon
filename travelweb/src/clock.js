import { useState } from "react";
export function Clock()
{
    const [time, setTime] = useState(new Date());
    setInterval(() => {
        setTime(new Date());
    }, 1000);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const hour = hours % 12 || 12;
  
    return (
        <>
            {hour}:{minutes}{ampm}
        </>
    );
}