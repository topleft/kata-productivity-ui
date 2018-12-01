import React from 'react';
import Icon from './Icon';


const UploadIcon = (props) => {

  props.stroke = null; // this icon only uses fill

  return (
    <Icon viewBox="0 0 55 55" {...props}>
      <defs>
        <rect id="b" width='55' height='55' rx="4" />
        <filter x="-46.3%" y="-44.5%" width="196.3%" height="196.3%" filterUnits="objectBoundingBox" id="a">
          <feOffset dx="1" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="8.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" in="shadowBlurOuter1" />
        </filter>
      </defs>
      <g fill="none">
        <use fill={props.backgroundFillColor} xlinkHref="#b" />
        <path d="M34.614 35.254a1.07 1.07 0 0 1-1.344-.704 1.078 1.078 0 0 1 .7-1.35c2.764-.873 4.165-3.113 4.165-6.659 0-4.074-3.3-7.387-7.36-7.387-3.528 0-6.565 2.523-7.225 6l-.219 1.157-1.128-.323a3.963 3.963 0 0 0-1.087-.155c-2.19 0-3.971 1.788-3.971 3.985 0 2.198 1.781 3.987 3.971 3.987l.22-.016c.598-.023 1.097.424 1.127 1.018.032.594-.422 1.1-1.014 1.132l-.072.006a3.295 3.295 0 0 1-.26.012c-3.373 0-6.117-2.754-6.117-6.139 0-3.385 2.744-6.139 6.116-6.139.195 0 .39.01.586.03C22.919 19.764 26.58 17 30.775 17c5.242 0 9.505 4.28 9.505 9.541 0 4.53-1.959 7.543-5.666 8.713zm-7.66-7.778c.003-.003.004-.009.007-.012a1.071 1.071 0 0 1 1.522 0c.002.002.002.006.006.01l2.96 2.97a1.08 1.08 0 0 1 0 1.523 1.07 1.07 0 0 1-1.517 0l-1.135-1.139v6.778c0 .595-.48 1.077-1.073 1.077a1.075 1.075 0 0 1-1.072-1.077v-6.782l-1.14 1.143a1.066 1.066 0 0 1-1.516 0 1.078 1.078 0 0 1 0-1.522l2.957-2.969z"
          fill={props.cloudFillColor} />
      </g>
    </Icon>
  );
};

UploadIcon.defaultProps = {
  title: 'UploadIcon',
  cloudFillColor: '#FFF',
  backgroundFillColor: '#808FA3',
};

export default UploadIcon;
