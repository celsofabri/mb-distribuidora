import styled from 'styled-components';
import { StyledWrapper } from 'global/styles/index';
import colors from 'global/styles/colors';

export const StyledBanner = styled.section`
  position: relative;
  display: block;
  width: 100%;
  height: 450px;

  ${StyledWrapper} {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
  }
`;

export const SytledBannerImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
  z-index: 10;
`;

export const StyledBannerTitle = styled.h3`
  position: relative;
  z-index: 11;
  display: inline-block;
  padding: 16px;
  font-size: 32px;
  color: ${colors.orange};
  background-color: ${colors.black}
`;

export const StyledBannerDescription = styled.div`
  position: relative;
  z-index: 11;
  display: block;
  color: ${colors.orange};

   * {
    display: inline-block;
    padding: 8px;
    background-color: ${colors.black}
  }
`;
