import { configure } from "@testing-library/react";
import React, { useState } from "react";
import check from "../assets/check.png";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [closeModal, setcloseModal] = useState(true);
  const [customStyle, setCustomStyle] = useState({});
  const [toggle, setToggleVar] = useState(false);

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnChange1 = (event) => {
    setText1(event.target.value);
  };

  const handleUpClick = () => {
    const newtext = text.toUpperCase();
    setText1(newtext);
  };

  const handleLowClick = () => {
    const newtext = text.toLowerCase();
    setText1(newtext);
  };

  const removeSpaces = () => {
    const newtext = text.replaceAll(" ", "");
    setText1(newtext);
  };

  const alphaCount = () => {
    let a = 0;
    for (let i = 0; i < text.length; i++) {
      if (
        (text[i] >= "a" && text[i] <= "z") ||
        (text[i] >= "A" && text[i] <= "Z")
      ) {
        a++;
      }
    }
    return a;
  };

  const wordCount = () => {
    return text.split(" ").filter(function (n) {
      return n !== "";
    }).length;
  };

  const removeExtraSpaces = () => {
    setText1(text.replace(/\s+/g, " "));
  };

  const bold = () => {
    if (toggle === false) {
      setToggleVar(true);
      setText1(text);
      setCustomStyle({ fontWeight: "bold" });
    } else {
      setText1(text);
      setToggleVar(false);
      setCustomStyle({ fontWeight: "normal" });
    }
  };
  const talic = () => {
    setText1(text);
    setCustomStyle({ fontStyle: "italic" });
  };

  const sentenceCase = () => {
    let array = text.split(".");
    array = array.map(
      (element) => element.charAt(0).toUpperCase() + element.slice(1)
    );
    setText1(array.join("."));
  };

  const removePunc = () => {
    setText1(text.replace(/[.,\/#!$%^@&*;:{}=\-_`~()?"'<>]/g, ""));
  };

  const underline = () => {
    setText1(text);
    setCustomStyle({ textDecoration: "underline" });
  };

  const Strikethrough = () => {
    setText1(text);
    setCustomStyle({ textDecoration: "line-through" });
  };

  const copyText = async () => {
    try {
      navigator.clipboard.writeText(text1);
    } catch (error) {
      console.log(error);
    }
    setcloseModal(false);
    setTimeout(() => {
      setcloseModal(true);
    }, 2000);
  };

  return (
    <>
      <div className={closeModal ? "hidden" : "block"}>
        <div
          id="popup-modal"
          tabIndex="-1"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-md max-h-full absolute left-1/2 translate-x-[-50%]">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center justify-center">
                {
                  <div className="flex justify-center mb-2">
                    <img src={check} alt="" className="w-10 h-10r" />
                  </div>
                }
                <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
                  Copied To Clipboard
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`last bg-gray-0 `} id="started">
        <div
          className={`lower bg-gray-100-200  py-10 w-full p-5 justify-around flex  flex-wrap sm:gap-7 min-[260px]:gap-7 bg-${props.mode}`}
        >
          <div className="txt1">
            <textarea
              name=""
              id=""
              cols="70"
              rows="13"
              placeholder="Input text here.."
              className={`text-${props.mode2} rounded-lg w-full p-2 border-slate-300 border-1 bg-${props.mode3}`}
              value={text}
              onChange={handleOnChange}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            ></textarea>
          </div>
          <div className={`txt2 `}>
            <textarea
              name=""
              id=""
              cols="70"
              rows="13"
              placeholder="Output text here.."
              className={`text-${props.mode2} rounded-lg w-full p-2 bg-gray-50 border-slate-300 border-1 bg-${props.mode3} `}
              value={text1}
              onChange={handleOnChange1}
              style={customStyle}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            ></textarea>
          </div>
        </div>
        <div
          className={`py-8 flex bg-${props.mode} flex-wrap justify-around w-full h-auto min-[270px]:w-450px sm:w-full lg:w-54/100 lg:px-28  `}
        >
          <button
            className="btn btn-danger mx-3 my-3"
            onClick={() => {
              setText(text1);
            }}
          >
            Make Input As Output
          </button>
          <button className="btn btn-danger mx-3 my-3" onClick={copyText}>
            Copy To Clipboard
          </button>

          <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>
            Uppercase
          </button>

          <button
            className="btn btn-primary mx-3 my-3"
            onClick={removeExtraSpaces}
          >
            Remove Extra Spaces
          </button>

          <button
            className="btn btn-primary mx-3 my-3"
            onClick={handleLowClick}
          >
            Lowercase
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={removeSpaces}>
            Remove Spaces
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={bold}>
            Bold
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={underline}>
            Underline
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={removePunc}>
            Remove Punctuation
          </button>

          <button className="btn btn-primary mx-3 my-3" onClick={talic}>
            Italic
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={sentenceCase}>
            Sentence Case
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={Strikethrough}>
            Strikethrough
          </button>
          <button
            className="btn btn-primary mx-3 my-3"
            onClick={() => {
              if (toggle === false) {
                setToggleVar(true);
                setText1(text.replace(/[[\]{}()]/g, ""));
              } else {
                setText1(text);
                setToggleVar(false);
              }
            }}
          >
            Remove Brackets
          </button>
          <button
            className="btn btn-primary mx-3 my-3"
            onClick={() => {
              if (toggle === false) {
                setToggleVar(true);
                setText1(text.replace(/[ ]/g, "😍"));
              } else {
                setText1(text);
                setToggleVar(false);
              }
            }}
          >
            Emoji
          </button>
          <button
            className="btn btn-primary mx-3 my-3"
            onClick={() => {
              if (toggle === false) {
                setToggleVar(true);
                setText("");
              } else {
                setText(text1);
                setToggleVar(false);
              }
            }}
          >
            Clear Text
          </button>
          <button className="btn btn-success mx-3 my-3">
            Can Be Read in {0.008 * text.split(" ").length} minutes
          </button>
          <button className="btn btn-success mx-3 my-3">
            Number of Alphabets : {alphaCount()} | Number of Words :{" "}
            {wordCount()}{" "}
          </button>
        </div>
      </div>
    </>
  );
}
