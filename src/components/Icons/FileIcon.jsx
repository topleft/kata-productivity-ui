import React from 'react';
import Icon from './Icon';


const FileIcon = (props) => {

  props.stroke = null; // this icon only uses fill

  return (
    <Icon viewBox="0 0 28 28" {...props}>
      <g fill={props.fillColor} fillRule="evenodd">
        <rect fill={props.backgroundFillColor} width="28" height="27.754" rx="2" />
        <path d="M16.125 9.105v1.916h1.933l-1.933-1.916zm-.699 1.916V8.944h-4.54a.348.348 0 0 0-.35.346v9.001c0 .192.157.347.35.347h6.985c.193 0 .35-.155.35-.347v-6.577h-2.795v-.693zm3.493.001v7.962a.348.348 0 0 1-.35.346h-8.382a.348.348 0 0 1-.35-.346V8.598c0-.192.157-.347.35-.347h5.938v.001l2.793 2.769v.001z" />
      </g>
    </Icon>
  );
};

FileIcon.defaultProps = {
  title: 'FileIcon',
  fillColor: '#4DA1FF',
  backgroundFillColor: '#EDF5FF',
};

export default FileIcon;
