import React, {useState, useEffect} from "react";
import { millisecondsToString } from "../helpers/time_formatter";
import { set_duration } from "../reducers/SessionReducer";
import { useDispatch } from "react-redux";

const Timer = () => {
    const dispatch = useDispatch()
    const [time, setTime] = useState(0);
    useEffect(() => {
        let interval;
        interval = setInterval(() => {
            dispatch(set_duration(millisecondsToString(time)))
            setTime((prevTime) => prevTime + 1000);
        }, 1000);
        return () => clearInterval(interval);
    }, [dispatch, time]);


    return (
        <div className="stopwatch">
            <div className="numbers text-left mt-4">
              <b> Workout Duration: </b> {millisecondsToString(time)}
            </div>
        </div>
    );
};


export default Timer;