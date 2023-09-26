import { useState } from 'react';
import Link from 'next/link';

interface NavbarLinkProps {
  icon: string;
  label: string;
  href: string;
}

const navData: NavbarLinkProps[] = [
  { icon: "Home.svg", label: 'Home', href: "/home" },
  { icon: "Transaction.svg", label: 'Deposit Funds', href: "/deposits" },
  { icon: "Withdrawal.svg", label: 'Withdraw Funds', href: "/withdrawal" },
  { icon: "Summary.svg", label: 'Releases', href: "/transactions" },
  { icon: "Trustlinkdash.svg", label: 'Trustlink', href: "/trustlink" },
  { icon: "Profile.svg", label: 'Account', href: "/account" },
];

const navDataTwo: NavbarLinkProps[] = [
  { icon: "Settings.svg", label: 'Settings', href: "/settings" },
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
        <Link href={link.href}>
          <img src={link.icon} alt={link.label} className='w-6 h-6' />
        </Link>
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