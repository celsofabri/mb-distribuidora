import React from 'react';
import { StyledWrapper } from 'global/styles/index';
import { 
  StyledBanner,
  SytledBannerImg,
  StyledBannerTitle,
  StyledBannerDescription
} from './styles';
import ImgBanner from 'global/assets/banner01.jpg';

const Banner = () => {

  return(
    <StyledBanner>
      <SytledBannerImg 
        src={ImgBanner} 
        alt="Cervejas em Promoção"
      />
      <StyledWrapper>
        <StyledBannerTitle>Aqui vem um título para o banner</StyledBannerTitle>
        <StyledBannerDescription>
          <p>Aqui vem um breve descrição para o banner</p>
        </StyledBannerDescription>
      </StyledWrapper>
    </StyledBanner>
  );
}

export default Banner;