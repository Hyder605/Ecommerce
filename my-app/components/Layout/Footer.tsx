import Image from "next/image"
import FooterLogo from "../assets/logo_ecom.svg"
import { Wrapper } from "../Shared/Wrapper"


export const Footer = () => {
    return (
        <section>
            <Wrapper>
                <div className='bg-slate-800 w-full py-6'>
                    <div>
                        <div className="grid md:grid-cols-2">
                            <div className="pt-4 px-4">
                                <div className="text-lg text-white flex items-center ">
                                    {/* logo */}
                                    <div className="w-[11%]">
                                        <Image src={FooterLogo} alt="Footerlogo" />
                                    </div>
                                    <div>
                                        <p className='font-bold text-xl text-green-600 pl-1'>Green Mart</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6 text-white pr-4 pt-3">
                                        The king, seeing how much happier his subjects were, realized the error of
                                        his ways and repealed the joke tax.
                                    </p>
                                </div>
                            </div>

                            <div className="flex pt-4 px-4">
                                <div className="text-white w-[50%]">
                                    {/* Company attributes */}
                                    <p className="font-bold text-lg">Explore</p>
                                    <ul className="md:text-lg pt-2 space-y-2">
                                        <li>Men</li>
                                        <li>Women</li>
                                        <li>New Arrivals</li>
                                        <li>Best Sellers</li>


                                    </ul>
                                </div>
                                <div className=" text-white w-[50%]">
                                    {/* support/contact */}
                                    <ul className="md:text-lg pt-4 space-y-2">
                                        <li>About Us</li>
                                        <li>Contact Us</li>
                                        <li>Return & Exchanges</li>
                                        <li>Terms & Conditions </li>


                                    </ul>

                                   
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </Wrapper>
        </section>

    )
}