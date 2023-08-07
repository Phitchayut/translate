import React, { useState } from "react";
import { tran } from "../fuctions/tran";

const Story = ({ text }) => {
  const [wordTran, setWordTran] = useState(null);
  const words = text.split(" ");
  const handleClick = (word) => {
    console.log(word);
    tran({ word })
      .then((res) => {
        setWordTran(res.data[0].translations[0].text);
      })
      .catch((err) => console.log(err));
  };
  alert(wordTran)
  return (
    <div className="container mx-auto py-5">
      <div className="flex justify-center">
        <div className="card w-[32rem] bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/14A4B/production/_123355548_273225536_5387239747969927_3174953441515970260_n.jpg.webp"
              alt="Shoes"
              className="w-full h-[20rem] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bear!!</h2>
            <div>
              {words.map((word, index) => (
                <React.Fragment key={index}>
                  <span onClick={() => handleClick(word, index)}>
                    {word}
                    </span>
                    {" "}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
