import LeftIcon from "@/public/images/Lefticon";

export interface UserProps {
    id: number; 
    avatar: string;
    name: string;
    email: string;
    mobile: string;
    sales: number;
    purchases: number;
    disputes: number;
    totalSales: number;
    totalPurchases: number;
    lastTxn: {
        time: string; 
        amount: number; 
        status: "completed" | "pending" | "ongoing" | "canceled";
    }
    icon: JSX.Element; 
    isVerified: boolean;
}

export const users: UserProps[] = [
    {
        id: 0,
        avatar: "/avatars/avatar.jpg",
        name: "Daniel Raymonds",
        email: "dray23@gmail.com",
        mobile: "+1 (777) 555-5565",
        sales: 0,
        purchases: 3,
        disputes: 0,
        totalSales: 0,
        totalPurchases: 643,
        lastTxn: {
            time: "7 Hours ago",
            amount: 4250,
            status: "completed"
        },
        icon: <LeftIcon />,
        isVerified: true
    },
    {
        id: 1,
        avatar: "/avatars/1u.jpg",
        name: "Johnny Bravo",
        email: "johnnyboy123@gmail.com",
        mobile: "+1 (777) 555-5565",
        sales: 12,
        purchases: 4,
        disputes: 1,
        totalSales: 2725,
        totalPurchases: 377,
        lastTxn: {
            time: "Yesterday",
            amount: 32.50,
            status: "canceled"
        },
        icon: <LeftIcon />,
        isVerified: true
    },
    {
        id: 2,
        avatar: "/avatars/2u.jpg",
        name: "Saffy Demba",
        email: "saffydafire@gmail.com",
        mobile: "+1 (777) 555-5565",
        sales: 0,
        purchases: 3,
        disputes: 0,
        totalSales: 0,
        totalPurchases: 2660,
        lastTxn: {
            time: "Yesterday",
            amount: 255,
            status: "ongoing"
        },
        icon: <LeftIcon />,
        isVerified: true
    },
    {
        id: 3,
        avatar: "/avatars/3u.jpg",
        name: "Abella Davidson",
        email: "d.abella@gmail.com",
        mobile: "+1 (777) 555-5565",
        sales: 0,
        purchases: 1,
        disputes: 0,
        totalSales: 0,
        totalPurchases: 1299,
        lastTxn: {
            time: "Yesterday",
            amount: 1299,
            status: "ongoing"
        },
        icon: <LeftIcon />,
        isVerified: false
    },
    // Only 4 users allowed || use the slice method to get the 4 most recent transactions
];