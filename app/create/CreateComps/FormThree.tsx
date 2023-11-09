"use client"
import { useState } from "react";
import Limiter from "@/components/dashcomps/Limiter";
import { formLabels, inputStyle, pStyle, sectionStyle, radioStyle } from "./FormOne";

const FormThree = ({id, goBack}: any) => {
    const [radioValue, setRadioValue] = useState("Daily");

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue(event.target.value);
    };

    const [radioTwoValue, setRadioTwoValue] = useState("Both");

    const handleTwoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioTwoValue(event.target.value);
    };

    return (
        <div className="w-full space-y-10">
            <section className="space-y-12 w-[70%]">
                <Limiter bgcolor="#6A5ACD" progress="100"  height={8} />
                <section className="space-y-2">
                    <p className="text-slate-600 text-2xl font-secondary dark:text-white">Payment Plan</p>
                    <p className="text-slate-600 text-lg font-secondary dark:text-white">Please provide us with the payment specifics</p>
                </section>
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>{formLabels.inputEight}</p>
                <input className={inputStyle} type="number" value="0" />
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>{formLabels.inputNine}</p>
                <section className="flex items-center justify-between flex-1 space-x-4">
                    <section className={`w-full h-24 flex items-center space-x-10 pl-6 rounded-md shadow-md hover:text-white hover:bg-indigo-500 ${radioValue === "Daily" ? "bg-indigo-500 text-white" : "bg-white text-slate-600"}`} onClick={handleSelect}>
                        <input
                            className={radioStyle}
                            id="role"
                            type="radio"
                            name="options"w-full
                            checked={radioValue === "Daily"}
                            value="Daily"
                        />
                        <label className="font-secondary text-lg justify-center">
                            Daily
                        </label>
                    </section>
                    <section className={`w-full h-24 flex items-center space-x-10 pl-6 rounded-md shadow-md hover:text-white hover:bg-indigo-500 ${radioValue === "Weekly" ? "bg-indigo-500 text-white" : "bg-white text-slate-600"}`} onClick={handleSelect}>
                        <input
                            className={radioStyle}
                            id="role"
                            type="radio"
                            name="options"
                            checked={radioValue === "Weekly"}
                            value="Weekly"
                        />
                        <label className="font-secondary text-lg">
                            Weekly
                        </label>
                    </section>
                    <section className={`w-full h-24 flex items-center space-x-10 pl-6 rounded-md shadow-md hover:text-white hover:bg-indigo-500 ${radioValue === "Monthly" ? "bg-indigo-500 text-white" : "bg-white text-slate-600"}`} onClick={handleSelect}>
                        <input
                            className={radioStyle}
                            id="role"
                            type="radio"
                            name="options"
                            checked={radioValue === "Monthly"}
                            value="Monthly"
                        />
                        <label className="font-secondary text-lg">
                            Monthly
                        </label>
                    </section>
                </section>
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>{formLabels.inputTen}</p>
                <section className="flex items-center justify-between flex-1 space-x-4">
                    <section className={`w-full h-24 flex items-center space-x-10 pl-6 rounded-md shadow-md hover:bg-indigo-500 ${radioTwoValue === "Buyer" ? "bg-indigo-500 text-white" : "bg-white text-slate-600"}`} onClick={handleTwoSelect}>
                        <input
                            className={radioStyle}
                            id="role"
                            type="radio"
                            name="options"w-full
                            checked={radioTwoValue === "Buyer"}
                            value="Buyer"
                        />
                        <label className="font-secondary text-lg justify-center">
                            Buyer
                        </label>
                    </section>
                    <section className={`w-full h-24 flex items-center space-x-10 pl-6 rounded-md shadow-md hover-bg-indigo-500 ${radioTwoValue === "Seller" ? "bg-indigo-500 text-white" : "bg-white text-slate-600"}`} onClick={handleTwoSelect}>
                        <input
                            className={radioStyle}
                            id="role"
                            type="radio"
                            name="options"
                            checked={radioTwoValue === "Seller"}
                            value="Seller"
                        />
                        <label className="font-secondary text-lg">
                            Seller
                        </label>
                    </section>
                    <section className={`w-full h-24 flex items-center space-x-10 pl-6 rounded-md shadow-md hover-bg-indigo-500 ${radioTwoValue === "Both" ? "bg-indigo-500 text-white" : "bg-white text-slate-600"}`} onClick={handleTwoSelect}>
                        <input
                            className={radioStyle}
                            id="role"
                            type="radio"
                            name="options"
                            checked={radioTwoValue === "Both"}
                            value="Both"
                        />
                        <label className="font-secondary text-lg">
                            Both
                        </label>
                    </section>
                </section>
            </section>
            <section className="flex items-center space-x-7">
                <button className="text-white text-lg font-secondary bg-orange-400 w-40 h-14 rounded-md" onClick={goBack}>Back</button>
                <button className="text-white text-lg font-secondary bg-indigo-500 w-44 h-14 rounded-md">Create</button>
            </section>
        </div>
    )
}

export default FormThree;