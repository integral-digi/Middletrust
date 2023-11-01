"use client"
import SignInForm from "./SigninComps/Form"
import Banner from "./SigninComps/SigninBanner"

const SignIn = () => {
    return (
        <div className="flex h-full w-full lg:px-8">
            <div className="w-1/2 lg:hidden">
                <Banner />
            </div>
            <div className="w-1/2 mx-auto lg:w-full">
                <SignInForm /> 
            </div>           
        </div>
    );
}

export default SignIn;