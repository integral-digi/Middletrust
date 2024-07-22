import { users } from "./TransactionData";
import { UserProps } from "./TransactionData";
import { formattedCurr } from "@/app/dashboard/components/Balances";

const tableClass = {
    tr: "py-8 pl-12 w-1/4 font-primary text-nowrap"
};
  

const AllTransactions = () => {

    return (
        <div className="space-y-12">
        <div className="xl:overflow-x-scroll border-2 border-blue-300/10 rounded-2xl">
          <table className="min-w-full bg-transparent text-slate-600 dark:text-white text-left">
            <thead className="p-4 dark:bg-[#1E1A1A] bg-neutral-100 text-slate-600 dark:text-white/80 font-secondary">
              <tr className="w-full">
                <th className={tableClass.tr}>Trustee</th>
                <th className={tableClass.tr}>Amount</th>
                <th className={tableClass.tr}>Status</th>
                <th className={tableClass.tr}>Txn Time</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {users.map((user: UserProps, index) => (
                <tr key={user.id} className={` hover:bg-slate-800/10 cursor-pointer ${index % 2 === 0 ? "dark:bg-stone-900 bg-white" : "bg-neutral-100 dark:bg-stone-800/20"}`}>
                  <td className={tableClass.tr}><img className="w-12 h-12 rounded-full" src={user.avatar} alt={user.name} /></td>
                  <td className={tableClass.tr}>${user.lastTxn.amount.toFixed(2)}</td>
                  <td className={tableClass.tr}>{user.lastTxn.status}</td>
                  <td className={tableClass.tr}>{user.lastTxn.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
    );
}

export default AllTransactions;




 