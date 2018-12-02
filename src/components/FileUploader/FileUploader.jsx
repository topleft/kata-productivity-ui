
import React from 'react';
import './styles.scss';
import {UploadIcon, FileIcon} from '../Icons';
import Button from '../Button';

const mockAttachments = [{
  name: 'Hikoot_Client_Pitch_v2.pdf'
}];

class FileUploader extends React.PureComponent {

  renderAttachments() {
    return mockAttachments.map((a, i) => {
      return (
        <li className='file-uploader--file' key={i}>
          <FileIcon width='30' height='30'/>
          <span>{a.name}</span>
          <div className='file-uploader--file--buttons'>
            <div>
              <Button type='text-only'>+ Add Note</Button>
              <Button type='text-only'>Edit</Button>
              <Button type='text-only'>Remove</Button>
            </div>
            <div>
              <Button>+ Add Files</Button>
            </div>
          </div>
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
