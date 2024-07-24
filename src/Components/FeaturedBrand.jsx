import { brands } from '../data';
const FeaturedBrand = () => {
  return (
    <>
      <section className='mt-12 max-w-[90vw] mx-auto lg:mt-20 2xl:max-w-[1600px] 2xl:mx-auto'>
        <div className='flex items-center justify-center flex-col mb-8'>
          <h1 className='uppercase tracking-[12px] lg:text-xl'>Featured</h1>
          <span className='text-[#50C1CF] text-4xl font-Abril'>
            Product Brands
          </span>
        </div>

        <main>
          <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[90vw] mx-auto place-items-center'>
            {brands.map((brand, index) => (
              <div
                key={index}
                className='flex flex-col items-center relative group w-60 '
              >
                <div
                  className='relative p-4 h-56 w-56 flex items-center justify-center overflow-hidden'
                  style={{ backgroundColor: brand.bgColor }}
                >
                  <img
                    src={brand.bgImage}
                    alt='Background image'
                    className={`absolute inset-0 left-20 w-56 h-56 opacity-50 duration-700   top-0   transition-transform ease-in-out ${brand.bgTransitionClass}`}
                  />
                  <img
                    src={brand.img}
                    alt={`Brand ${index + 1}`}
                    className='relative z-10 max-h-36 max-w-36 transition-transform group-hover:scale-125 duration-700'
                  />
                </div>
                <h1 className='mt-5 font-Abril lg:text-xl'>{brand.label}</h1>
                <h1 className='mb-5 font-Abril lg:text-xl'>
                  {brand.labelHalf}
                </h1>
              </div>
            ))}
          </div>
        </main>
      </section>
    </>
  );
};

export default FeaturedBrand;
