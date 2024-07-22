"use client"
import { useState } from "react";
import Limiter from "@/app/dashboard/components/Limiter";
import { formLabels, inputStyle, pStyle, sectionStyle, radioCardStyle, radioStyle } from "./FormOne";

const FormThree = ({ id, goBack }: any) => {
    const [radioValue, setRadioValue] = useState("Daily");
    const [radioTwoValue, setRadioTwoValue] = useState("Both");

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue(event.target.value);
    };

    const handleTwoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioTwoValue(event.target.value);
    };

    return (
        <div className="w-full space-y-24">
            <section className="space-y-16 w-[70%] lg:w-full">
                <Limiter bgcolor="#6A5ACD" progress="100" height={8} />
                <section className="space-y-2">
                    <p className="text-slate-600 text-2xl font-secondary dark:text-white">Payment Plan</p>
                    <p className="text-slate-600 text-base font-primary dark:text-white">Please provide us with the payment specifics</p>
                </section>
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>{formLabels.inputEight}</p>
                <input className={inputStyle} type="number" defaultValue="0" />
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>{formLabels.inputNine}</p>
                <section className="flex items-center justify-between flex-1 space-x-4">
                    <section
                        className={radioCardStyle(radioValue, "Daily")}
                        onClick={() => setRadioValue("Daily")}
                    >
                        <input
                            className={radioStyle}
                            id="daily"
                            type="radio"
                            name="options"
                            checked={radioValue === "Daily"}
                            value="Daily"
                            onChange={handleSelect}
                        />
                        <label className="font-secondary text-lg justify-center">
                            Daily
                        </label>
                    </section>
                    <section
                        className={radioCardStyle(radioValue, "Weekly")}
                        onClick={() => setRadioValue("Weekly")}
                    >
                        <input
                            className={radioStyle}
                            id="weekly"
                            type="radio"
                            name="options"
                            checked={radioValue === "Weekly"}
                            value="Weekly"
                            onChange={handleSelect}
                        />
                        <label className="font-secondary text-lg">
                            Weekly
                        </label>
                    </section>
                    <section
                        className={radioCardStyle(radioValue, "Monthly")}
                        onClick={() => setRadioValue("Monthly")}
                    >
                        <input
                            className={radioStyle}
                            id="monthly"
                            type="radio"
                            name="options"
                            checked={radioValue === "Monthly"}
                            value="Monthly"
                            onChange={handleSelect}
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
                    <section
                        className={radioCardStyle(radioValue, "Buyer")}
                        onClick={() => setRadioTwoValue("Buyer")}
                    >
                        <input
                            className={radioStyle}
                            id="buyer"
                            type="radio"
                            name="options"
                            checked={radioTwoValue === "Buyer"}
                            value="Buyer"
                            onChange={handleTwoSelect}
                        />
                        <label className="font-secondary text-lg justify-center">
                            Buyer
                        </label>
                    </section>
                    <section
                        className={radioCardStyle(radioValue, "Seller")}
                        onClick={() => setRadioTwoValue("Seller")}
                    >
                        <input
                            className={radioStyle}
                            id="seller"
                            type="radio"
                            name="options"
                            checked={radioTwoValue === "Seller"}
                            value="Seller"
                            onChange={handleTwoSelect}
                        />
                        <label className="font-secondary text-lg">
                            Seller
                        </label>
                    </section>
                    <section
                        className={radioCardStyle(radioValue, "Both")}
                        onClick={() => setRadioTwoValue("Both")}
                    >
                        <input
                            className={radioStyle}
                            id="both"
                            type="radio"
                            name="options"
                            checked={radioTwoValue === "Both"}
                            value="Both"
                            onChange={handleTwoSelect}
                        />
                        <label className="font-secondary text-lg">
                            Both
                        </label>
                    </section>
                </section>
            </section>
            <section className="flex items-center space-x-7">
                <button     
                    className="text-white text-lg font-secondary bg-stone-900 w-fit px-10 h-14 rounded-md" 
                    onClick={goBack}>
                    Back
                </button>
                <button className="text-white text-lg font-secondary bg-indigo-500 w-fit px-10 h-14 rounded-md">
                    Create
                </button>
            </section>
        </div>
    );
}

export default FormThree;
