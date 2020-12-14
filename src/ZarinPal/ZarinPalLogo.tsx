import React from "react";
import ZarinPalPng from "./zarinpal.png";

interface PropTypes {
  // type?: "svg" | "png";
  alt?: string;
  website?: string;
}

function ZarinPalLogo({
  // type,
  onClick,
  alt,
  website,
  ...props
}: PropTypes &
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >) {
  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (onClick) {
      onClick(e);
    } else
      window.open(
        "https://www.zarinpal.com/trustPage/" +
          (website || window.location.hostname),
        "Popup",
        "width=450, height=600, scrollbars=no, resizable=no"
      );
  };

  return (
    <div id="zarinpal-logo">
      <img
        onClick={handleClick}
        // src={type === "png" ? ZarinPalPng : ZarinPalSvg}
        src={ZarinPalPng}
        alt={alt}
        {...props}
      />
    </div>
  );
}

ZarinPalLogo.defaultProps = {
  type: "png",
  width: 80, // 60
  height: 114, // 85
  alt: "دروازه پرداخت معتبر زرین پال",
  style: { cursor: "pointer" },
};

export default ZarinPalLogo;
