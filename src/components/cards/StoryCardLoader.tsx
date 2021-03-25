import React, {FunctionComponent} from 'react';
import ContentLoader from "react-content-loader";


const StoryCardLoader: FunctionComponent<any> = (props) => {
    return (<ContentLoader
        speed={2}
        width={476}
        height={122}
        viewBox="0 0 476 124"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="1" y="113" rx="3" ry="3" width="88" height="6"/>
        <rect x="4" y="28" rx="3" ry="3" width="52" height="6"/>
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6"/>
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6"/>
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6"/>
    </ContentLoader>)
}
export default StoryCardLoader
