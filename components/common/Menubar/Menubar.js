import Container from "@/components/reUse/Container";
import { H5 } from "@/components/reUse/Tags";
import Image from "next/image";

const Menubar = () => {
  return (
    <>
      <section className="">
        <Image
          src="/images/banner.png"
          width="1920"
          height="500"
          className="w-full h-[]"
          alt="banner-img"
        />
        <Container>
          <H5 name="২০২৪ এর ৭ জানুয়ারি অনুষ্ঠিত হতে যাচ্ছে দ্বাদশ জাতীয় সংসদ নির্বাচন। এই ওয়েবসাইট দিয়ে চাইলেই খুবই সহজে মাত্র পাঁচ সেকেন্ডে আপনার প্রিয় প্রার্থীর সাথে তৈরি করতে পারেন একটি স্মার্ট ডিজিটাল ব্যানার৷ এক্ষেত্রে শুধু আপনার ছবি, নাম এবং পদবী (যদি থাকে) দিয়ে ডাউনলোড বাটনে চাপ দিলেই আপনার মোবাইলে চলে আসবে আপনার প্রিয় প্রার্থীর সাথে একটি স্মার্ট ডিজিটাল ব্যানার। ব্যানারের গ্যালারি থেকে যেকোনো একটি টেমপ্লেট সিলেক্ট করতে পারবেন আপনার ইচ্ছামত।" className='mt-5 text-center !font-normal' />
        </Container>
      </section>
    </>
  );
};

export default Menubar;
