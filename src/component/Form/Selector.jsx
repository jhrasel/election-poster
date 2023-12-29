import React from "react";
import Select from "react-select";

const data = [
  { _id: "656f0332b3761ae7b90ecf7b", name: "ঢাকা" },
  { _id: "65705252347ab50ac126ada5", name: "চট্টগ্রাম" },
  { _id: "65705260303eca6fb08db596", name: "রাজশাহী" },
  { _id: "6570526b03f11fcbcbb4e28c", name: "সিলেট" },
  { _id: "6570527268e29850facbad87", name: "রংপুর" },
  { _id: "65705283347ab50ac126ada7", name: "ময়মনসিংহ" },
  { _id: "65705297303eca6fb08db598", name: "বরিশাল" },
  { _id: "657052a003f11fcbcbb4e28e", name: "খুলনা " },
];

const Selector = () => {
  const options=data.map(selector => {
    return {value:selector._id,label:selector.name}
  })
  return <Select options={options} />;
};

export default Selector;
