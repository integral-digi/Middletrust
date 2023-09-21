import { useState } from 'react';
import { Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import classes from './NavbarMinimalColored.module.css';

interface NavbarLinkProps {
  icon: string;
  label: string;
  active?: boolean;
  onClick?(): void;
}

const NavbarLink = ({ icon: Icon, label, active, onClick }: NavbarLinkProps) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <div className='w-5 h-5' />
      </UnstyledButton>
    </Tooltip>
  );
};

const mockdata = [
  { icon: "Home.svg", label: 'Home' },
  { icon: "Transaction.svg", label: 'Deposit Funds' },
  { icon: "Withdrawal.svg", label: 'Withdraw Funds' },
  { icon: "Summary.svg", label: 'Releases' },
  { icon: "Trustlink.svg", label: 'Trustlink' },
  { icon: "Profile.svg", label: 'Account' },
  { icon: "Settings.svg", label: 'Settings' },
  { icon: "Referral.svg", label: 'Refer' },
];

const SideNav = () => {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <img src='midicon.svg' className='' alt='logo' />

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={mockdata[6].icon} label={mockdata[6].label} />
        <NavbarLink icon={mockdata[7].icon} label={mockdata[7].label} />
      </Stack>
    </nav>
  );
};

export default SideNav;