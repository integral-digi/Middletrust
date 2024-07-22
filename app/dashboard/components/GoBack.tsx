"use client"
import RightIcon from "@/public/images/RightIcon";
import { useRouter } from "next/navigation";

const GoBackButton = () => {
    const router = useRouter();
    const handleGoBack = () => {
        router.back()
    }
    return (
        <div
            className="w-6 h-6 cursor-pointer"
            onClick={handleGoBack}
        >
            <RightIcon />
        </div>
    )
}

export default GoBackButton;