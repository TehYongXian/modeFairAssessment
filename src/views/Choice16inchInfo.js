import React from "react";


function Inch16Macbook() {
    return (
        <div className="m-2 t-100 p-2 bg-appleBackgroundGray rounded-2xl">
            <div className="title">
                <h1>What to consider when choosing your MacBook Pro.</h1>
                <p>Configure your laptop on the next step.</p>
            </div>
            <div className="flex flex-row m-auto p-5">
                
                <div className="p-2 m-5 text-left">
                <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-m3-pro-icon-mac-202310?wid=72&amp;hei=72&amp;fmt=png-alpha&amp;.v=1696970981318" alt="" width="36" height="36" class="ir"></img>
                    <h3 className="pt-3">Apple M3 Pro chip</h3>
                    <p className="pt-3">Building on the M3 chip, M3 Pro provides even greater performance and additional unified memory for more demanding apps and workflows</p>
                    <ul className="pt-3">
                        <li>Manipulate gigapixel panoramas, compile millions of lines of code</li>
                        <li>Edit multiple streams of 8K video</li>
                        <li>Configure with up to 36GB unified memory</li>
                        <li>Supports up to two external displays</li>
                    </ul>
                </div>
                <div className="p-2 m-5 text-left">
                <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-m3-max-icon-mac-202310?wid=72&amp;hei=72&amp;fmt=png-alpha&amp;.v=1696970981319" alt="" width="36" height="36" class="ir"></img>
                    <h3 className="pt-3">Apple M3 Max chip</h3>
                    <p className="pt-3">M3 Max powers the most extreme workflows with even more CPU and GPU cores, enormous unified memory and an advanced Media Engine</p>
                    <ul className="pt-3">
                        <li>Render intricate 3D content, develop transformer models with billions of parameters</li>
                        <li>Tackle post-production of 8K video and beyond</li>
                        <li>Configure with up to 128GB unified memory</li>
                        <li>Supports up to four external displays</li>
                    </ul>
                </div>
                <div className="p-2 m-5 text-left">
                <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/memory-icon-mac-202310?wid=90&amp;hei=72&amp;fmt=png-alpha&amp;.v=1696970981318" alt="" width="45" height="36" class="ir"></img>
                    <h3 className="pt-3">Unified Memory</h3>
                    <p className="pt-3">Faster and more efficient than traditional RAM, unified memory is integrated within the M3 family of chips so apps can quickly share data between the CPU, GPU and Neural Engine</p>
                    <ul className="pt-3">
                        <li>Run multiple apps at once while performance remains fast and responsive</li>
                        <li>Add memory to run more apps simultaneously for faster, more fluid multitasking</li>
                        <li>With M3 Max, MacBook Pro can be configured with up to 128GB of memory</li>
                    </ul>
                </div>

            </div>
        </div>
        
    )
}

export default Inch16Macbook