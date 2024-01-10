import React from "react";
import {
  StripNoticeLogoSection,
  StripNoticeLogoSectionItems,
  StripNoticeLogoSectionItem,
  StripNoticeLogoSectionItemImg,
} from "../../style";
export const LogoItem = ({src,alt}) => {
  return (
    <StripNoticeLogoSectionItem>
        <StripNoticeLogoSectionItemImg src={src} alt={alt} />
    </StripNoticeLogoSectionItem>
  );
};
