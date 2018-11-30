
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


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
        <li key={i}>{a.name}</li>
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
        </div>
      </div>
    );
  }
}

// const FileUploader = () => {
//   return <div className='__template'></div>;
// }

// FileUploader.propTypes = {};

export default FileUploader;
