import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import Wrapper from '@/components/Wrapper';

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
            </div>
            {/* prod size end */}


          </div>

        </div>
      </Wrapper>
    </div>
  )
}

export default Category;