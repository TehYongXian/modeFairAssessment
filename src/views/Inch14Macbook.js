import React from "react";
import itemList from '../demoData.json'

function Inch14Macbook() {
    return (
        <div className="flex flex-wrap place-content-center max-w-maxW">
            {itemList.Macbook["14-inch"].map((inch14) => (
            <div className="p-2 m-1 bg-appleBackgroundGray w-1/3 rounded-2xl  max-w-maxW">
                
                <img width="452" height="420" alt="14-inch MacBook Pro, open, display, thin bezel, FaceTime HD camera, raised feet, rounded corners, Silver" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-silver-select-202310?wid=904&amp;hei=840&amp;fmt=jpeg&amp;qlt=90&amp;.v=1697230830269" class="rc-productbundle-image"/>
                <span>color</span>
                <ul>
                    <li><input type="radio" id="" class="colornav-value rc-dimension-colornav-input" value="space_gray" checked=""/>
                    <label for=":rd:" class="colornav-link rc-dimension-colornav-link" data-autom="dimensionColor-space_gray-MBP_M3_14-14inch-entry"><img width="32" height="32" alt="" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1697913361217" class="colornav-swatch"/><span class="colornav-label rc-productbundle-colornavlabel visuallyhidden">Space Grey</span></label>
                    
                    </li>
                    <li><input type="radio" id=":re:" class="colornav-value rc-dimension-colornav-input" name="color-:rc:" value="silver"/>
                    <label for=":re:" class="colornav-link rc-dimension-colornav-link" data-autom="dimensionColor-silver-MBP_M3_14-14inch-entry">
                    <img width="32" height="32" alt="" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-silver-cto-hero-202310_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1697913361277" class="colornav-swatch"/><span class="colornav-label rc-productbundle-colornavlabel visuallyhidden">Silver</span></label>
                    
                    </li>
                </ul>
                

                
                <div className="spec">
                    <div className="mt-5">
                        <img src={inch14.chipImg} alt="Apple M3 chip" width="51" height="51" ></img>
                    </div>
                    <div className="CoreSpec text-left pt-5 px-2">
                        <p><strong>{inch14.CPU}</strong></p>
                        <br/>
                        <p><strong>{inch14.GPU}</strong></p>
                        <br/>
                        <p><strong>{inch14.UniMemory}</strong></p>
                        <br/>
                        <p><strong>{inch14.Storage}</strong></p>
                        <br/>
                    </div> 
                    <div className="subSpec text-left px-2">
                        <ul>
                            <li>{inch14.display}</li>
                            <li>{inch14.IO}</li>
                            <li>{inch14.Keyboard}</li>
                            <li>{inch14.trackpad}</li>
                            <li>{inch14.PowerAdapter}</li>
                        </ul>
                    </div>
                    <div className="price text-left pt-5 px-2">
                        <h1><strong>{inch14.Price}</strong></h1>
                        <br/>
                        <p>or</p>
                        <br/>
                        <h1><strong>{inch14.Installment}</strong></h1>
                    </div>
                    <div className="text-left pt-5 px-2">
                        <p>Add a trade-in</p>
                        <span>Get credit towards a new Mac when you trade in your eligible computer. Or recycle it for free.**</span>
                        <a>Get started</a>
                    </div>
                    
                        <button className="mt-5 p-1 w-full bg-btnColor rounded-lg text-white">Select</button>
                    
                    <div className="pt-5 px-2">
                        <h3><strong>Need a moment?</strong></h3>
                        <p>Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.</p>
                        <div className="text-left pt-5 flex flex-row">
                            <div className="p-2">
                                <svg width="21" height="21" role="img" aria-hidden="true"><path fill="none" d="M0 0h21v21H0z"></path><path d="M12.8 4.25a1.202 1.202 0 0 1 1.2 1.2v10.818l-2.738-2.71a1.085 1.085 0 0 0-1.524 0L7 16.269V5.45a1.202 1.202 0 0 1 1.2-1.2h4.6m0-1H8.2A2.2 2.2 0 0 0 6 5.45v11.588a.768.768 0 0 0 .166.522.573.573 0 0 0 .455.19.644.644 0 0 0 .38-.128 5.008 5.008 0 0 0 .524-.467l2.916-2.885a.084.084 0 0 1 .118 0l2.916 2.886a6.364 6.364 0 0 0 .52.463.628.628 0 0 0 .384.131.573.573 0 0 0 .456-.19.768.768 0 0 0 .165-.522V5.45a2.2 2.2 0 0 0-2.2-2.2Z"></path></svg>
                            </div>
                            <span className="px-2">Save for later</span>
                        </div>
                    </div>
                    <div className="text-left pt-5 px-2 flex flex-row">
                        <div className="p-2">
                        <svg  viewBox="0 0 25 25" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path fill="#1d1d1f" d="m23.482 12.847-2.92-3.209A1.947 1.947 0 0 0 18.985 9H17V6.495a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v9.75a2.5 2.5 0 0 0 2.5 2.5h.548A2.746 2.746 0 0 0 6.75 21.02 2.618 2.618 0 0 0 9.422 19h6.681a2.744 2.744 0 0 0 5.347-.23h.735A1.656 1.656 0 0 0 24 16.98v-2.808a1.937 1.937 0 0 0-.518-1.325ZM8.426 18.745a1.74 1.74 0 0 1-3.352 0 1.577 1.577 0 0 1 .015-1 1.738 1.738 0 0 1 3.322 0 1.578 1.578 0 0 1 .015 1ZM9.447 18a2.726 2.726 0 0 0-5.394-.255H3.5a1.502 1.502 0 0 1-1.5-1.5v-9.75a1.502 1.502 0 0 1 1.5-1.5h11a1.502 1.502 0 0 1 1.5 1.5V18Zm10.972.77a1.738 1.738 0 0 1-3.337 0 1.573 1.573 0 0 1 0-1 1.742 1.742 0 1 1 3.337 1ZM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0 0 17 16.165V10h1.986a.976.976 0 0 1 .838.314l2.927 3.214a.95.95 0 0 1 .249.644Zm-1.324-3.36a.512.512 0 0 1 .174.38h-3.306a.499.499 0 0 1-.544-.528V11h1.073a.76.76 0 0 1 .594.268Z"></path></svg>
                        </div>
                        <div>
                            <p>Order by 3:00 pm. Delivers to <a>55188</a></p>
                            <p>Tue 16/07/2024 — Free</p>
                        </div>
                    </div>
                    <div className="text-left pt-5 px-2 flex flex-row">
                        <div className="p-2">
                            <svg viewBox="0 0 25 25"  role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path d="M18.5 5h-1.775a4.231 4.231 0 0 0-8.45 0H6.5A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21h12a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 18.5 5Zm-6-3a3.245 3.245 0 0 1 3.225 3h-6.45A3.245 3.245 0 0 1 12.5 2ZM20 18.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6h12A1.5 1.5 0 0 1 20 7.5Z"></path><path d="M14.4 12.448a1.592 1.592 0 0 1 .738-1.328 1.607 1.607 0 0 0-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 0 0-1.739 2.068 4.32 4.32 0 0 0 .723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 0 0 .474-.989 1.516 1.516 0 0 1-.926-1.403ZM12.583 10.357a1.346 1.346 0 0 0 .941-.5 1.594 1.594 0 0 0 .361-.974.731.731 0 0 0-.008-.136 1.5 1.5 0 0 0-1.016.528 1.547 1.547 0 0 0-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011Z"></path></svg>
                        </div>
                        <div>
                            <p>Order now. Pick up, in store:</p>
                            <p>Today at <a>Apple The Exchange TRX</a></p>
                        </div>
                    </div>
                </div>
            
            </div>
        ))}
        
        </div>
    )
}

export default Inch14Macbook