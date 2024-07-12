import React from "react";

function CompareMac() {
    return (
        <div className="m-5 p-5 text-center items-center justify-center text-center bg-appleBackgroundGray rounded-2xl">
            <div className="mb-10 pb-10">
                <h1><strong>Compare Mac models</strong></h1>
                <a href="https://www.apple.com/my/mac/compare/">Choose the best Mac for you</a>
            </div>
            
            <div className="justify-center items-center p-2 m-2">
                <img 
                    src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-compare-202310?wid=1920&amp;hei=710&amp;fmt=png-alpha&amp;.v=1696970981940" 
                    alt="Mac models, 14-inch MacBook Pro, 16-inch MacBook Pro, iMac, Mac mini, Mac Studio, 15-inch MacBook Air, 13-inch MacBook Air, Mac Pro" 
                    width="960" 
                    height="355" 
                    className="dd-hero ir mx-auto"
                />
            </div>
        </div>
    )
}

export default CompareMac