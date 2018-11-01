import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Demos from './Demos';

const HeaderWrapper = styled.div`
flex: 1;
`;
const HeaderTitle = styled.h1``;
const HeaderList = styled.ul``;
const HeaderItem = styled.li``;
const HeaderLink = styled(Link)``;

const Header = () => (
  <HeaderWrapper>
    <HeaderTitle>react-cytoscape-tools demos</HeaderTitle>
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
