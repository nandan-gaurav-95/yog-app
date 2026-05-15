import { useRef, useEffect } from 'react';
import styles from './Navbar.module.css';
import DropdownMenu from './DropdownMenu';

export default function NavItem({ id, label, href, sections, items, activeId, onOpen }) {
  const hasDropdown = !!(sections || items);
  const isOpen = activeId === id;
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) onOpen(null);
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [isOpen, onOpen]);

  if (!hasDropdown) {
    return (
      <li className={styles.navItem}>
        <a href={href} className={styles.navLink}>{label}</a>
      </li>
    );
  }

  return (
    <li className={styles.navItem} ref={ref}>
      <button
        className={[styles.navLink, isOpen ? styles.active : ''].join(' ')}
        onClick={() => onOpen(isOpen ? null : id)}
        aria-expanded={isOpen}
      >
        {label}
        <span className={[styles.arrow, isOpen ? styles.open : ''].join(' ')}>▾</span>
      </button>
      <DropdownMenu isOpen={isOpen} sections={sections} items={items} />
    </li>
  );
}
