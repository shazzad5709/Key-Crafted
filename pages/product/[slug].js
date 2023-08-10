import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import Wrapper from '@/components/Wrapper';
import { IoMdHeartEmpty } from "react-icons/io";
import ReactMarkdown from "react-markdown";


const Category = () => {
  return (
    <div>
      <Wrapper>
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>

          {/* left column start  */}
          <div
            className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
            <ProductDetailsCarousel />
          </div>

          {/* right coluumn start  */}
          <div className='flex-[1] py-3'>
            {/* prod title  */}
            <div className='text-[34px] font-semibold mb-2'>
              Jorda Retro 6.0
            </div>

            {/* prod subtitle  */}
            <div className='text-lg font-semibold mb-5'>
              Men&apos;s Golf Shoes
            </div>

            {/* prod price  */}
            <div className='text-lg font-semibold mb-5'>
              MRP: $99
            </div>

            <div className='text-md font-medium text-black/[0.5/'>
              incl. of taxes
            </div>

            <div className='text-md font-medium text-black/[0.5] mb-20'>
              {`(Also includes all applicable duties)`}
            </div>

            {/* prod size range start  */}
            <div className='mb-10'>
              <div className='flex justify-between mb-2'>
                Select Size
              </div>
              <div className='text-md font-medium text-black/[0.5]'>
                Select Guide
              </div>
            </div>
            {/* prod size range end  */}

            {/* prod size start */}
            <div className='grid grid-cols-3 gap-2'>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK 6
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK 7
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK 8
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK 10
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK 9
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer opacity-50'>
                UK 11
              </div>
            </div>
            {/* prod size end */}

            {/* show error start */}
            <div className='text-red-600 mt-1'>
              Size Selection is required
            </div>
            {/* show error end */}

            {/* add to cart button start */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document
                    .getElementById("sizesGrid")
                    .scrollIntoView({
                      block: "center",
                      behavior: "smooth",
                    });
                } else {
                  dispatch(
                    addToCart({
                      ...product?.data?.[0],
                      selectedSize,
                      oneQuantityPrice: p.price,
                    })
                  );
                  notify();
                }
              }}
            >
              Add to Cart
            </button>
            {/* add to cart button end */}

            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}

            {/* description  */}
            <div>
              <div className="text-lg font-bold mb-5">
                Product Details
              </div>
              <div className="markdown text-md mb-5">
                <ReactMarkdown>
                Nike Air is our iconic innovation that uses pressurized air in a durable, flexible membrane to provide lightweight cushioning. The air compresses on impact and then immediately returns to its original shape and volume, ready for the next impact.
                </ReactMarkdown>
              </div>
            </div>

          </div>

        </div>

        <RelatedProducts />
      </Wrapper>
    </div>
  )
}

export default Category;