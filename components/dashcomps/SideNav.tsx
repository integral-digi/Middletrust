"use client"
import { useState } from 'react';
import Link from 'next/link';

interface NavbarLinkProps {
  icon: string;
  label: string;
  active?: boolean;
  onClick?(): void;
}

const navData = [
  { icon: "Home.svg", label: 'Home', href: "/home" },
  { icon: "Transaction.svg", label: 'Deposit Funds', href: "/deposits" },
  { icon: "Withdrawal.svg", label: 'Withdraw Funds', href: "/withdrawal" },
  { icon: "Summary.svg", label: 'Releases', href: "/transactions" },
  { icon: "Trustlinkdash.svg", label: 'Trustlink' , href: "/trustlink"},
  { icon: "Profile.svg", label: 'Account', href: "/account" },
];

const navDataTwo = [
  { icon: "Settings.svg", label: 'Settings', href: "/settings" },
  { icon: "Referral.svg", label: 'Refer', href: "/refer" }
];

const SideNav = () => {
  const [active, setActive] = useState(2);

  const links = navData.map((link, index) => (
    <div
      {...link}
      key={link.label}
      onClick={() => setActive(index)}
      className='py-6'
    >
      <Link href={link.href} className=''>
        <img src={link.icon} alt={link.label} className='w-6 h-6' />
      </Link>
    </div>
  ));

  return (
    <nav className="w-24 h-screen bg-neutral-100 dark:bg-stone-900 absolute left-0 top-0">
       <div className='relative mx-auto px-8 pt-12 justify-center items-center space-y-16'>
        <div className=''>
          <img src='midicon.svg' className='' alt='logo' />
        </div>
        <div className=''>
          {links}
        </div>
        <div className=''>
          {navDataTwo.map((link, index)=> (
            <div key={index} className='py-6'>
              <Link href={link.href} className=''>
                <img src={link.icon} alt={link.label} className='w-6 h-6' />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SideNav;