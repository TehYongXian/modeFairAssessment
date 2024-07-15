import React, { useState, useEffect } from 'react';
import itemList from "../../demoData.json"
import Footer2 from "../Footer2";

function Inch14M3Max() {
    const [specCustomise, setSpecCustomise] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({
        Chip: 'M3Max14CPU30GPU',
        Memory: '36GB',
        Storage: '1TB',
    });

    useEffect(() => {
        setSpecCustomise(itemList['Macbook']['14inchM3Max']);
    }, []);

    const handleOptionChange = (optionCategory, optionValue) => {
        setSelectedOptions(prevOptions => ({
            ...prevOptions,
            [optionCategory]: optionValue,
        }));
    };

    const calculateTotalPrice = () => {
        if (!specCustomise) return 0;
        return (
            specCustomise.minPrice +
            specCustomise.Chip[selectedOptions.Chip] +
            specCustomise.Memory[selectedOptions.Memory] +
            specCustomise.Storage[selectedOptions.Storage]
        );
    };

    const installment = () => {
        if(!specCustomise) return 0;
        return (
            (specCustomise.minPrice +
            specCustomise.Chip[selectedOptions.Chip] +
            specCustomise.Memory[selectedOptions.Memory] +
            specCustomise.Storage[selectedOptions.Storage]) / 24
        );
    }
      
    return(
        <div className="max-w-maxW mx-auto mb-24">
            <div className="flex items-center justify-center bg-textGray w-full p-3 text-xs">
                <p className='learnMore text-center '>
                Buy MacBook Pro with education savings. Plus get AirPods. <a href="https://www.apple.com/my-edu/store" ><sup> ◊◊◊ </sup>Learn more > </a>
                </p>
            </div>
            <div className="infoSpec flex flex-col md:flex-row m-2 p-2">
                <div className="w-full md:w-2/5 p-5 mt-5 md:sticky top-5 h-full overflow-y-auto">
                    <div className="text-center">
                    <img width="386" height="233" alt="14-inch MacBook Pro, open, display, thin bezel, FaceTime HD camera, raised feet, rounded corners, Space Black" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-m3-max-pro-spaceblack-cto-hero-202310?wid=772&amp;hei=466&amp;fmt=jpeg&amp;qlt=90&amp;.v=1697913381727" class="rf-configuration-hero-image"/>
                        <div className="p-2 m-2">
                        <a className="text-blue-500">View gallery</a>
                        </div>
                    </div>
                    <ul className="flex justify-center w-full"> 
                    <li class="p-2 m-2 flex flex-col items-center">
                            <div class="as-svgicon-container ">
                                <svg viewBox="0 0 35 35"  role="img" aria-hidden="true" width="35px" height="35px">
                                    <path fill="none" d="M0 0h35v35H0z"></path>
                                    <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748v9.471a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-4.538 2.446l9.651 5.566-4.4 2.5-9.823-5.58c.038-.026.07-.059.111-.081zM7.788 23.539A1.5 1.5 0 017 22.219v-9.471a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z">
                                    </path>
                                </svg>
                            </div>
                            <p class="as-buystrip-title ">
                                <span>
                                    Free delivery
                                </span>
                            </p>
                        </li>
                        
                        <li class="p-2 m-2 flex flex-col items-center">
                            <div class="as-svgicon-container">
                                <svg viewBox="0 0 35 35" role="img" aria-hidden="true" width="35px" height="35px">
                                    <path fill="none" d="M0 0h35v35H0z"></path>
                                    <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748v9.471a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-4.538 2.446l9.651 5.566-4.4 2.5-9.823-5.58c.038-.026.07-.059.111-.081zM7.788 23.539A1.5 1.5 0 017 22.219v-9.471a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z"></path>
                                </svg>
                            </div>
                            <p class="as-buystrip-title">
                                <span>
                                    Free delivery
                                </span>
                            </p>
                        </li>

                    </ul>
                    <div className="flex flex-col items-center justify-center w-full">
                        <p>Have questions about buying a Mac?</p>
                        <p className="text-blue-500">Chat with a Mac Specialist</p>
                    </div>
                </div>
                {/* right scroll */}
                <div className="w-full md:w-3/5 rightDetails p-5 ml-auto md:overflow-y-auto md:sticky">
                    <div>
                        <h1 className="p-2 m-2 text-4xl"><strong>specCustomiseise your 14‑inch MacBook Pro - Space Black</strong></h1>
                    <div className="p-2 m-2">
                        <p className="pt-2 text-gray-500">Apple M3 Max chip with 14‑core CPU, 30‑core GPU and 16‑core Neural Engine</p>
                        <p className="pt-2 text-gray-500">36GB unified memory</p>
                        <p className="pt-2 text-gray-500">1TB SSD storage</p>
                        <p className="pt-2 text-gray-500">14-inch Liquid Retina XDR display²</p>
                        <p className="pt-2 text-gray-500">96W USB-C Power Adapter</p>
                        <p className="pt-2 text-gray-500">Three Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port</p>
                        <p className="pt-2 text-gray-500">Backlit Magic Keyboard with Touch ID - US English</p>
                    </div>
                    </div>
                    <div className="border-solid border-b border-#D3D3D5">
                        {/* This is border */}
                    </div>
                    <div className="p-2 m-2">
                        <p ><strong>Add a Trade-in</strong></p>
                        <p className="pt-2 text-gray-500">Get credit towards a new Mac when you trade in your eligible computer. Or recycle it for free.**</p>
                        <p className="pt-2 text-blue-600"><a>Get started</a></p>
                    </div>
                    <div className="border-solid border-b border-#D3D3D5">
                        {/* This is border */}
                    </div>
                    {/* Choice */}


                    {specCustomise && (
                    <div>
                    <div className="p-2 m-2">
                        <p ><strong>Chip (Processor)</strong></p>
                        <p className="pt-2 text-blue-600"><a>Which chip is right for you?</a></p>
                        <div className="p-2 m-2">
                                {Object.keys(specCustomise.Chip).map((chip) => (  
                                    <button
                                        
                                        onClick={() => handleOptionChange('Chip', chip)}
                                        className={`m-2 p-2 border ${selectedOptions.Chip === chip ? 'border-blue-500 bg-blue-100' : 'border-gray-300'} border border-solid border-black p-4 mt-4 rounded-2xl w-full`}
                                    >
                                    <div className='flex flex-row'>
                                        <span className="w-2/3 text-left">{chip}</span>
                                        <span className='w-1/3 text-center place-content-center text-right p-2'>{specCustomise.Chip[chip]}</span>
                                    </div>
                                    </button>  
                                ))}
                            
                            <div className="p-2 m-2">
                                <p className="pt-2 text-gray-500">Select M3 Max with 30-core GPU to add 96GB of memory.</p>
                                <p className="pt-2 text-gray-500">Select M3 Max with 40-core GPU to add 48GB, 64GB, or 128GB.</p>
                            </div>
                        </div>
                    </div>
                
                    <div className="p-2 m-2">
                        <p ><strong>Memory</strong></p>
                        <p className="pt-2 text-blue-600"><a>How much memory is right for you?</a></p>
                        <div>
                            {Object.keys(specCustomise.Memory).map((memory) => (  
                                <button
                                    
                                    onClick={() => handleOptionChange('Memory', memory)}
                                    className={`m-2 p-2 border ${selectedOptions.Memory === memory ? 'border-blue-500 bg-blue-100' : 'border-gray-300'} border border-solid border-black p-4 mt-4 rounded-2xl w-full`}
                                >
                                <div className='flex flex-row'>
                                    <span className="w-2/3 text-left">{memory}</span>
                                    <span className='w-1/3 text-center place-content-center text-right p-2'>{specCustomise.Memory[memory]}</span>
                                </div>
                                </button>  
                            ))}
                            <p className="pt-2 text-gray-500">96GB available with M3 Max with 30-core GPU. 48GB, 64GB, or 128GB available with M3 Max with 40-core GPU.</p>
                                
                        </div>
                    </div>
                    <div className="p-2 m-2">
                        <p ><strong>Storage</strong></p>
                        <p className="pt-2 text-blue-600"><a>How much storage is right for you?</a></p>
                        <div>
                            {Object.keys(specCustomise.Storage).map((storage) => (  
                                <button
                                    
                                    onClick={() => handleOptionChange('Storage', storage)}
                                    className={`m-2 p-2 border ${selectedOptions.Storage === storage ? 'border-blue-500 bg-blue-100' : 'border-gray-300'} border border-solid border-black p-4 mt-4 rounded-2xl w-full`}
                                >
                                <div className='flex flex-row'>
                                    <span className="w-2/3 text-left">{storage}</span>
                                    <span className='w-1/3 text-center place-content-center text-right p-2'>{specCustomise.Storage[storage]}</span>
                                </div>
                                </button>  
                            ))}
                            
                                
                        </div>
                    </div>
                    </div>
                )}
                    <div className="p-2 m-2">
                        <p ><strong>Keyboard Language</strong></p>
                        <p className="pt-2 text-blue-600"><a>Learn more</a></p>
                        <div >
                            <select className="border border-solid border-black p-4 rounded-2xl w-full place-content-center">
                                <optgroup label="Keyboard Language">
                                    <option value="065-CGPF">Backlit Magic&nbsp;Keyboard with Touch&nbsp;ID - US English</option>
                                    <option value="CH065-CGPF">Backlit Magic&nbsp;Keyboard with Touch&nbsp;ID - Chinese (Pinyin)</option>
                                    <option value="TA065-CGPF">Backlit Magic&nbsp;Keyboard with Touch&nbsp;ID - Chinese (Zhuyin)</option>
                                    <option value="AB065-CGPF">Backlit Magic&nbsp;Keyboard with Touch&nbsp;ID - Arabic</option>
                                    <option value="J065-CGPF">Backlit Magic&nbsp;Keyboard with Touch&nbsp;ID - Japanese</option>
                                </optgroup>
                            </select>
                            <span>Keyboard Language</span>
                        </div>
                        
                    </div>
                    <div className="p-2 m-2">
                        <p ><strong>Need a moment?</strong></p>
                        <p className="pt-2 text-gray-500">Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.</p>
                        <div className="flex flex-row">
                        <svg width="21" height="21" class="as-svgicon as-svgicon-bookmark as-svgicon-tiny as-svgicon-bookmarktiny" role="img" aria-hidden="true"><path fill="none" d="M0 0h21v21H0z"></path><path d="M12.8 4.25a1.202 1.202 0 0 1 1.2 1.2v10.818l-2.738-2.71a1.085 1.085 0 0 0-1.524 0L7 16.269V5.45a1.202 1.202 0 0 1 1.2-1.2h4.6m0-1H8.2A2.2 2.2 0 0 0 6 5.45v11.588a.768.768 0 0 0 .166.522.573.573 0 0 0 .455.19.644.644 0 0 0 .38-.128 5.008 5.008 0 0 0 .524-.467l2.916-2.885a.084.084 0 0 1 .118 0l2.916 2.886a6.364 6.364 0 0 0 .52.463.628.628 0 0 0 .384.131.573.573 0 0 0 .456-.19.768.768 0 0 0 .165-.522V5.45a2.2 2.2 0 0 0-2.2-2.2Z"></path></svg>
                            <p className="pt-2 text-blue-600"><a>
                        Save for
                        </a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Price Container */}
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 ">
        <div className='PriceContainer flex justify-between max-w-maxW mx-auto'>
            <div className="sm:hidden">
                <svg className="as-svgicon-rtl-mirrored as-svgicon as-svgicon-boxtruck as-svgicon-reduced as-svgicon-boxtruckreduced" viewBox="0 0 25 25" role="img" aria-hidden="true" width="25px" height="25px">
                    <path fill="none" d="M0 0h25v25H0z"></path>
                    <path fill="#1d1d1f" d="m23.482 12.847-2.92-3.209A1.947 1.947 0 0 0 18.985 9H17V6.495a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v9.75a2.5 2.5 0 0 0 2.5 2.5h.548A2.746 2.746 0 0 0 6.75 21.02 2.618 2.618 0 0 0 9.422 19h6.681a2.744 2.744 0 0 0 5.347-.23h.735A1.656 1.656 0 0 0 24 16.98v-2.808a1.937 1.937 0 0 0-.518-1.325ZM8.426 18.745a1.74 1.74 0 0 1-3.352 0 1.577 1.577 0 0 1 .015-1 1.738 1.738 0 0 1 3.322 0 1.578 1.578 0 0 1 .015 1ZM9.447 18a2.726 2.726 0 0 0-5.394-.255H3.5a1.502 1.502 0 0 1-1.5-1.5v-9.75a1.502 1.502 0 0 1 1.5-1.5h11a1.502 1.502 0 0 1 1.5 1.5V18Zm10.972.77a1.738 1.738 0 0 1-3.337 0 1.573 1.573 0 0 1 0-1 1.742 1.742 0 1 1 3.337 1ZM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0 0 17 16.165V10h1.986a.976.976 0 0 1 .838.314l2.927 3.214a.95.95 0 0 1 .249.644Zm-1.324-3.36a.512.512 0 0 1 .174.38h-3.306a.499.499 0 0 1-.544-.528V11h1.073a.76.76 0 0 1 .594.268Z"></path>
                </svg>
                <div>
                    <p>Order today. Delivers to <a className="text-blue-500">55188</a> </p>
                    <p>22/07/2024 - 24/07/2024 — Free</p>
                </div>
            </div>
            
            <div className='p-2 m-2 sm:hidden'>
                <div>
                    <svg viewBox="0 0 25 25" className="as-svgicon as-svgicon-applestorepickup as-svgicon-reduced as-svgicon-applestorepickupreduced" role="img" aria-hidden="true" width="25px" height="25px">
                        <path fill="none" d="M0 0h25v25H0z"></path>
                        <path d="M18.5 5h-1.775a4.231 4.231 0 0 0-8.45 0H6.5A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21h12a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 18.5 5Zm-6-3a3.245 3.245 0 0 1 3.225 3h-6.45A3.245 3.245 0 0 1 12.5 2ZM20 18.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6h12A1.5 1.5 0 0 1 20 7.5Z"></path>
                        <path d="M14.4 12.448a1.592 1.592 0 0 1 .738-1.328 1.607 1.607 0 0 0-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 0 0-1.739 2.068 4.32 4.32 0 0 0 .723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 0 0 .474-.989 1.516 1.516 0 0 1-.926-1.403ZM12.583 10.357a1.346 1.346 0 0 0 .941-.5 1.594 1.594 0 0 0 .361-.974.731.731 0 0 0-.008-.136 1.5 1.5 0 0 0-1.016.528 1.547 1.547 0 0 0-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011Z"></path>
                    </svg>
                </div>
                <div>
                    <p>Order now. Pick up, in Store:</p>
                    <p><strong>Wed 24/07/2024</strong> at <a className='text-blue-500'>Apple The Exchange TRX</a></p>
                </div>
            </div>
            <div className='p-2 m-2'>
                <div>
                    <p><strong>RM {calculateTotalPrice()} or</strong></p>
                    <p><strong>RM {installment()}/mo. for 24 mo.</strong></p>
                </div>
                <div>
                    <a className='text-blue-500'>Explore monthly installment option</a>
                </div>
            </div>
            <div className='flex items-center'>
                <button className='bg-blue-500 rounded-lg px-2 py-2 h-15 text-white w-24'><p className='text-sm'>Add to Bag</p></button>
                <svg width="35" height="35" className="as-svgicon as-svgicon-bookmark as-svgicon-base as-svgicon-bookmarkbase ml-2 " role="img" aria-hidden="true">
                    <path fill="none" d="M0 0h35v35H0z"></path>
                    <path d="M21.952 6.433a2.157 2.157 0 0 1 1.567.481A2.228 2.228 0 0 1 24 8.516v19.866a.709.709 0 0 1-.018.178.7.7 0 0 1-.058-.013 8.985 8.985 0 0 1-.757-.674l-4.866-4.901a1.111 1.111 0 0 0-1.602 0l-4.857 4.891a7.25 7.25 0 0 1-.754.676.145.145 0 0 1-.053.028h-.015a.681.681 0 0 1-.02-.185V8.516a2.228 2.228 0 0 1 .48-1.602 2.158 2.158 0 0 1 1.568-.48h8.904m0-1h-8.904a3.077 3.077 0 0 0-2.278.776A3.144 3.144 0 0 0 10 8.516v19.866a1.276 1.276 0 0 0 .276.868.956.956 0 0 0 .76.317 1.073 1.073 0 0 0 .632-.213 8.377 8.377 0 0 0 .874-.776l4.866-4.9a.115.115 0 0 1 .184 0l4.866 4.9a10.454 10.454 0 0 0 .868.77 1.048 1.048 0 0 0 .639.219.956.956 0 0 0 .76-.317 1.276 1.276 0 0 0 .275-.868V8.516a3.144 3.144 0 0 0-.77-2.306 3.077 3.077 0 0 0-2.278-.776Z"></path>
                </svg>
            </div>
    </div>
</div>

                
            <Footer2/>
            
        </div>
    )
}

export default Inch14M3Max