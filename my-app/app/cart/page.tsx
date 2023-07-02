'use client'
import AddQuantityButtton from "@/components/Shared/AddQuantityButtton";
import StripeCheckOutButton from "@/components/Shared/StripeCheckOutButton";
import { Wrapper } from "@/components/Shared/Wrapper";
import { urlForImage } from '@/sanity/lib/image'
import Image from "next/image";
import Link from "next/link";
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
    const { items, totalAmount, totalQuantity } = useSelector((state: CartState) => state.cart)


    return (
        <div className="">
            <Wrapper>
                {items.length > 0 && (
                    <>
                        {/* HEADING AND PARAGRAPH START */}
                        <div className="text-center max-w-[800px] mx-auto pt-5">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                Shopping Cart
                            </div>
                        </div>
                        {/* HEADING AND PARAGRAPH END */}

                        {/* CART CONTENT START */}
                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            {/* CART ITEMS START */}
                            <div className="flex-[2]">
                                <div className="text-lg font-bold px-6">
                                    Cart Items
                                </div>
                                {items.map((item) => (
                                    <div key={item.product._id} className='flex  w-full  rounded-xl bg-slate-300 items-center md:gap-x-32 my-3 '>
                                        <div className="md:px-10">
                                            {/* {<Image src={ShoeHero2} alt="shoe" width={300} height={400} />} */}
                                            {item.product.image && <Image src={urlForImage(item.product.image).url()} alt="shoe" width={100} height={100} className="hover:scale-[2] duration-300" />}

                                        </div>
                                        {/* <div className="font-bold text-lg">HBBBB</div> */}

                                        <div className=" flex  gap-x-8 sm:gap-x-12  md:gap-x-16 py-2 px-2 sm:px-8 gap-y-3 justify-around w-full ">
                                            <div>
                                                <div className="font-bold text-sm md:text-lg">{item.product.title}</div>

                                                <AddQuantityButtton props={item.product} />

                                            </div>
                                            <div className="gap-y-3">
                                                <div className="font-bold text-sm md:text-lg">Item Price: ${item.product.price}</div>
                                                {/* <div className="font-bold text-lg">$300</div> */}

                                                <div className="font-bold  text-sm md:text-lg">Total Price: ${item.totalPrice}</div>
                                                {/* <div className="font-bold text-lg">Total Price: $500</div> */}

                                            </div>
                                        </div>
                                    </div>

                                ))}

                            </div>
                            {/* CART ITEMS END */}

                            {/* SUMMARY START */}
                            <div className="flex-[1] px-5">
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
                                        <p>{totalQuantity}</p>
                                    </div>
                                    <div>
                                        <p>Total price</p>
                                        <p>{totalAmount}</p>
                                    </div>
                                    <StripeCheckOutButton props={items} />

                                </div>

                            </div>
                            {/* SUMMARY END */}
                        </div>
                        {/* CART CONTENT END */}



                    </>
                )}

                {items.length < 1 && (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] pt-10 ">
                        <Image
                            src="/empty-cart.jpg"
                            width={300}
                            height={300}
                            alt={"cart Empty"}
                            className="w-[300px] md:w-[400px]"
                        />
                        <span className="text-xl font-bold pt-4">
                            Your cart is empty
                        </span>
                        <span className="text-center mt-4">
                            Looks like you have not added anything in your cart.
                            <br />
                            Go ahead and explore top categories.
                        </span>
                        <Link
                            href="/collections"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                )}

            </Wrapper>
        </div >
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