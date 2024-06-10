import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #87CEEB;
  padding: 20px;
  margin: 20px;
`;

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
