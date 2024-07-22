const ctaContent = {
    backgroundImage: "/assets/bg-image-opaque.svg",
    title: "Why wait?",
    titletwo: "Get started now",
    signUpText: "Sign up now",
    googlePlayImage: "/assets/googleplay.svg",
    appleStoreImage: "/assets/apple.svg",
    backgroundImageTwo: "/assets/bg-image-opaque-two.svg"
  };
  
  const CTA = () => {
      return (
        <div className="w-full h-fit px-24 xl:px-8 dark:bg-[#1E1A1A]">
            <div className="relative bg-indigo-500 dark:bg-stone-900 overflow-clip">
                <div className="bg-image-opaque absolute left-0 top-0 xl:hidden">
                    <img 
                        className="w-fit"
                        src={ctaContent.backgroundImage} 
                        alt="background image" 
                    />
                </div>   
                <div className="py-36">  
                    <div className="w-full flex flex-col items-center justify-center space-y-12">     
                        <div className="w-full flex flex-col justify-center space-y-4"> 
                            <h1 className="text-center text-white leading-normal font-secondary text-6xl xl:text-4xl xl:leading-relaxed">
                                {ctaContent.title}
                            </h1>
                            <h1 className="text-center text-white leading-normal font-secondary text-6xl xl:text-4xl xl:leading-relaxed">
                                {ctaContent.titletwo}
                            </h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="h-16 px-12 rounded-xl border border-white hover:bg-white">
                                <p className="text-white text-lg hover:text-indigo-500 font-black">
                                    {ctaContent.signUpText}
                                </p>
                            </button>
                            <button className="w-fit h-16 px-8 bg-white rounded-xl xl:hidden">
                                <img 
                                    src={ctaContent.googlePlayImage}
                                    alt="google play"
                                    className="w-6 h-6" />
                            </button>
                            <button className="w-fit h-16 px-8 bg-white rounded-xl xl:hidden">
                                <img 
                                    src={ctaContent.appleStoreImage}
                                    alt="apple store"
                                    className="w-6 h-6" />
                            </button>
                        </div>
                    </div>  
                </div> 
                <div className="bg-image-opaque-two absolute bottom-0 right-0">
                    <img 
                        className="w-fit"
                        src={ctaContent.backgroundImageTwo}
                        alt="background image" 
                    /> 
                </div>             
            </div>
        </div>
      );
  };
  
  export default CTA;
  