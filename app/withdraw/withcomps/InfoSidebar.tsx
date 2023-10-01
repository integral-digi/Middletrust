interface userInfoProps {
    name: string;
    bank: string;
    accNum: number;
    routing: number;
    serviceCharge: number;
}

const userInfo: userInfoProps = {
    name: "Efe O",
    bank: "Silvergate Bank",
    accNum: 7787778877,
    routing: 60779018,
    serviceCharge: 0
};

const withdrawLabels: string[] = [
    "Amount to Withdraw",
    "Bank",
    "Account Number",
    "Account Name",
    "Routing Number",
    "Service Charge"
];


const InfoBar = () => {

}