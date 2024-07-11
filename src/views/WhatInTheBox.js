import React from "react";
import Choice14inchInfo from "./Choice14inchInfo";

function WhatInTheBox() {
    return (
        <div className="m-10 p-10">
            <h1 className="">What's in the Box</h1>
            <div className="flex flex-row p-10 m-10 h-32">
                <div>
                    <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-witb-silver-202310?wid=1136&hei=784&fmt=p-jpg&qlt=95&.v=1698689812419"></img>
                    <p>14-inch MacBook Pro</p>
                </div>
                <div>
                    <img className="" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-witb-usb-c-magsafe-cable-silver-202310?wid=90&hei=784&fmt=p-jpg&qlt=95&.v=1698689792158" ></img>
                    <p>USB-C to MagSafe 3 Cable (2m)</p>
                </div>
                <div>
                    <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-witb-70w-adapter-202310_GEO_MY?wid=484&hei=784&fmt=p-jpg&qlt=95&.v=1698689824641"></img>
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