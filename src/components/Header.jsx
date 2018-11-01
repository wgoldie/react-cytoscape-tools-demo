import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Demos from './Demos';

const HeaderWrapper = styled.div`
flex: 0.8;
`;
const HeaderTitle = styled.h1`
font-size: 200%;
display: block;
padding: 20px;
`;
const HeaderList = styled.ul``;
const HeaderItem = styled.li`
display: inline-block;
border: 1px solid #000;
padding: 5px;
margin: 5px;
`;

const HeaderLink = styled(Link)`
text-decoration: none;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderTitle><a href="https://github.com/wgoldie/react-cytoscape-tools">react-cytoscape-tools</a> demos</HeaderTitle>
    <HeaderList>
      { Demos.map((Demo) => (
        <HeaderItem key={Demo.path}>
          <HeaderLink to={Demo.path}>
            {Demo.title}
          </HeaderLink>
        </HeaderItem>))
      }
    </HeaderList>
  </HeaderWrapper>);

export default Header;
