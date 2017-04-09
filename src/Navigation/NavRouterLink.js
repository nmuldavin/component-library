import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import isClient from '../utils/isClient';

const NavRouterLink = ({ path, customStyles, name, nestedMenu, showNestedMenu, toggleNestedMenu }) => {
  if (isClient) require('./NavRouterLink.css');
  const boxStyle = customStyles ? customStyles.box : null;
  const linkStyle = customStyles ? customStyles.link : null;
  const pathTo = path || `/${name.toLowerCase()}`;

  return (
    <li className={'NavRouterLink'} style={{ display: 'block', ...boxStyle }} >

      <Link to={pathTo} onClick={toggleNestedMenu}>
        <span style={{ ...linkStyle }}>{name}</span>
      </Link>

      {showNestedMenu && nestedMenu.length ?
        <div className="nested-menu">
          {nestedMenu.map((item, index) => (
            <Link key={index} to={item.path || `/${item.name.toLowerCase()}`} >
              <span className="nested-menu-link">{item.name}</span>
            </Link>
          ))}
        </div>
        : null
      }

    </li>
  );
};

NavRouterLink.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  customStyles: PropTypes.object,
  nestedMenu: PropTypes.array,
  showNestedMenu: PropTypes.bool,
  toggleNestedMenu: PropTypes.func,
};

NavRouterLink.defaultProps = {
  nestedMenu: [],
  showNestedMenu: false,
};

export default NavRouterLink;
