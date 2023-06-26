'use client'
import AddQuantityButtton from "@/components/Shared/AddQuantityButtton";
import StripeCheckOutButton from "@/components/Shared/StripeCheckOutButton";
import { Wrapper } from "@/components/Shared/Wrapper";
import { urlForImage } from '@/sanity/lib/image'
import Image from "next/image";
import { useSelector } from "react-redux";


export interface CartItem {
    product: any;
    quantity: number
    totalPrice: number
}

export interface CartState {
    cart: {
        items: CartItem[];
        totalAmount: number;
        totalQuantity: number;
    }

}

export default function Cart() {
    const { items } = useSelector((state: CartState) => state.cart)
    const totalvalues = useSelector((state: CartState) => state)




    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {items.length < 4 && (
                    <>
                        {/* HEADING AND PARAGRAPH START */}
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                Shopping Cart
                            </div>
                        </div>
                        {/* HEADING AND PARAGRAPH END */}

                        {/* CART CONTENT START */}
                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            {/* CART ITEMS START */}
                            <div className="flex-[2]">
                                <div className="text-lg font-bold">
                                    Cart Items
                                </div>
                                {items.map((item) => (
                                    <div key={item.product._id} className='flex  w-full bg-slate-300 items-center gap-x-10'>
                                        <div className=" ">
                                            {/* {<Image src={ShoeHero2} alt="shoe" width={300} height={400} />} */}
                                            {item.product.image.images && <Image src={urlForImage(item.product.image.images[0]).url()} alt="shoe" width={300} height={400} />}

                                        </div>
                                        {/* <div className="font-bold text-lg">HBBBB</div> */}
                                        <div className="font-bold text-lg">{item.product.title}</div>

                                        <AddQuantityButtton props={item.product} />
                                        <div className="font-bold text-lg">${item.product.price}</div>
                                        {/* <div className="font-bold text-lg">$300</div> */}

                                        <div className="font-bold text-lg">Total Price:${item.totalPrice}</div>




                                    </div>

                                ))}


                            </div>
                            {/* CART ITEMS END */}

                            {/* SUMMARY START */}
                            <div className="flex-[1]">
                                <div className="text-lg font-bold">Summary</div>

                                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                                    <div className="flex justify-between">
                                        <div className="uppercase text-md md:text-lg font-medium text-black">
                                            Subtotal
                                        </div>

                                    </div>
                                    <div className="text-sm md:text-md py-5 border-t mt-5">
                                        The subtotal reflects the total price of
                                        your order, including duties and taxes,
                                        before any applicable discounts. It does
                                        not include delivery costs and
                                        international transaction fees.
                                    </div>
                                    <div>
                                        <p>Total Quantity</p>
                                        <p>{totalvalues.cart.totalQuantity}</p>
                                    </div>
                                    <div>
                                        <p>Total price</p>
                                        <p>{totalvalues.cart.totalAmount}</p>
                                    </div>
                                    <StripeCheckOutButton />

                                </div>

                            </div>
                            {/* SUMMARY END */}
                        </div>
                        {/* CART CONTENT END */}
                    </>
                )}

            </Wrapper>
        </div>
    );
};




// {items.map((item,index) => (
//     <div key={index} className={''}>
//         <div className=" w-full bg-slate-300 ">
//             {<Image src={ShoeHero2} alt="shoe" width={400} height={800} />}
//             {/* {item.product.image.images && <Image src={urlForImage(item.product.image.images[0]).url()} alt="shoe" width={400} height={800} />} */}

//         </div>
//         <div>{item.product.title}</div>
//         <div>{item.product.price}</div>



//     </div>

// ))}