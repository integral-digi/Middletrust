"use client"
import SideNav from "@/components/dashcomps/SideNav";
import TopBarTwo from "@/components/dashcomps/TopbarTwo";
import Main from "./ContactComps/Main";

const ContactHome = () => {
  return (
    <div className="w-full dark:bg-[#1E1A1A] dark:text-white lg:w-fit relative h-full min-h-screen">
      <div className="lg:hidden">
        <SideNav />
      </div>
      <div className="mx-auto py-6 w-[64%] lg:w-full lg:px-8">
        <div className="top-0 py-6 w-full">
          <TopBarTwo currentTitle="contacts" />
        </div>
        <div className="block pt-8 space-y-24 w-full">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default ContactHome;