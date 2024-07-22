"use client"
import { useState } from "react";
import SideNav from "@/app/dashboard/components/SideNav";
import TopBarTwo from "@/app/dashboard/components/TopbarTwo";
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
import FormThree from "./components/FormThree";

const CreateTx = () => {
    const [formId, setFormId] = useState(1);

    const handleClick = () => {
        setFormId(formId + 1);
    }

    const handleBack = () => {
        setFormId(formId - 1);
    }

    return (
        <div className="w-full dark:bg-[#1E1A1A] dark:text-white xl:w-full relative h-full min-h-screen">
            <div className="xl:hidden">
                <SideNav />
            </div>
            <div className="flex items-center justify-center">
                <div className="mx-auto py-6 w-[64%] xl:w-full xl:px-8">
                    <div className="top-0 py-6 w-full">
                        <TopBarTwo currentTitle="Create" />
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
        </div>
    );
}

export default CreateTx;
