import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const overCyto = () => ` 
display: inline-block;
padding: 20px;
background-color: rgba(255,255,255,0.75);
text-decoration: none;
z-index: 1000;
position: absolute;
`;

const SourceLink = styled.a`
${overCyto}
right: 0;
top: 0;
`;

export const SourceButton = ({ href }) => <SourceLink href={href} target="_blank">Source (Github)</SourceLink>;

SourceButton.defaultProps = {
  href: '',
};

SourceButton.propTypes = {
  href: PropTypes.string,
};

export const AddButton = styled.button`
border: none;
${overCyto}
left: 0;
top: 0;
`;

const MatOuter = styled.div`
padding: 30px;
width: 100%;
height: ${props => (props.half ? '50%' : '100%')};
overflow: hidden;
`;

const MatInner = styled.div`
position: relative;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const Mat = ({ children, half }) => (
  <MatOuter half={half}><MatInner half={half}>{children}</MatInner></MatOuter>
);

Mat.defaultProps = {
  children: null,
  half: false,
};

Mat.propTypes = {
  children: PropTypes.node,
  half: PropTypes.bool,
};
