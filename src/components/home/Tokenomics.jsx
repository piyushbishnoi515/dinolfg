import React from 'react'
import PrimaryHeading from '../common/PrimaryHeading'
import layer from '../../assets/image/webp/bottomnew.png'
import dog from '../../assets/image/webp/dog.png'
import colors from '../../assets/image/webp/colors.png'
import yellow from '../../assets/image/webp/yellow.png'
import skyblue from '../../assets/image/webp/skyblue.png'
import orange from '../../assets/image/webp/orange.png'
import pink from '../../assets/image/webp/pink.png'
import green from '../../assets/image/webp/green.png'
import Icon from '../common/Icons'
import aligater from '../../assets/image/webp/aligater.png'
import tree from '../../assets/image/webp/tree.png'
import treegrass from '../../assets/image/webp/treegrass.png'
import small from '../../assets/image/webp/small.png'
import grassgroup from '../../assets/image/webp/grassgroup.png'
import see from '../../assets/image/webp/see.png'
import tree2 from '../../assets/image/webp/tree2.png'
import top from '../../assets/image/webp/top.png'

const Tokenomics = () => {
    return (
        <div className=' relative bg-green pb-24 py-5 overflow-hidden min-h-[1200px]'>
            <img src={top} alt=""  className=' w-full absolute top-0'/>
            <div className=' container relative z-30 py-5 my-5 pt-[150px] '>
                <PrimaryHeading text="Tokenomics" className='max-sm:pb-[35px]'/>
                <div className="">
                    <div className=" flex justify-center relative">
                        <img src={dog} alt="" className='xl:mt-[80px] max-sm:absolute dog  ' />
                        <img src={colors} alt="" className='w-[250px]  h-[126px] absolute top-[64%] ' />
                    </div>
                    <div className=' relative h-[40px] w-full max-w-[450px] lg:max-w-[589px] mx-auto -mt-[80px] '>
                        <img src={yellow} alt="" className='lg:w-[22%] w-[19%]  absolute top-[-8%] left-[7%] max-xl:hidden block' />
                        <img src={skyblue} alt="" className='lg:w-[22%] w-[19%]  absolute top-[204%] left-[17%] max-xl:hidden block' />
                        <img src={orange} alt="" className='lg:w-[22%] w-[19%]  absolute top-[315%] left-1/2 -translate-x-1/2 max-xl:hidden block' />
                        <img src={pink} alt="" className='lg:w-[22%] w-[19%]  absolute top-[212%] right-[17.5%] max-xl:hidden block' />
                        <img src={green} alt="" className='lg:w-[22%] w-[19%]   absolute top-[12%] right-[7%] max-xl:hidden block' />

                    </div>
                    <div className='pb-[]'>
                        <div>
                            <div className=' absolute top-[90%] left-[7%] flex gap-6 max-xl:hidden'>
                                <div className="flex flex-col items-end">
                                    <h2 className='font-balsamiq text-yellow     font-normal xl:text-[32px] text-[28px]'>333,333,333</h2>
                                    <p className=' font-balsamiq text-white font-normal xl:text-[32px] text-[28px]'>Supply</p>
                                </div>
                                <Icon IconName='line1' className='max-xl:hidden' />
                            </div>
                            <div className=' absolute top-[132%] left-[13%] flex gap-6 max-xl:hidden'>
                                <div className="flex flex-col items-end">
                                    <h2 className='font-balsamiq text-skyBlue font-normal xl:text-[32px] text-[28px]'>95% Uniswa <br />5% Marketing</h2>
                                    <p className=' font-balsamiq text-white font-normal xl:text-[32px] text-[28px]'>Allocation</p>
                                </div>
                                <Icon IconName='line2' className='max-xl:hidden' />
                            </div>
                            <div className=' absolute top-[155%] left-[46%]  gap-6 max-xl:hidden'>
                                <Icon IconName='line3' className='max-xl:hidden justify-center' />

                                <div className="flex flex-col items-end">
                                    <h2 className='font-balsamiq text-orange font-normal xl:text-[32px] text-[28px]'>No Tax</h2>
                                </div>
                            </div>
                            <div className=' absolute top-[143%] left-[65%] flex gap-6 max-xl:hidden'>
                                <Icon IconName='line4' className='max-xl:hidden' />
                                <div className="flex flex-col items-end">
                                    <h2 className='font-balsamiq text-pink font-normal xl:text-[32px] text-[28px]'>No Mint Function</h2>
                                </div>
                            </div>
                            <div className=' absolute top-[91%] left-[73%] flex gap-6 max-xl:hidden'>
                                <Icon IconName='line5' className='max-xl:hidden' />
                                <div className="flex flex-col items-end">
                                    <h2 className='font-balsamiq text-liteGreen font-normal xl:text-[32px] text-[28px]'>Liquidity lock <br /> for 1 year</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='  flex-col max-xl:block hidden mt-[30px]'>
                    <div className=' flex flex-col justify-center items-center'>
                        <div className=' bg-yellow max-w-[70px] h-[70px] w-full'></div>
                        <div className=' border-[3px] border-dotted border-[#FBA11D] p-[20px]  hidden max-xl:block w-full max-w-[371px] backdrop-blur-2xl'>
                            <h2 className='font-balsamiq text-yellow font-normal text-[28px] max-xl:block'>333,333,333</h2>
                            <p className=' font-balsamiq text-white font-normal  text-[28px]'>Supply</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className=' bg-skyBlue max-w-[70px] h-[70px] w-full'></div>
                        <div className=' border-[3px] border-dotted border-[#FBA11D] p-[20px]  hidden max-xl:block w-full max-w-[371px] backdrop-blur-2xl'>
                            <h2 className='font-balsamiq text-[#23AAAC] font-normal xl:text-[32px] text-[28px]'>95% Uniswa <br />5% Marketing</h2>
                            <p className=' font-balsamiq text-white font-normal  xl:text-[32px] text-[28px]'>Allocation</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className=' bg-orange max-w-[70px] h-[70px] w-full'></div>

                        <div className=' border-[3px] border-dotted border-[#FBA11D] p-[20px]  hidden max-xl:block w-full max-w-[371px] backdrop-blur-2xl'>
                            <h2 className='font-balsamiq text-orange font-normal xl:text-[32px] text-[28px]'>No Tax</h2>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className=' bg-pink max-w-[70px] h-[70px] w-full'></div>
                        <div className=' border-[3px] border-dotted border-[#FBA11D] p-[20px]  hidden max-xl:block w-full max-w-[371px] backdrop-blur-2xl'>
                            <h2 className='font-balsamiq text-[#FB5352] font-normal  xl:text-[32px] text-[28px]'>No Mint Function</h2>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className=' bg-liteGreen max-w-[70px] h-[70px] w-full'></div>
                        <div className=' border-[3px] border-dotted border-[#FBA11D] p-[20px]  hidden max-xl:block w-full max-w-[371px] backdrop-blur-2xl '>
                            <h2 className='font-balsamiq text-liteGreen font-normal  xl:text-[32px] text-[28px]'>Liquidity lock for 1 year</h2>
                        </div>
                    </div>
                </div>
            </div>
            <img src={tree} alt="" className=' absolute z-10 bottom-0 max-sm:hidden' />
            <img src={aligater} alt="" className=' absolute z-20 bottom-0 animate-bounce max-sm:hidden' />
            <img src={layer} alt="" className=' absolute bottom-0 w-full' />
            <img src={treegrass} alt="" className=' absolute right-0 bottom-0 max-sm:hidden' />
            <img src={small} alt="" className=' absolute bottom-[3%] left-[55%] max-sm:hidden' />
            <img src={grassgroup} alt="" className=' absolute left-[22%] bottom-8' />
            <img src={see} alt="" className=' bottom-[-15%] left-0 absolute ' />
            <img src={tree2} alt="" className=' absolute left-[34%] bottom-[4%] max-md:hidden'/>
        </div>

    )
}

export default Tokenomics