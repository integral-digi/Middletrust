"use client"
import Limiter from "@/app/dashboard/components/Limiter";
import { formLabels, inputStyle, pStyle, sectionStyle } from "./FormOne";

const FormTwo = ({ id, click, goBack }: any) => {
    return (
        <div className="w-full space-y-24">
            <section className="space-y-16 w-[70%] lg:w-full">
                <Limiter bgcolor="#6A5ACD" progress="67" height={8} />
                <section className="space-y-2">
                    <p className="text-slate-600 text-2xl font-secondary dark:text-white">
                        Product Details
                    </p>
                    <p className="text-slate-600 text-base font-primary dark:text-white">
                        Please provide us with all details regarding this product
                    </p>
                </section>
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>
                    {formLabels.inputFive}
                </p>
                <input 
                    className={inputStyle} 
                    type="number" 
                    required 
                />
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>
                    {formLabels.inputSix}
                </p>
                <input 
                    className={inputStyle} 
                    type="number" 
                    required 
                />
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>{formLabels.inputSeven}</p>
                <input 
                    type="date" 
                    className={`${inputStyle} dark:text-white`} 
                    required 
                />
            </section>
            <section className="flex items-center space-x-7">
                <button 
                    className="text-white text-lg font-secondary bg-stone-900 w-fit px-10 h-14 rounded-md" 
                    onClick={goBack}
                >
                    Back
                </button>
                <button 
                    className="text-white text-lg font-secondary bg-indigo-500 w-fit px-10 h-14 rounded-md" 
                    onClick={click}
                >
                    Continue
                </button>
            </section>
        </div>
    );
};

export default FormTwo;
