import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

interface stripeBody{
    product: {
      _id: string,
      title: string,
      price: number
    },
    quantity: number,
    totalPrice: number
  }

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
    apiVersion: "2022-11-15"
})

export async function POST(request: NextRequest) {
    const body = await request.json();
    
    try {

        if (body.length>0){
         // Create Checkout Sessions from body params.
         const session = await stripe.checkout.sessions.create({
            submit_type:"pay",
            payment_method_types:['card'],
            billing_address_collection:"auto",
            shipping_options:[{shipping_rate:"shr_1NNY4cIzfAnXCGnn5onH5Z8r"}],
            mode: 'payment',
            line_items:body.map((item:stripeBody)=>{
                return (
                    {
                        price_data:{
                            currency:"Pkr",
                            product_data:{
                                name:item.product.title
                            },
                            unit_amount:item.product.price*100,                
                        },
                        
                        quantity:item.quantity
                    }
                )
            }),
            success_url: `${request.headers.get('origin')}/success`,
            cancel_url: `${request.headers.get('origin')}/?canceled=true`,
        });
        return NextResponse.json({ session })

        }else{
            return NextResponse.json({message:"No Data Found"})
        }
       
    } catch (err: any) {
        console.log(err);
        return NextResponse.json(err.message);
    }
}
