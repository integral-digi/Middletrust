'use client';
import { Disclosure, Transition } from '@headlessui/react';
import { PlusSmallIcon } from '@heroicons/react/24/outline';
import {useState} from "react";

//Custom Type Declarations
interface Chevron {
    dark: JSX.Element;
    light: JSX.Element;
}

interface FaqType {
    id: number;
    step: string;
    description: string;
    icon: JSX.Element;
};

//Key Variables Usable within this module
const plusIcon: Chevron = {
    dark: <PlusSmallIcon className="w-6 h-6 relative" />,
    light: <PlusSmallIcon className="w-6 h-6 text-gray-500" />,
};

// const [disclose, setDisclose] = useState(false);

const steps: string[] = [
    "Create an account",
    "Initiate a transaction",
    "Buyer secures payment on Middletrust",
    "Deliver the agreed product or service",
    "Get paid"
];

const stepDescription: string[] = [
    "Start by creating an account on Middletrust's platform. It's quick, easy, and completely free!",
    "Once you've created your account, you can initiate a transaction by creating an escrow agreement. This agreement will outline the terms of the transaction and specify the conditions under which the funds will be released.",
    "Once the agreement has been created, the buyer will deposit the funds into an escrow account managed by Middletrust. This ensures that the funds are secure and protected until the transaction is complete.",
    "The seller will then deliver the goods or services to the buyer, as specified in the agreement. Once the buyer has verified that everything is as expected, they can release the funds to the seller.",
    "If any issues arise during the transaction, Middletrust's expert team is on hand to provide assistance and resolve any disputes that may arise."
];

const stepElements: FaqType[] = steps.map((step, index) => ({
    id: index,
    step,
    description: stepDescription[index],
    icon: plusIcon.dark,
}));

//The main FAQ function (Arrow Function exported at the end of the module)
const FAQ = () => {
    return (
        <div className='w-[540px] h-[100%] block lg:w-[100%]'>
            {stepElements.map((stepElement) => (
                <Disclosure as="div">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex py-[28px] w-full justify-between">
                                <div className='left-0 text-slate-600 dark:text-white text-lg font-primary lg:text-left lg:flex-wrap'>{stepElement.step}</div>
                                <div className='w-4 h-4 relative dark:text-white'>{stepElement.icon}</div>
                            </Disclosure.Button>
                                <hr className='w-[540px] h-px bg-gray-300 lg:w-[100%]' />
                            <Transition
                                enter="transition duration-250 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-100 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className="py-[36px]">
                                    <div className='dark:text-white'>{stepElement.description}</div>
                                </Disclosure.Panel>
                                    <hr className='w-[540px] h-px bg-gray-300 lg:w-[100%]' />
                            </Transition>
                        </>
                    )}
                    </Disclosure>
            ))}
        </div>
    );
};

export default FAQ;