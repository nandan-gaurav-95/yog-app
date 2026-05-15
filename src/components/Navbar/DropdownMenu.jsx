import styles from './Navbar.module.css';

export default function DropdownMenu({ isOpen, sections, items }) {
  const cls = [styles.dropdown, isOpen ? styles.open : ''].join(' ');
  return (
    <div className={cls}>
      {sections && sections.map(({ heading, items: secItems }) => (
        <div key={heading}>
          <div className={styles.dropdownSection}>{heading}</div>
          {secItems.map(({ label, href }) => (
            <a key={label} href={href} className={styles.dropdownLink}>{label}</a>
          ))}
        </div>
      ))}
      {items && items.map(({ label, href }) => (
        <a key={label} href={href} className={styles.dropdownLink}>{label}</a>
      ))}
    </div>
  );
}
