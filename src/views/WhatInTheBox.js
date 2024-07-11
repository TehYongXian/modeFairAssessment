import React from "react";
import Choice14inchInfo from "./Choice14inchInfo";

function WhatInTheBox() {
    return (
        <div className="m-10 p-10">
            <h1 className="">What's in the Box</h1>
            {/* <div className="flex flex-row p-10 m-10 h-32"> */}
            <div className="flex flex-row p-10 m-10">
                <div className="">
                    <img loading="lazy" width="568" height="392" alt="14-inch MacBook Pro, closed, exterior top, rounded corners, Apple logo centred, Silver" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-witb-silver-202310?wid=1136&amp;hei=784&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698689812419" class="rc-witb-item-image"/>
                    <p>14-inch MacBook Pro</p>
                </div>
                <div>
                    <img loading="lazy" width="45" height="392" alt="USB-C to MagSafe 3 cable, Silver MagSafe connector, Silver braided cable" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-witb-usb-c-magsafe-cable-silver-202310?wid=90&amp;hei=784&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698689792158" class="rc-witb-item-image"/>
                    <p>USB-C to MagSafe 3 Cable (2m)</p>
                </div>
                <div>
                    <img loading="lazy" width="242" height="392" alt="Power adapter, square, rounded corners, Apple logo centred, white" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-witb-70w-adapter-202310_GEO_MY?wid=484&amp;hei=784&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698689824641" class="rc-witb-item-image"/>
                    <p>USB-C Power Adapter</p>
                </div>
            </div>
            <div >
                <Choice14inchInfo/>
            </div>
            
        </div>
        
    )
}

export default WhatInTheBox