import React from "react";
import Choice14inchInfo from "./Choice14inchInfo";
import Choice16inchInfo from "./Choice16inchInfo";

function WhatInTheBox16inch() {
    return (
        <div className="mx-auto px-auto text-center flex flex-col items-center justify-center pt-5 mt-7">
            <h1 className="text-4xl"><strong>What's in the Box</strong></h1>
            <div className="flex flex-row pt-5 mt-5 ">
                <div className="">
                    <img loading="lazy" width="568" height="392" alt="14-inch MacBook Pro, closed, exterior top, rounded corners, Apple logo centred, Silver" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-witb-silver-202310?wid=1136&amp;hei=784&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698689812419" class="rc-witb-item-image"/>
                    <p className="p-5 m-5">14-inch MacBook Pro</p>
                </div>
                    <div>
                        <div className="flex flex-col items-center justify-center bg-appleBackgroundGray">
                        <img loading="lazy" width="45" height="392" alt="USB-C to MagSafe 3 cable, Silver MagSafe connector, Silver braided cable" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-witb-usb-c-magsafe-cable-silver-202310?wid=90&amp;hei=784&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698689792158" className="rc-witb-item-image max-h-344px"/>
                        </div>
                            <p className="p-5 m-5">USB-C to MagSafe 3 Cable (2m)</p>
                    </div>
                
                <div className="">
                    <img loading="lazy" width="242" height="392" alt="Power adapter, square, rounded corners, Apple logo centred, white" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-witb-70w-adapter-202310_GEO_MY?wid=484&amp;hei=784&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698689824641" class="rc-witb-item-image"/>
                    <p className="p-5 m-5">USB-C Power Adapter</p>
                </div>
            </div>
            <div >
                <Choice16inchInfo/>
            </div>
            
        </div>
        
    )
}

export default WhatInTheBox16inch