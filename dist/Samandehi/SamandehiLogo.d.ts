import React from "react";
interface PropTypes {
    verified?: boolean;
    sid: string | number;
    sp: string;
}
declare const SamandehiLogo: {
    ({ verified, alt, sid, sp, onClick, ...props }: PropTypes & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>): JSX.Element;
    defaultProps: {
        verified: boolean;
        width: number;
        height: number;
        alt: string;
        style: {
            cursor: string;
        };
    };
};
export default SamandehiLogo;
