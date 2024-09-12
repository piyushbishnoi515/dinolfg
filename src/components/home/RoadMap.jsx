import React from 'react'
import { ROADMAP_DATA } from '../../utils/Helper'
import greenLine from '../../assets/image/webp/roadline.png'

const Roadmap = () => {
    return (
        <div className='relative bg-[#09655A] py-5 xl:py-16 overflow-hidden -mt-16'>
            <div className="container md:pb-24 md:mb-10 ]">
                <div className='flex justify-center'>
                    <h1 className=' font-chewy font-normal text-[64px] text-white leading-[83px] text-center max-w-[273px]'>
                        Roadmap
                    </h1>
                </div>
                <div className="lg:mt-24 mt-10 md:mt-16 relative w-full max-w-[950px] xl:max-w-[992px] gap-10 sm:gap-16 md:gap-0 flex flex-col ">
                    {ROADMAP_DATA.map((i, index) => (
                        <div key={index} className={`flex z-[1] flex-col pl-16 sm:pl-24 md:pl-0 lg:gap-11 sm:flex-row md:items-center w-full md:w-fit ${index === 0 ? "gap-7 sm:gap-12" : "gap-2 sm:gap-7"}  ${index === 1 ? "md:ml-auto md:max-w-[550px] lg:max-w-[722px] md:w-full lg:mt-[272px] md:mt-[286px]" : index === 2 ? "xl:mt-[243px] md:mt-[186px]" : index === 3 ? "md:ml-auto md:max-w-[450px] lg:max-w-[622px] md:w-full md:mt-[309px] lg:mt-[271px] xl:mt-[266px] " : ""}`}>
                            <p className={`${index === 0 ? " text-yellow" : index === 1 ? " text-liteGreen" : index === 2 ? " text-orange" : " text-skyBlue"}  font-chewy relative z-[1]  font-normal mx-auto  sm:mx-0 lg:text-[200px] sm:-mt-5 md:mt-0 text-6xl md:text-7xl lg:leading-custom-2xl drop-shadow-lightGray`}>{i.number}</p>
                            <div className="flex flex-col gap-1 lg:gap-4">
                                {i.items.map((e, index) => (
                                    <div key={index} className="flex items-center">
                                        <span className='flex w-1 h-1 rounded-full bg-white mx-4'></span>
                                        <p className='font-normal text-xl text-white leading-6'>{e.heading}</p>
                                    </div>
                                ))}
                            </div>
                            <img src={i.img} alt='#' className={`absolute z-[1] ${index === 0 ? "md:w-[250px] lg:w-[326px] md:h-[160px] lg:h-[199px] -rotate-12 top-[67px] -left-[2%] md:-right-10 w-24 sm:top-10 md:top-[-37px] sm:left-0 md:left-auto max-md:hidden" : index === 1 ? "lg:w-[213px] md:w-[150px] lg:h-[307px] md:left-9 w-24 -left-[4%] sm:left-0 top-[292px]  max-md:hidden" : index === 2 ? "md:w-[250px] md:h-[352px] top-[43%]  -left-[4%] w-24 sm:left-0 md:left-[80%]  max-md:hidden lg-top-[43%] " : "md:w-[175px] md:h-[107px] md:-bottom-36 w-24 bottom-[4%] xl:-bottom-40 -left-[4%] sm:left-0 sm:bottom-14 md:left-[40%]  max-md:hidden"}`} />
                        </div>
                    ))}
                    <img src={greenLine} alt='green-line' className='absolute top-[20px] hidden md:flex -right-[125px]' />
                </div>
            </div>
        </div>

    )
}

export default Roadmap