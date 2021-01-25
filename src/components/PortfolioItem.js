import React from 'react';
import Styled from 'styled-components';

const PortfolioItem = ({ name, image, url, description, tech }) => {
  return (
    <div className="portfolioItemContainer">
      <img src="" />
      <Header>{name}</Header>
    </div>
  );
};

const Header = Styled.h2`
  font-size: 3rem;
`;

export default PortfolioItem;
