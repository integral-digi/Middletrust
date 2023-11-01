import { useState } from "react";
import { Tab } from "@headlessui/react";
import { TypeAnimation } from "react-type-animation";
import { codeNode, codePython, codePHP, codeGolang, codeJava } from './CodeAPI';

const DevOptions = () => {
    return (
        <div className="flex flex-col w-full py-6 sm:px-0 sm:block sm:mx-auto">
            <Tab.Group>
                <Tab.List className="w-max justify-evenly space-x-4 py-1 px-2 rounded-[50px] bg-blue-900/20 ml-9">
                    <Tab className="px-2 py-1 ui-selected:bg-[#1E1A1A] ui-selected:text-white ui-selected:rounded-[50px] ui-selected:px-4">
                         Node
                    </Tab>
                    <Tab className="px-2 py-1 ui-selected:bg-[#1E1A1A]  ui-selected:text-white ui-selected:rounded-[50px] ui-selected:px-4" >Python</Tab>
                    <Tab className="px-2 py-1 ui-selected:bg-[#1E1A1A] ui-selected:text-white ui-selected:rounded-[50px] ui-selected:px-4">PHP</Tab>
                    <Tab className="px-2 py-1 ui-selected:bg-[#1E1A1A] ui-selected:text-white ui-selected:rounded-[50px] ui-selected:px-4">Golang</Tab>
                    <Tab className="px-2 py-1" disabled>Java</Tab>
                </Tab.List>
                <Tab.Panels className="font-mono w-max pt-6 sm:mx-auto sm:w-[338px] pr-8">
                    <Tab.Panel>
                        {codeNode}
                    </Tab.Panel>
                    <Tab.Panel>
                        {codePython}
                    </Tab.Panel>
                    <Tab.Panel>
                        {codePHP}
                    </Tab.Panel>
                    <Tab.Panel>
                        {codeGolang}
                    </Tab.Panel>
                    <Tab.Panel>
                        {codeJava}
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default DevOptions;