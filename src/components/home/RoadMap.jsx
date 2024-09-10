import React from 'react'
import Roadimg from '../../assets/image/webp/RoadMapimg.webp'
const RoadMap = () => {
    return (
        <div className=' py-10 -mt-9 relative'>
            <div
                className=" bg-[#09655A] relative z-[1] -mt-[5px]  overflow-hidden"
            >
                <img
                    src={Roadimg}
                    alt="roadimg"
                    className=" mx-auto absolute max-sm:hidden top-[10%] right-[0%] z-[-1] left-0  h-[89%] pt-[60px]"
                />
                <div class="sm:hidden block absolute sm:left-[70px] left-[40px] bottom-0 top-[11%] h-[85%] w-[15px] border-l-[11px] border-dotted border-[#0a4740]"></div>
                <div className=" max-w-[1164px] px-3 mx-auto pb-[35px] sm:pb-[60px]">
                    <h2
                        className=" text-[39px] sm:text-[64px] text-white text-center font-chewy leading-[43px] sm:leading-[83px] pt-10"
                    >
                        Roadmap
                    </h2>
                    <div
                        className=" max-sm:after:absolute max-sm:relative  after:bg-[#10100f]  max-sm:after:border-2 after:border-white  after:w-[30px] after:h-[30px] after:rounded-full after:left-[5.5%] after:top-[10%] max-w-[463px] lg:max-w-[767px] sm:mt-[97px] mt-[50px]"
                    >
                        <div className="max-sm:flex-col flex sm:items-center max-sm:ml-[90px] gap-[45px]">
                            <h3 className=" text-[#FBA11D] text-[100px] lg:text-[200px] font-chewy leading-[100px] lg:leading-[261px]">
                                01
                            </h3>
                            <ul>
                                <li className="  list-disc text-[20px] leading-[24px] font-normal  text-white font-balsamiq">
                                    Launch $DINO & Website & Social Media.
                                </li>
                                <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal  text-white font-balsamiq">
                                    Building the community.
                                </li>
                                <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal  text-white font-balsamiq">
                                    Marketing Phase 1.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="max-sm:after:absolute max-sm:relative  after:bg-[#c62767]  max-sm:after:border-2 after:border-white  after:w-[30px] after:h-[30px] after:rounded-full after:left-[5.5%] after:top-[10%] max-w-[463px] lg:max-w-[855px] sm:ml-auto sm:mt-[200px] lg:mt-[272px] mt-[50px]"
                    >
                        <div className="max-sm:flex-col flex sm:items-center max-sm:ml-[90px] gap-[45px]">
                            <h3 className=" text-[#8EC627] text-[100px] lg:text-[200px] font-chewy leading-[100px] lg:leading-[261px]">
                                02
                            </h3>
                            <ul>
                                <li className=" list-disc text-[20px] leading-[24px] font-normal  text-white font-balsamiq">
                                    CoinGecko & Coinmarketcap listing.
                                </li>
                                <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal  text-white font-balsamiq">
                                    Introduction to Buyback & Burning mechanism
                                </li>
                                <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal  text-white font-balsamiq">
                                    Marketing Phase 2.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="max-sm:after:absolute max-sm:relative  after:bg-[#d007d4]  max-sm:after:border-2 after:border-white  after:w-[30px] after:h-[30px] after:rounded-full after:left-[5.5%] after:top-[10%] max-w-[463px] lg:max-w-[767px]  sm:mt-[128px] mt-[50px]"
                    >
                        <div className="max-sm:flex-col flex sm:items-center max-sm:ml-[90px] gap-[45px]">
                            <h3 className=" text-[#D45B07] text-[100px] lg:text-[200px] font-chewy leading-[100px] lg:leading-[261px]">
                                03
                            </h3>
                            <ul>
                                <li className="  list-disc text-[20px] leading-[24px] font-normal  text-white font-balsamiq">
                                    Utility and Usecase Introduction.
                                </li>
                                <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal  text-white font-balsamiq">
                                    CEX Listings
                                </li>
                                <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal  text-white font-balsamiq">
                                    Marketing Phase 3.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="max-sm:after:absolute max-sm:relative  after:bg-[#23AAAC]  max-sm:after:border-2 after:border-white  after:w-[30px] after:h-[30px] after:rounded-full after:left-[5.5%] after:top-[10%] max-w-[463px] lg:max-w-[767px] sm:ml-auto sm:pt-[187px] sm:pb-[100px] mt-[50px]"
                    >
                        <div className="max-sm:flex-col flex sm:items-center max-sm:ml-[90px] gap-[45px]">
                            <h3 className=" text-[#23AAAC] text-[100px] lg:text-[200px] font-chewy leading-[100px] lg:leading-[261px]">
                                04
                            </h3>
                            <ul>
                                <li className="  list-disc text-[20px] leading-[24px] font-normal font-balsamiq text-white">
                                    Staking Introduction.
                                </li>
                                <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal font-balsamiq  text-white">
                                    DINO NFT Collection.
                                </li>
                                <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal  font-balsamiq text-white">
                                    Marketing Phase 4
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMap