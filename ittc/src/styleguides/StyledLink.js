import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = Styled(({ ...props }) => <Link {...props} />)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    color: red;
}
`;