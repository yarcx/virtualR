import { testimonials } from "../constants";

const Testimonial = () => {
  return (
    <div className='mt-20'>
      <h2 className='mt-6 text-3xl text-center sm:text-5xl lg:mt-6'>
        <span className='text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text'>
          What People{" "}
        </span>
        are saying
      </h2>

      <div className='flex flex-wrap justify-center w-full'>
        {testimonials.map((test, index) => (
          <div key={index} className='w-full px-4 py-2 sm:w-1/2 lg:w-1/3'>
            <div className='p-6 font-thin border rounded-md bg-neutral text-md border-neutral-800'>
              <p className=''>{test.text}</p>
              <div className='flex items-start mt-8'>
                <img
                  src={test.image}
                  alt='profile Image testimonial'
                  className='w-12 h-12 mr-6 border rounded-full border-neutral-300'
                />

                <div>
                  <h6>{test.user}</h6>
                  <span className='block text-sm italic font-normal text-neutral-600'>
                    {test.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
