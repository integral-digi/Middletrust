import { useState } from "react";
import { user } from "./UserData";  
export const sectionStyle: string = "w-full space-y-7";
export const pStyle: string = "text-slate-600 dark:text-white text-base font-secondary";
export const inputStyle: string = "w-full rounded-md border border-gray-300 dark:border-slate-600 text-slate-600 bg-transparent h-12 font-primary";


const PersonalSettings = () => {
    const [userName, setUserName] = useState(user.username);
    const handleUChange = (event: any) => {
        setUserName(event.target.value)
    }
    const [firstName, setFirstName] = useState(user.firstName);
    const handleFChange = (event: any) => {
        setFirstName(event.target.value)
    }
    const [lastName, setLastName] = useState(user.lastName);
    const handleLChange = (event: any) => {
        setLastName(event.target.value)
    }
    const [address, setAddress] = useState(user.address);
    const handleAddChange = (event: any) => {
        setAddress(event.target.value)
    }
    return (
        <div className="w-[70%] min-h-screen space-y-16">
            <section className="space-y-8 w-full">
                <img src={user.avatar} alt={user.username} className="w-24 h-24 rounded-full" />
                <section className={sectionStyle}>
                    <p className={pStyle}>Username</p>
                    <section className="relative">
                        <input type="text" className={inputStyle} value={userName} onChange={handleUChange} />
                        <img src="/username.svg" alt="User Icon" className="w-4 h-4 absolute right-4 top-4" />
                    </section>
                </section>
                <section className="flex flex-1 items-center space-x-16">
                    <section className="space-y-7 w-full">
                        <p className={pStyle}>First Name</p>
                        <input type="text" className={inputStyle} value={firstName} onChange={handleFChange} />
                    </section>
                    <section className="space-y-7 w-full">
                        <p className={`${pStyle} text-right`}>Last Name</p>
                        <input type="text" className={inputStyle} value={lastName} onChange={handleLChange} />
                    </section>
                </section>
                <section className={sectionStyle}>
                    <p className={pStyle}>Address</p>
                    <input type="text" className={inputStyle} value={address} onChange={handleAddChange} />
                </section>
            </section>
            <button className="text-white text-lg font-secondary bg-indigo-500 w-48 h-14 rounded-md">Save Changes</button>
        </div>
    )
}

export default PersonalSettings;