
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import {UploadIcon, FileIcon} from '../Icons';

const mockAttachments = [{
  name: 'Hikoot_Client_Pitch_v2.pdf'
}];

class FileUploader extends React.Component {
  state = {}
  propTypes = {}

  constructor() {
    super();
  }

  renderAttachments() {
    return mockAttachments.map((a, i) => {
      return (
        <li className='file-uploader--file' key={i}>
          <FileIcon width='30' height='30'/>
          <span>{a.name}</span>
        </li>
      );
    });
  }

  render() {
    return (
      <div className='file-uploader'>
        <p className='file-uploader--title'>Upload Attachments</p>
        <ul className='file-uploader--attachment-list'>
          {this.renderAttachments()}
        </ul>
        <div className='file-uploader--drop-zone'>
          <UploadIcon cloudFillColor='#4192EC' backgroundFillColor='transparent' width={33} height={33}/>
          <span>You can also drop your files here</span>
        </div>
      </div>
    );
  }
}

export default FileUploader;
