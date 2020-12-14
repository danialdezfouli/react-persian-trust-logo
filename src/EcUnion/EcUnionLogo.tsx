import React from "react";
import ecunion from "./ecunion.png";

interface PropTypes {
  website: string;
  token: string;
}

const EcUnionLogo = ({
  alt,
  token,
  website,
  onClick,
  ...props
}: PropTypes &
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >) => {
  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (onClick) {
      onClick(e);
    } else
      window.open(
        `https://www.ecunion.ir/verify/${website}?token=${token}`,
        "Popup",
        "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
      );
  };

  return (
    <div id="ecunion-logo">
      <img src={ecunion} alt={alt} onClick={handleClick} {...props} />
    </div>
  );
};

EcUnionLogo.defaultProps = {
  width: 90,
  height: 119,
  alt: "عضو اتحادیه کشوری کسب و کار های مجازی",
  style: { cursor: "pointer" },
};

export default EcUnionLogo;
