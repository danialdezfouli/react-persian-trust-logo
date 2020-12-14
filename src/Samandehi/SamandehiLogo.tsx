import React from "react";
import samandehiVerified from "./samandehi-verified.png";
import samandehiUnVerified from "./samandehi.png";

interface PropTypes {
  verified?: boolean;
  sid: string | number;
  sp: string;
}

const SamandehiLogo = ({
  verified,
  alt,
  sid,
  sp,
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
        `https://logo.samandehi.ir/Verify.aspx?id=${sid}&p=${sp}`,
        "Popup",
        "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30"
      );
  };

  return (
    <div id="samandehi-logo">
      <img
        src={verified ? samandehiVerified : samandehiUnVerified}
        alt={alt}
        onClick={handleClick}
        {...props}
      />
    </div>
  );
};

SamandehiLogo.defaultProps = {
  verified: true,
  width: 150,
  height: 150,
  alt: "ثبت شده در وب سایت ساماندهی",
  style: { cursor: "pointer" },
};

export default SamandehiLogo;
