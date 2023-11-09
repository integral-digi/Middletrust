"use client"
import { useState } from "react";
import SideNav from "@/components/dashcomps/SideNav";
import TopBarTwo from "@/components/dashcomps/TopbarTwo";
import FormOne from "./CreateComps/FormOne";
import FormTwo from "./CreateComps/FormTwo";
import FormThree from "./CreateComps/FormThree";

const CreateTx = () => {
    const [formId, setFormId] = useState(1);

    const handleClick = () => {
        setFormId(formId + 1);
    }

    const handleBack = () => {
        setFormId(formId - 1);
    }

    return (
        <div className="w-full dark:bg-[#1E1A1A] dark:text-white lg:w-fit relative h-full min-h-screen">
            <div className="lg:hidden">
                <SideNav />
            </div>
            <div className="mx-auto py-6 w-[64%] lg:w-full lg:px-8">
                <div className="top-0 py-6 w-full">
                    <TopBarTwo currentTitle="create" />
                </div>
                <div className="block pt-8 space-y-24 w-full">
                    {formId === 1 ? (
                        <FormOne id={formId} click={handleClick} />
                    ) : formId === 2 ? (
                        <FormTwo id={formId} click={handleClick} goBack={handleBack} />
                    ) : (
                        <FormThree id={formId} goBack={handleBack} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default CreateTx;
