import React from "react";
interface PropTypes {
    website: string;
    token: string;
}
declare const EcUnionLogo: {
    ({ alt, token, website, onClick, ...props }: PropTypes & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>): JSX.Element;
    defaultProps: {
        width: number;
        height: number;
        alt: string;
        style: {
            cursor: string;
        };
    };
};
export default EcUnionLogo;
