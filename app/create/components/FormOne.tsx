import { useState } from "react";
import Limiter from "@/app/dashboard/components/Limiter";

export const sectionStyle = "w-[70%] space-y-7 lg:w-full";
export const pStyle = "text-slate-600 dark:text-white text-base font-secondary";
export const inputStyle = "w-full rounded-md border-2 border-gray-300 dark:border-slate-600 bg-transparent h-12 font-primary";
export const textAreaStyle = "w-full rounded-md border-2 border-gray-300 dark:border-slate-600 bg-transparent h-20 font-primary";
export const radioStyle = "text-indigo-500 text-lg font-book dark:text-white";
export const radioCardStyle = (radioValue: string, value: string) =>
  `w-80 lg:w-full h-24 flex items-center space-x-10 lg:space-x-3 px-6 rounded-md shadow-md cursor-pointer transition-colors ${
    radioValue === value ? "bg-indigo-500 text-white" : "bg-white text-slate-600 dark:bg-stone-800 dark:text-white"
  }`;

export const formLabels = {
  inputOne: "What's your role in this transaction?",
  inputTwo: "What would be a suitable title for this transaction?",
  inputThree: "How would you describe this transaction?",
  inputFour: "Are there any special terms attached to this transaction? if yes, tell us about it",
  inputFive: "How much does the product cost?",
  inputSix: "How much is the shipping fee?",
  inputSeven: "When is the agreed date for delivery?",
  inputEight: "Is there a penalty fee attached, in case the seller fails to make early delivery? If yes, how much? If no, leave it at 0",
  inputNine: "How often should we deduct the agreed penalty fee?",
  inputTen: "What will pay the transaction fee?",
};

const FormOne = ({ id, click }: { id: number; click: () => void }) => {
  const [radioValue, setRadioValue] = useState("I'm a buyer");

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };

  return (
    <div className="w-full space-y-24">
      <section className="space-y-16 w-[70%] lg:w-full">
        <Limiter bgcolor="#6A5ACD" progress="33" height={8} />
        <section className="space-y-2">
            <p className="text-slate-600 text-2xl font-secondary dark:text-white">
                Basic Transaction Details
            </p>
            <p className="text-slate-600 text-base font-primary dark:text-white">
                Please provide us with all details regarding this contract
            </p>
        </section>
      </section>
      <section className={sectionStyle}>
        <p className={pStyle}>{formLabels.inputOne}</p>
        <section className="flex items-center justify-between lg:space-x-4">
          <section
            className={radioCardStyle(radioValue, "I'm a buyer")}
            onClick={() => setRadioValue("I'm a buyer")}
          >
            <input
              className={radioStyle}
              id="roleBuyer"
              type="radio"
              name="options"
              checked={radioValue === "I'm a buyer"}
              value="I'm a buyer"
              onChange={handleSelect}
            />
            <label
              htmlFor="roleBuyer"
              className="font-secondary text-lg dark:text-white justify-center cursor-pointer"
            >
              I'm a buyer
            </label>
          </section>
          <section
            className={radioCardStyle(radioValue, "I'm a seller")}
            onClick={() => setRadioValue("I'm a seller")}
          >
            <input
              className={radioStyle}
              id="roleSeller"
              type="radio"
              name="options"
              checked={radioValue === "I'm a seller"}
              value="I'm a seller"
              onChange={handleSelect}
            />
            <label
              htmlFor="roleSeller"
              className="font-secondary text-lg dark:text-white justify-center cursor-pointer"
            >
              I'm a seller
            </label>
          </section>
        </section>
      </section>
      <section className={sectionStyle}>
        <p className={pStyle}>{formLabels.inputTwo}</p>
        <input className={inputStyle} type="text" required />
      </section>
      <section className={sectionStyle}>
        <p className={pStyle}>{formLabels.inputThree}</p>
        <textarea className={textAreaStyle} required />
      </section>
      <section className={sectionStyle}>
        <p className={pStyle}>{formLabels.inputFour}</p>
        <textarea className={textAreaStyle} required />
      </section>
      <section className="flex items-center space-x-7">
        <button className="text-white text-lg font-secondary bg-stone-900 w-fit px-10 h-14 rounded-md">Back</button>
        <button className="text-white text-lg font-secondary bg-indigo-500 w-fit px-10 h-14 rounded-md" onClick={click}>
          Continue
        </button>
      </section>
    </div>
  );
};

export default FormOne;
