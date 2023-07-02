'use client'
import Image, { StaticImageData } from 'next/image'
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/sanity/lib/image'





// interface ImageUrl {
//     src: string;
//     height: number;
//     width: number;
//     blurDataURL: string;
//     blurWidth: number;
//     blurHeight: number;
//   }

//   interface VariationImage {
//     name: string;
//     imageurl: ImageUrl;
//   }

//   interface Product {
//     id: number;
//     slug: string;
//     url: ImageUrl;
//     shoeName: string;
//     Price: number;
//     Catergory: string;
//     variationsImage: VariationImage[];
//   }


interface IProduct {
    _id: string,
    title: string,
    image: IImage,
    price: number
}


export default function SliderEffect({ props }: any) {
    const Productdetail: IProduct = props

    // const [sliderImage, setSliderImage] = useState("front_image")
    const SImage = Productdetail.image
    // console.log(SImage)
    return (
        <div className='flex w-full flex-col-reverse md:flex-row gap-y-4 gap-x-4 pr-5 md:pr-6 pl-5 md:pl-16'>

            <div className="flex md:w-[15%] space-y-6 justify-center">
                <button className="md:h-[50px] bg-green-200 flex justify-center items-center">
                    <Image src={urlForImage(Productdetail.image).url()} alt={Productdetail._id} width={100} height={100} />
                </button>
            </div>
            <div className=" w-full bg-slate-200 flex justify-center items-center">
                {SImage && <Image src={urlForImage(SImage).url()} alt="shoe" width={400} height={800} />}
            </div>
        </div>
    )
}

// {Productdetail.variationsImage.map((item) => {

//     return (
//         <button onClick={() => setSliderImage(item.name)}
//             key={item.name} className="w-full h-[70px] bg-green-500 flex justify-center items-center">
//             <Image src={item.imageurl} alt={item.name} />
//         </button>
//     )
// })}