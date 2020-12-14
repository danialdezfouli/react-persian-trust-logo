import React from "react";
interface PropTypes {
    alt?: string;
    website?: string;
}
declare function ZarinPalLogo({ onClick, alt, website, ...props }: PropTypes & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>): JSX.Element;
declare namespace ZarinPalLogo {
    var defaultProps: {
        type: string;
        width: number;
        height: number;
        alt: string;
        style: {
            cursor: string;
        };
    };
}
export default ZarinPalLogo;
