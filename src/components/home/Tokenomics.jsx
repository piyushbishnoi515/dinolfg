import React from 'react'
import PrimaryHeading from '../common/PrimaryHeading'
import layer from '../../assets/image/webp/bottom-layer.png'
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
import groupimg from '../../assets/image/webp/groupimg.png'
import newlayer from '../../assets/image/webp/newlayer.png'

const Tokenomics = () => {
    return (
        <div className=' relative bg-green pb-24 py-5 overflow-hidden'>
            <img src={newlayer} alt="" className=' absolute right-0' />
            <div className=' container relative z-30 pb-1 mb-24'>
                <PrimaryHeading text="Tokenomics" />
                <div className="mb-[150px]">
                    <div className=" flex justify-center relative">
                        <img src={dog} alt="" className='mt-[80px]' />
                        <img src={colors} alt="" className='w-[250px]  h-[126px] absolute top-[65%]' />
                    </div>
                    <div className=' relative h-[290px] w-full max-w-[450px] lg:max-w-[589px] mx-auto -mt-[80px]'>
                        <img src={yellow} alt="" className='lg:w-auto w-[29%] sm:max-w-[18%] absolute top-0 left-0' />
                        <img src={skyblue} alt="" className='lg:w-auto w-[29%] sm:max-w-[18%] absolute top-[31%] left-[9.5%]' />
                        <img src={orange} alt="" className='lg:w-auto w-[29%] sm:max-w-[18%] absolute bottom-0 left-1/2 -translate-x-1/2' />
                        <img src={pink} alt="" className='lg:w-auto w-[29%] sm:max-w-[18%] absolute top-[31%] right-[9.5%]' />
                        <img src={green} alt="" className='lg:w-auto w-[29%] sm:max-w-[18%] absolute top-0 right-0' />
                    </div>
                    <div>
                        <div>
                            <Icon IconName='line1' className='absolute top-[44%] left-[21%] max-xl:hidden' />
                            <div className=' absolute top-[44%] max-xl:hidden'>
                                <h2 className='font-balsamiq text-orange font-normal xl:text-[32px] text-[28px]'>333,333,333</h2>
                                <p className=' font-balsamiq text-white font-normal xl:text-[32px] text-[28px]'>Supply</p>
                            </div>
                            <Icon IconName='line2' className='absolute top-[70%] left-[31%] max-xl:hidden' />
                            <div className=' absolute top-[70%] left-[12%] max-xl:hidden'>
                                <h2 className='font-balsamiq text-[#23AAAC] font-normal xl:text-[32px] text-[28px]'>95% Uniswa <br />5% Marketing</h2>
                                <p className=' font-balsamiq text-white font-normal  xl:text-[32px] text-[28px]'>Allocation</p>
                            </div>
                            <Icon IconName='line3' className='absolute top-[80%] left-[50%] max-xl:hidden' />
                            <div className=' absolute top-[86%] left-[46%] max-xl:hidden'>
                                <h2 className='font-balsamiq text-orange font-normal xl:text-[32px] text-[28px]'>No Tax</h2>
                            </div>
                            <Icon IconName='line4' className='absolute top-[70%] left-[67%] max-xl:hidden' />
                            <div className=' absolute top-[77%] left-[70%] max-xl:hidden'>
                                <h2 className='font-balsamiq text-[#FB5352] font-normal  xl:text-[32px] text-[28px]'>No Mint Function</h2>
                            </div>
                            <Icon IconName='line5' className='absolute top-[44%] left-[76%] max-xl:hidden' />
                            <div className=' absolute top-[43%] left-[79%] max-xl:hidden'>
                                <h2 className='font-balsamiq text-liteGreen font-normal  xl:text-[32px] text-[28px]'>Liquidity lock for 1 year</h2>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' flex gap-3 flex-col'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className=' border-[3px] border-dotted border-[#FBA11D] p-[20px]  hidden max-xl:block w-full max-w-[371px]  backdrop-blur-2xl '>
                            <h2 className='font-balsamiq text-orange font-normal text-[28px] max-xl:block'>333,333,333</h2>
                            <p className=' font-balsamiq text-white font-normal  text-[28px]'>Supply</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className=' border-[3px] border-dotted border-[#FBA11D] p-[20px]  hidden max-xl:block w-full max-w-[371px] backdrop-blur-2xl'>
                            <h2 className='font-balsamiq text-[#23AAAC] font-normal xl:text-[32px] text-[28px]'>95% Uniswa <br />5% Marketing</h2>
                            <p className=' font-balsamiq text-white font-normal  xl:text-[32px] text-[28px]'>Allocation</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className=' border-[3px] border-dotted border-[#FBA11D] p-[20px]  hidden max-xl:block w-full max-w-[371px] backdrop-blur-2xl'>
                            <h2 className='font-balsamiq text-orange font-normal xl:text-[32px] text-[28px]'>No Tax</h2>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className=' border-[3px] border-dotted border-[#FBA11D] p-[20px]  hidden max-xl:block w-full max-w-[371px] backdrop-blur-2xl'>
                            <h2 className='font-balsamiq text-[#FB5352] font-normal  xl:text-[32px] text-[28px]'>No Mint Function</h2>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className=' border-[3px] border-dotted border-[#FBA11D] p-[20px]  hidden max-xl:block w-full max-w-[371px] backdrop-blur-2xl '>
                            <h2 className='font-balsamiq text-liteGreen font-normal  xl:text-[32px] text-[28px]'>Liquidity lock for 1 year</h2>
                        </div>
                    </div>
                </div>
            </div>
            <img src={groupimg} alt="" className=' absolute bottom-[-104px] z-10' />
            <img src={tree} alt="" className=' absolute z-10 bottom-0' />
            <img src={aligater} alt="" className=' absolute z-20 bottom-0' />
            <img src={layer} alt="" className=' absolute bottom-0' />
        </div>
    )
}

export default Tokenomics