import { users } from "./TransactionData";
import { UserProps } from "./TransactionData";
import { formattedCurr } from "@/components/dashcomps/Balances";

const AllTransactions = () => {
    const textStyleOne: string = "text-lefttext-slate-600 dark:text-white text-base font-secondary";
    const textStyleTwo: string = "text-slate-600 dark:text-white text-base font-primary";

    return (
        <div className="w-full space-y-6">
          {users.map((user: UserProps)=> (
            <div className="space-y-6" key={user.id}>
                <div className="flex items-start justify-between w-full">
                    <section className="w-12 h-12 object-cover">
                        <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full"/>
                    </section>
                    <section className="block w-1/4">
                        <section className={textStyleOne}>{user.name}</section>
                        <section className={textStyleTwo}>{user.lastTxn.time}</section>
                    </section>
                    <section className="block w-1/4">
                        <span className={textStyleOne}>{formattedCurr(user.lastTxn.amount)}</span>
                    </section>
                    <section className="block w-1/4">
                        <span className={textStyleOne}>{user.lastTxn.status}</span>
                    </section>
                    <section className="h-3 w-auto">
                        {user.icon}
                    </section>
                </div>
                <hr className="w-full h-0.5 bg-neutral-100" />
            </div>
          ))}  
        </div>
    );
}

export default AllTransactions;