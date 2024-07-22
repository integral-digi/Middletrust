"use client"
import SideNav from "@/app/dashboard/components/SideNav";
import TopBarTwo from "@/app/dashboard/components/TopbarTwo";
import Main from "./ContactComps/Main";

const ContactHome = () => {
  return (
    <div className="w-full dark:bg-[#1E1A1A] dark:text-white xl:w-fit relative h-full min-h-screen">
      <div className="xl:hidden">
        <SideNav />
      </div>
      <div className="mx-auto py-6 w-[64%] xl:w-full xl:px-8">
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