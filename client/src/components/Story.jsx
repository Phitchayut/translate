import React, { useState } from "react";
import { tran } from "../fuctions/tran";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Popover,
  PopoverHandler,
  PopoverContent,
  Spinner,
} from "@material-tailwind/react";

const Story = ({ text }) => {
  const [wordTran, setWordTran] = useState(null);
  const [clickedWord, setClickedWord] = useState(null);
  const words = text.split(" ");
  const handleClick = (word) => {
    tran({ word })
      .then((res) => {
        setWordTran(res.data[0].translations[0].text);
      })
      .catch((err) => console.log(err));
    setClickedWord(word);
    setWordTran(null)
  };
  // console.log(wordTran);

  return (
    <div className="container mx-auto py-5">
      <div className="flex justify-center">
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            {words.map((word, index) => {
              return (
                <React.Fragment key={index}>
                  {word === clickedWord ? (
                    <>
                      <Popover>
                        <PopoverHandler>
                          <span onClick={() => handleClick(word)}>{word} </span>
                        </PopoverHandler>
                        <PopoverContent>
                            {wordTran == null ? (<Spinner />) : (<p>{wordTran}</p>)}
                        </PopoverContent>
                      </Popover>
                    </>
                  ) : (
                    <>
                    <span onClick={() => handleClick(word)}>{word} </span>
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Story;
