"use client";

import { ChangeEvent, ClipboardEvent, KeyboardEvent, SubmitEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const VerifyEmailForm = () => {
  const [otpArr, setOtpArr] = useState<string[]>(Array(6).fill(""));
  const [activeInputIndex, setActiveInputIndex] = useState<number>(0)

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>, i: number) {
    const value = e.target.value.replace(/\D/g, "");

    if (!value) {
      setOtpArr(prev => prev.map((digit, index) =>
        index === i ? "" : digit
      ));
      return;
    }

    setOtpArr(prev => prev.map((el, index) => {
      if (index == i) return value.slice(-1)
      else return el
    }))

    setActiveInputIndex(prev => {
      if (prev < otpArr.length - 1) {
        return prev + 1
      } else {
        return prev
      }
    })
  }

  function onKeyDownHandler(
    e: KeyboardEvent<HTMLInputElement>,
    i: number
  ) {
    if (e.key === "Backspace") {
      setActiveInputIndex(prev => {
        if (prev > 0 && !otpArr[i]) {
          return prev - 1
        } else {
          return prev
        }
      })
    }
  }

  function onPasteHandler(e: ClipboardEvent<HTMLInputElement>) {
    e.preventDefault()

    const otp = e.clipboardData.getData("text").trim()

    if (otp.length < 6) {
      return
    }

    const newOtpArr = [...otp.split("")]

    setOtpArr(newOtpArr)
    setActiveInputIndex(otpArr.length - 1)
  }

  function onFocusHandler(i: number) {
    setActiveInputIndex(i)
  }

  async function onSubmitHandler(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    const isOtpInvalid = otpArr.some(digit => !digit.trim())

    if (isOtpInvalid) {
      toast.error("6-digit OTP is required")
      return
    }
  }

  useEffect(() => {
    inputsRef.current[activeInputIndex]?.focus()
  }, [activeInputIndex])

  return (
    <form onSubmit={onSubmitHandler} className="max-w-75 w-[95%] mx-auto flex flex-col">
      <p className="text-center text-slate-600">
        Enter 6-digit code sent to your email
      </p>

      <div className="flex items-center gap-0.5 mt-3 mb-2">
        {otpArr.map((otpDigit, i) => (
          <input
            key={i}
            ref={el => {
              inputsRef.current[i] = el;
            }}
            value={otpDigit}
            onChange={e => onChangeHandler(e, i)}
            onKeyDown={e => onKeyDownHandler(e, i)}
            onFocus={() => onFocusHandler(i)}
            onPaste={onPasteHandler}
            type="text"
            inputMode="numeric"
            autoComplete={i === 0 ? "one-time-code" : "off"}
            maxLength={6}
            className="border-slate-300 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-700 border rounded outline-none flex-1 aspect-square disabled:cursor-not-allowed disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:text-slate-600 disabled:dark:text-slate-300 transition-all w-1/6 text-center text-2xl"
          />
        ))}
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-slate-50 px-2 py-1.5 rounded my-1 cursor-pointer transition-all hover:bg-indigo-700 outline-none focus:bg-indigo-900"
      >
        Verify Email
      </button>
    </form>
  );
};

export default VerifyEmailForm;