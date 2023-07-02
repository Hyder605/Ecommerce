import AddQuantityButtton from "@/components/Shared/AddQuantityButtton"
import SliderEffect from "@/components/Shared/SliderEffect"
import { Wrapper } from "@/components/Shared/Wrapper"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { client } from '@/sanity/lib/client'
import { Image as IImage } from 'sanity'
import AddToCartFunctionality from "@/components/Shared/AddToCartFunctionality"
import CallToAction from "@/components/Shared/CallToAction"


interface IProduct{
    _id: string,
    title: string,
    image: IImage[],
    price: number
}



async function getProductData() {
    const res:IProduct[]= await client.fetch(`*[_type=='product']{_id,title,image,price}`)
    const imagedata = res
    return imagedata
  }


interface Iparams {
    params:{slug:number}
}

export default async function Product({params}:Iparams) {
    const dynamicPage=params.slug
    const data=  await getProductData()

    const dynamicId=data.find((item)=>item._id===dynamicPage.toString())

    
    return (
        <section>
            <Wrapper>
                <div className="flex md:flex-row py-8 flex-col">
                    <div className="flex flex-1">
                        {/* left section */}
                        {<SliderEffect props={dynamicId} />}
                    </div>
                    <div className="flex flex-1 md:mx-8 px-6 flex-col py-8">
                        {/* Right Section */}
                        <h2 className="text-3xl font-semibold mb-2">
                        {dynamicId?.title}
                        </h2>
                        {/* <h3 className="text-lg font-semibold mb-2"> {dynamicId?.Catergory}</h3> */}
                        <div className="mt-5">
                            <h3 className="text-md font-semibold mb-2">Select Size</h3>
                            <div className="flex ">
                                <label className="flex gap-x-2">
                                    <input type="radio" name="shoe-size" value="Small" />
                                    Small
                                    <input type="radio" name="shoe-size" value="Medium" />
                                    Medium
                                    <input type="radio" name="shoe-size" value="Large"  />
                                    Large
                                </label>
                            </div>
                            <div className="flex items-center mt-4">
                                <h3 className="text-lg font-semibold"> Quantity : </h3>
                                <div className="pl-6"><CallToAction props={dynamicId} /></div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Product Price :</h3>
                                <h3 className="text-lg font-semibold">${dynamicId?.price}</h3>
                            </div>



                        </div>
                    </div>
                </div>
            </Wrapper>
        </section >
    )
}
