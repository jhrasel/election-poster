import Selector from "../Form/Selector";

const Banner = () => {
  return (
    <div class="flex justify-center items-center h-screen w-1/2">
    <div class="container mx-auto grid grid-cols-6 gap-4 shadow-2xl p-6">
      <div class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-5 xl:col-span-2 text-center mb-8">
        <h4 class="text-xl font-bold mb-4">আপনার নির্বাচনী বিভাগ এবং আসন নং নিশ্চিত করুন:</h4>
      </div>
      <div class="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-1 xl:col-span-4 flex justify-center items-center container">
        <div class="w-full md:w-1/2 mb-4 md:mb-0">
          <h5 class="text-lg font-bold mb-2">বিভাগ:</h5>
          <Selector />
        </div>
        <div class="w-full md:w-1/2">
          <h5 class="text-lg font-bold mb-2">আসন নং:</h5>
          <Selector />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Banner;
