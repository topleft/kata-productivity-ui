
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ContentContainer = (props) => {
  return (
    <div className='content-container'>
      <h1 className='content-container--title'>{props.title}</h1>
      <div className='content-container--content'>
        {props.children}
      </div>
    </div>
  );
};

ContentContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default ContentContainer;
