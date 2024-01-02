import React from "react";
import Container from "./reUse/Container";
import { H3, H4, H5, P } from "./reUse/Tags";
import CardItem from "./CardItem";

const Area = () => {
  return (
    <section>
      <Container>
        <div className="bg-white p-8 rounded-3xl shadow-md border-4 border-indigo-200 border-t-indigo-500">
          <H3 name="আপনার নির্বাচনী বিভাগ এবং আসন নং নিশ্চিত করুন:" />

          <div className="grid grid-cols-2 mt-3 gap-7">
            {/* item */}
            <div className="">
              <H5 name="বিভাগ:" className="!font-normal mb-2" />
              <select
                name=""
                className="w-full border-2 border-indigo-500/50 p-4 rounded-lg"
              >
                <option value="">select</option>
              </select>
            </div>
            {/* item */}
            <div className="">
              <H5 name="আসন নং:" className="!font-normal mb-2" />
              <select
                name=""
                className="w-full border-2 border-indigo-500/50 p-4 rounded-lg"
              >
                <option value="">select</option>
              </select>
            </div>
          </div>
        </div>

        <CardItem />

        <P
          name="বি.দ্র: এই ওয়েবসাইট টি সম্পূর্ণ নিজ উদ্যোগে করা হয়েছে এবং অধিকাংশ ছবি অনলাইন থেকে সংগ্রহ করা হয়েছে। যদি কোন মনোনীত প্রার্থী উনার ছবি পরিবর্তন করতে চায় তাহলে support@fifo-tech.com ইমেইলে নতুন ছবিটি দিলে পরিবর্তন করে দেয়া হবে।"
          className="mt-8 !text-lg text-center"
        />
      </Container>
    </section>
  );
};

export default Area;
