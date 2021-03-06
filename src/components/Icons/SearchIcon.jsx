import React from 'react';
import Icon from './Icon';


const SearchIcon = (props) => {
  return (
    <Icon viewBox="0 0 21 23" {...props}>
      <path d="M19.773 20.489L15.4 15.926l.154-.204a9.116 9.116 0 0 0 1.83-5.5c0-4.924-3.835-8.926-8.541-8.926C4.135 1.296.3 5.297.3 10.222c0 4.923 3.835 8.924 8.543 8.924 1.79 0 3.502-.587 4.945-1.663l.212-.158.184.191 4.236 4.421a.934.934 0 0 0 .677.293.933.933 0 0 0 .676-.293 1.06 1.06 0 0 0 0-1.448zM2.225 10.222c0-3.796 2.966-6.89 6.618-6.89 3.65 0 6.615 3.093 6.615 6.89 0 3.796-2.964 6.888-6.615 6.888-3.652 0-6.618-3.093-6.618-6.888z"/>
    </Icon>
  );
};

SearchIcon.defaultProps = {
  title: 'SearchIcon',
  strokeWidth: '0.6',
  stroke: null,
  fill: '#989898',
  fillOpacity: 0.6,
};

export default SearchIcon;
