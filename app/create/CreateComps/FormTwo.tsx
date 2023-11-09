"use client"
import { useState } from "react";
import Limiter from "@/components/dashcomps/Limiter";
import { formLabels, inputStyle, pStyle, sectionStyle } from "./FormOne";

const FormTwo = ({id, click, goBack}: any) => {
    return (
        <div className="w-full space-y-10">
            <section className="space-y-12 w-[70%]">
                <Limiter bgcolor="#6A5ACD" progress="67"  height={10} />
                <section className="space-y-2">
                    <p className="text-slate-600 text-2xl font-secondary dark:text-white">Product Details</p>
                    <p className="text-slate-600 text-lg font-secondary dark:text-white">Please provide us with all details regarding this product</p>
                </section>
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>{formLabels.inputFive}</p>
                <input className={inputStyle} type="number" />
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>{formLabels.inputSix}</p>
                <input className={inputStyle} type="number" />
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>{formLabels.inputSeven}</p>
                <input type="date" className={`${inputStyle} dark:text-white`} />
            </section>
            <section className="flex items-center space-x-7">
                <button className="text-white text-lg font-secondary bg-orange-400 w-40 h-14 rounded-md"onClick={goBack}>Back</button>
                <button className="text-white text-lg font-secondary bg-indigo-500 w-44 h-14 rounded-md" onClick={click}>Continue</button>
            </section>
        </div>
    )
}

export default FormTwo;