import React from "react";
import {
  TimerPart, TimerTitle, TimeBody, TimeItem, TimeNum, TimeUnit
} from "./timer.style";
const TimerContainer = () => {
  return (
    <>
      <TimerPart>
        <TimerTitle>CounTDoWn To MINTInG</TimerTitle>
        <TimeBody>
          <TimeItem>
            <TimeNum>42</TimeNum>
            <TimeUnit>Days</TimeUnit>
          </TimeItem>
          <TimeItem>
            <TimeNum>06 </TimeNum>
            <TimeUnit>Hours</TimeUnit>
          </TimeItem>
          <TimeItem>
            <TimeNum>53</TimeNum>
            <TimeUnit>Minutes  </TimeUnit>
          </TimeItem>
          <TimeItem>
            <TimeNum>09</TimeNum>
            <TimeUnit>Seconds</TimeUnit>
          </TimeItem>
        </TimeBody>
      </TimerPart>
    </>
  );
};
export default TimerContainer;
