"use client"
import { useState } from 'react';
import { Tooltip } from 'flowbite-react';
import Link from 'next/link';

interface NavbarLinkProps {
  icon: string;
  label: string;
  href: string;
}

const navData: NavbarLinkProps[] = [
  { icon: "Home.svg", label: 'Home', href: "/dashboard" },
  { icon: "Transaction.svg", label: 'Deposit Funds', href: "/deposit" },
  { icon: "Withdrawal.svg", label: 'Withdraw Funds', href: "/withdraw" },
  { icon: "Summary.svg", label: 'transactions', href: "/transactions" },
  { icon: "Trustlinkdash.svg", label: 'Trustlink', href: "/trustlink" },
  { icon: "Profile.svg", label: 'Contacts', href: "/contacts" }
];

const navDataTwo: NavbarLinkProps[] = [
  { icon: "Settings.svg", label: 'Account', href: "/account" },
  { icon: "Referral.svg", label: 'Refer', href: "/refer" },
];

const SideNav = () => {
  const [active, setActive] = useState<number | null>(2);

  const handleLinkClick = (index: number) => {
    setActive(index);
  };

  const renderLinks = (links: NavbarLinkProps[]) => {
    return links.map((link, index) => (
      <div key={link.label} onClick={() => handleLinkClick(index)} className='py-6'>
        <Tooltip
          animation="duration-1000"
          style='light'
          placement='right'
          content={link.label}
          className='dark:bg-stone-900 dark:text-white font-primary w-max px-4 py-4 left-8'>
          <Link href={link.href}>
            <img src={link.icon} alt={link.label} className='w-6 h-6' />
          </Link>
        </Tooltip>
      </div>
    ));
  };

  return (
    <nav className="w-24 h-screen bg-neutral-100 dark:bg-stone-900 fixed left-0 top-0">
      <div className='relative mx-auto px-8 py-12 justify-center items-center space-y-16'>
        <div className='cursor-pointer'>
          <img src='midicon.svg' alt='logo' />
        </div>
        <div>
          {renderLinks(navData)}
        </div>
        <div>
          {renderLinks(navDataTwo)}
        </div>
      </div>
    </nav>
  );
};

export default SideNav;