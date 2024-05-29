import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className='mt-20'>
      <h2 className='mt-6 text-3xl text-center sm:text-5xl lg:mt-6'>
        Accelerate your
        <span className='text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text'>
          {" "}
          coding workflow
        </span>
      </h2>

      <div className='flex flex-wrap justify-center'>
        <div className='w-full p2 lg:w-1/2'>
          <img src={codeImg} alt='coding image' />
        </div>
        <div className='w-full pt-12 lg:w-1/2'>
          {checklistItems.map((item, index) => {
            return (
              <div key={index} className='flex mb-12 '>
                <div className='items-center justify-center w-10 h-10 p-2 mx-6 text-green-400 rounded-full bg-neutral-900'>
                  <CheckCircle2 />
                </div>

                <div>
                  <h5 className='mb-2 ml-1 text-xl'>{item.title}</h5>
                  <p className='text-md text-neutral-500'>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
