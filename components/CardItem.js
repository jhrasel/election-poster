import React from "react";
import Container from "./reUse/Container";
import Image from "next/image";
import { H3, H4, H5, H6 } from "./reUse/Tags";

const CardItem = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-5">
        <div className="w-[180px]">
          <Image
            src="/images/img.png"
            width="100"
            height="100"
            alt="img"
            className="w-[150px] h-[150px] rounded-full border-2 border-indigo-500/50"
          />
          <H4
            name="সৈয়দা জাকিয়া নূর"
            className="text-indigo-500 mt-2 !text-xl"
          />
        </div>

        <div className="w-[90%]">
          <H5 name="কিশোরগঞ্জ-১ (কিশোরগঞ্জ সদর এবং হোসেনপুর উপজেলা) আসনে মনোনয়ন পেয়েছেন ডা. সৈয়দা জাকিয়া নূর লিপি। তিনি এই আসনের বর্তমান সংসদ সদস্য। একাদশ জাতীয় সংসদ নির্বাচনে সৈয়দ আশরাফুল ইসলাম কিশোরগঞ্জ-১ আসনে নির্বাচিত হলেও শপথ নেয়ার পূর্বে ৩ জানুয়ারি ২০১৯ সালে মৃত্যুবরণ করেন। ফলে কিশোরগঞ্জ-১ আসনটি শূন্য হয়ে যায়। পরে উপনির্বাচনে জাকিয়া নূর লিপি সংসদ সদস্য নির্বাচিত হন। তিনি মুক্তিযুদ্ধকালীন বাংলাদেশের অস্থায়ী রাষ্ট্রপতি সৈয়দ নজরুল ইসলাম ও নাফিসা ইসলামের মেয়ে। তিনি আওয়ামী লীগের সাবেক সাধারণ সম্পাদক সৈয়দ আশরাফুল ইসলামের ছোট বোন। অবসর মেজর জেনারেল সৈয়দ শাফায়েতুল ইসলাম তার ভাই।" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 m-auto mt-16 w-[1110px]">
        {/* item */}
        <div className="w-[535px] h-[535px] relative">
          <Image
            src="/images/img-banner.png"
            width="535"
            height="535"
            alt="img"
            className="w-full h-full object-cover border-2 border-indigo-500/50"
          />

          {/* position img */}
          <div className="absolute top-20 left-0 w-full text-center">
            <Image
              src="/images/img.png"
              width="120"
              height="120"
              alt="img"
              className="w-[160px] h-[170px] object-cover border-2 border-indigo-500/50 m-auto"
            />
          </div>

          {/* position text */}
          <div className="absolute bottom-32 left-0 text-center w-full">
            <H5
              name="স্মার্ট বাংলাদেশ বিনির্মাণে"
              className="!font-bold text-[#818cf8]"
            />
            <H6
              name="দ্বাদশ জাতীয় সংসদ নির্বাচনে কিশোরগঞ্জ - ০১ আসনে"
              className="!font-bold"
            />
            <H6
              name="বাংলাদেশ আওয়ামী লীগ মনোনীত প্রার্থী"
              className="!font-bold"
            />
            <H3 name="সৈয়দা জাকিয়া নূর" className="text-[#818cf8]" />
          </div>
        </div>
        {/* item */}
        <div className="w-[535px] h-[535px] relative">
          <Image
            src="/images/img-banner.png"
            width="535"
            height="535"
            alt="img"
            className="w-full h-full object-cover border-2 border-indigo-500/50"
          />

          {/* position img */}
          <div className="absolute top-20 left-0 w-full text-center">
            <Image
              src="/images/img.png"
              width="120"
              height="120"
              alt="img"
              className="w-[160px] h-[170px] object-cover border-2 border-indigo-500/50 m-auto"
            />
          </div>

          {/* position text */}
          <div className="absolute bottom-32 left-0 text-center w-full">
            <H5
              name="স্মার্ট বাংলাদেশ বিনির্মাণে"
              className="!font-bold text-[#818cf8]"
            />
            <H6
              name="দ্বাদশ জাতীয় সংসদ নির্বাচনে কিশোরগঞ্জ - ০১ আসনে"
              className="!font-bold"
            />
            <H6
              name="বাংলাদেশ আওয়ামী লীগ মনোনীত প্রার্থী"
              className="!font-bold"
            />
            <H3 name="সৈয়দা জাকিয়া নূর" className="text-[#818cf8]" />
          </div>
        </div>

        {/* item */}
        <div className="w-[535px] h-[535px] relative">
          <Image
            src="/images/img-banner.png"
            width="535"
            height="535"
            alt="img"
            className="w-full h-full object-cover border-2 border-indigo-500/50"
          />

          {/* position img */}
          <div className="absolute top-20 left-0 w-full text-center">
            <Image
              src="/images/img.png"
              width="120"
              height="120"
              alt="img"
              className="w-[160px] h-[170px] object-cover border-2 border-indigo-500/50 m-auto"
            />
          </div>

          {/* position text */}
          <div className="absolute bottom-32 left-0 text-center w-full">
            <H5
              name="স্মার্ট বাংলাদেশ বিনির্মাণে"
              className="!font-bold text-[#818cf8]"
            />
            <H6
              name="দ্বাদশ জাতীয় সংসদ নির্বাচনে কিশোরগঞ্জ - ০১ আসনে"
              className="!font-bold"
            />
            <H6
              name="বাংলাদেশ আওয়ামী লীগ মনোনীত প্রার্থী"
              className="!font-bold"
            />
            <H3 name="সৈয়দা জাকিয়া নূর" className="text-[#818cf8]" />
          </div>
        </div>
        {/* item */}
        <div className="w-[535px] h-[535px] relative">
          <Image
            src="/images/img-banner.png"
            width="535"
            height="535"
            alt="img"
            className="w-full h-full object-cover border-2 border-indigo-500/50"
          />

          {/* position img */}
          <div className="absolute top-20 left-0 w-full text-center">
            <Image
              src="/images/img.png"
              width="120"
              height="120"
              alt="img"
              className="w-[160px] h-[170px] object-cover border-2 border-indigo-500/50 m-auto"
            />
          </div>

          {/* position text */}
          <div className="absolute bottom-32 left-0 text-center w-full">
            <H5
              name="স্মার্ট বাংলাদেশ বিনির্মাণে"
              className="!font-bold text-[#818cf8]"
            />
            <H6
              name="দ্বাদশ জাতীয় সংসদ নির্বাচনে কিশোরগঞ্জ - ০১ আসনে"
              className="!font-bold"
            />
            <H6
              name="বাংলাদেশ আওয়ামী লীগ মনোনীত প্রার্থী"
              className="!font-bold"
            />
            <H3 name="সৈয়দা জাকিয়া নূর" className="text-[#818cf8]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
