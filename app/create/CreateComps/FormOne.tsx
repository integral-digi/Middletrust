"use client"
import { useState } from "react";
import Limiter from "@/components/dashcomps/Limiter";

export const sectionStyle: string = "w-[70%] space-y-7";
export const pStyle: string = "text-slate-600 dark:text-white text-base font-secondary";
export const inputStyle: string = "w-full rounded-md border border-gray-300 bg-transparent h-12 font-primary";
export const textAreaStyle: string = "w-full rounded-md border border-gray-300 bg-transparent h-20 font-primary";
export const radioStyle: string = "text-slate-600 text-lg font-book";
export const formLabels = {
    inputOne: "What's your role in this transaction?",
    inputTwo: "What would be a suitable title for this transaction?",
    inputThree: "How would you describe this transaction?",
    inputFour: "Are there any special terms attached to this transaction? if yes, tell us about it",
    inputFive: "How much does the product cost?",
    inputSix: "How much is the shipping fee?",
    inputSeven: "When is the agreed date for delivery?",
    inputEight: "Is there a penalty fee attached, in case the seller fails to make early delivery? If yes, how much? If No, leave it at 0",
    inputNine: "How often should we deduct the agreed penalty fee?",
    inputTen: "What will pay the transaction fee?",
};

const FormOne = ({ id, click }: any) => {
    const [radioValue, setRadioValue] = useState("I'm a buyer");

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue(event.target.value);
    };

    return (
        <div className="w-full space-y-10">
            <section className="space-y-12 w-[70%]">
                <Limiter bgcolor="#6A5ACD" progress="33" height={10} />
                <section className="space-y-2">
                    <p className="text-slate-600 text-2xl font-secondary dark:text-white">Basic Transaction Details</p>
                    <p className="text-slate-600 text-lg font-secondary dark:text-white">Please provide us with all details regarding this contract</p>
                </section>
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>{formLabels.inputOne}</p>
                <section className="flex items-center justify-between">
                    <section className={`w-80 h-24 flex items-center space-x-10 pl-6 rounded-md shadow-md hover:bg-indigo-500 ${radioValue === "I'm a buyer" ? "bg-indigo-500 text-white" : "bg-white text-slate-600"}`} onClick={handleSelect}>
                        <input
                            className={radioStyle}
                            id="role"
                            type="radio"
                            name="options"
                            checked={radioValue === "I'm a buyer"}
                            value="I'm a buyer"
                        />
                        <label className="font-secondary text-lg justify-center">
                            I'm a buyer
                        </label>
                    </section>
                    <section className={`w-80 h-24 flex items-center space-x-10 pl-6 rounded-md shadow-md hover-bg-indigo-500 ${radioValue === "I'm a seller" ? "bg-indigo-500 text-white" : "bg-white text-slate-600"}`} onClick={handleSelect}>
                        <input
                            className={radioStyle}
                            id="role"
                            type="radio"
                            name="options"
                            checked={radioValue === "I'm a seller"}
                            value="I'm a seller"
                        />
                        <label className="font-secondary text-lg">
                            I'm a seller
                        </label>
                    </section>
                </section>
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>{formLabels.inputTwo}</p>
                <input className={inputStyle} type="text" />
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>{formLabels.inputThree}</p>
                <textarea className={textAreaStyle} />
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>{formLabels.inputFour}</p>
                <textarea className={textAreaStyle} />
            </section>
            <section className="flex items-center space-x-7">
                <button className="text-white text-lg font-secondary bg-orange-400 w-40 h-14 rounded-md">Back</button>
                <button className="text-white text-lg font-secondary bg-indigo-500 w-44 h-14 rounded-md" onClick={click}>Continue</button>
            </section>
        </div>
    )
}

export default FormOne;
