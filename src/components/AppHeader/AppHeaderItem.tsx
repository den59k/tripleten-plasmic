import classNames from 'classnames';
import HeaderArrowDownIcon from '../icons/HeaderArrowDown.svg?react'
import { useState, useRef } from 'react';
import './AppHeaderItem.sass'

type HeaderItem = {
  title: string,
  children?: HeaderItem[],
  to?: string
}

type Props = {
  item: HeaderItem
}

const HeaderItem = ({ item }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const setShowMenuWithDelay = (value: boolean, delay: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    timeoutRef.current = setTimeout(() => {
      setShowMenu(value);
    }, delay);
  };

  const onMouseEnter = () => {
    setShowMenuWithDelay(true, 80);
  };

  const onMouseLeave = () => {
    setShowMenuWithDelay(false, 200);
  };

  const closeMenu = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setShowMenu(false);
  };

  return (
    <button
      className={classNames('app-header-item', { open: showMenu })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {item.title}
      <span className="app-header-item__arrow-down">
        <HeaderArrowDownIcon />
      </span>
      {showMenu && (
        <div
          className="app-header-item__menu"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {item.children?.map((child: any) => (
            <a
              key={child.to}
              href={child.to}
              className="app-header-item__menu-item"
              onClick={closeMenu}
            >
              {child.title}
            </a>
          ))}
        </div>
      )}
    </button>
  );
};

export default HeaderItem;
