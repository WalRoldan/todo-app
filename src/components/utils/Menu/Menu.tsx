

import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Menu.css';

const Menu: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount] = useState(3); 
  const menuRef = useRef<HTMLDivElement>(null); 
  const navigate = useNavigate(); 

  const options = [
    { label: 'Mis datos', value: 'mis-datos', path: '/mis-datos' },
    { label: 'Mis tareas', value: 'mis-tareas', path: '/' },
    { label: 'Mis devoluciones', value: 'mis-devoluciones', path: '/mis-devoluciones' },
    { label: 'Mis comunicaciones', value: 'mis-comunicaciones', path: '/mis-comunicaciones' },
    { label: 'Mis mejores amigos', value: 'mis-mejores-amigos', path: '/mis-mejores-amigos' },
  ];

  const handleOptionClick = (index: number) => {
    if (menuRef.current) {
      const optionWidth = menuRef.current.children[0].clientWidth; 

      const scrollOffset = (index - 1) * optionWidth;

      menuRef.current.scrollTo({
        left: scrollOffset,
        behavior: 'smooth', 
      });
    }

    setActiveIndex(index); 
    navigate(options[index].path); 
  };

  return (
    <div className="menu">
      <div className="bg-menu" ref={menuRef}>
        <div
          className="active"
          style={{
            left: `${(activeIndex * 100) / visibleCount}%`, 
            width: `${100 / visibleCount}%`,
          }}
        ></div>
        {options.map((option, index) => (
          <Link
          to={option.path}

            key={option.value}
            className={`link ${option.value} ${index === activeIndex ? 'active-link' : ''}`}
            onClick={() => handleOptionClick(index)}
          >
            {option.label}
          </Link>
        ))}
        <span className="lang">es</span>
      </div>
    </div>
  );
};

export default Menu;
