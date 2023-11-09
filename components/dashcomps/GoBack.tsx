"use client"
import { useRouter } from "next/navigation";

const GoBackButton = () => {
    const router = useRouter();
    const handleGoBack = () => {
        router.back()
    }
    return (
        <img
            src="righticon.svg"
            alt="left"
            className="w-6 h-6 cursor-pointer"
            onClick={handleGoBack}
        />
    )
}

export default GoBackButton;