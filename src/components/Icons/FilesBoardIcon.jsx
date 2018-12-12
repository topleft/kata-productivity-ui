import React from 'react';
import Icon from './Icon';


const FilesBoardIcon = (props) => {
  props.stroke = null; // this icon only uses fill
  return (
    <Icon viewBox="0 0 18 22" {...props}>
      <g>
        <path d="M1.403.95a.472.472 0 0 0-.468.475v18.997c0 .262.21.475.468.475h14.963a.472.472 0 0 0 .468-.475V6.37L11.497.95H1.403zm14.963 20.897H1.403c-.774 0-1.403-.64-1.403-1.425V1.425C0 .639.63 0 1.403 0H11.69c.124 0 .243.05.33.14l5.612 5.698c.088.09.137.21.137.336v14.248c0 .785-.63 1.425-1.403 1.425z" />
        <path d="M17.302 6.649H11.69a.471.471 0 0 1-.467-.475V.95h.935V5.7h5.144v.949zM8.885 8.074H3.273a.471.471 0 0 1-.467-.475c0-.262.21-.475.467-.475h5.612c.258 0 .467.213.467.475s-.21.475-.467.475M14.496 10.923H3.273a.471.471 0 0 1-.467-.475c0-.262.21-.475.467-.475h11.223c.258 0 .468.213.468.475 0 .263-.21.475-.468.475M14.496 13.773H3.273a.471.471 0 0 1-.467-.475c0-.262.21-.475.467-.475h11.223c.258 0 .468.213.468.475s-.21.475-.468.475M14.496 16.622H3.273a.471.471 0 0 1-.467-.474c0-.263.21-.475.467-.475h11.223c.258 0 .468.212.468.475 0 .262-.21.474-.468.474" />
      </g>
    </Icon>
  );
};

FilesBoardIcon.defaultProps = {
  title: 'FilesBoardIcon'
};


export default FilesBoardIcon;