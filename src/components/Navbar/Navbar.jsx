import { useState } from 'react';
import styles from './Navbar.module.css';
import NavItem from './NavItem';
import ChemdoseLogo from '../../assets/ChemdoseLogo';
import { NAV_PRODUCTS, NAV_WHITEPAGES } from '../../data/constants';

const PRODUCT_SECTIONS = [
  { heading: 'In-house', items: NAV_PRODUCTS.inhouse  },
  { heading: 'Services', items: NAV_PRODUCTS.services },
  { heading: 'Others',   items: NAV_PRODUCTS.others   },
];

const NAV_CONFIG = [
  { id: 'products',   label: 'Products',   sections: PRODUCT_SECTIONS },
  { id: 'whitepages', label: 'WhitePages', items: NAV_WHITEPAGES      },
  { id: 'contact',    label: 'Contact Us', href: '#contact'           },
  { id: 'downloads',  label: 'Downloads',  href: '#downloads'         },
];

export default function Navbar() {
  const [activeId,   setActiveId]   = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>

        {/* ── Logo ── */}
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <ChemdoseLogo height={52} darkBg={true} />
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        {/* ── Nav links ── */}
        <ul className={[styles.navLinks, mobileOpen ? styles.mobileOpen : ''].join(' ')}>
          {NAV_CONFIG.map(item => (
            <NavItem
              key={item.id}
              {...item}
              activeId={activeId}
              onOpen={setActiveId}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}
