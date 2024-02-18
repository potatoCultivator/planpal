/**
 * src/components/Button/index.js
 */

import { useState } from 'react';
import './Button.css';
import DropdownSymbol from './dropdown-symbol.png';
import ImageAnimation from './ImageAnimation';

const Button = ({ text, color, shape, onClick, hasDropdownSymbol }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="dropdown-container">
            <button
                className={`button ${color} ${shape} ${hasDropdownSymbol ? 'dropdown-button' : ''}`}
                onClick={onClick}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                data-state={isDropdownOpen ? 'open' : ''}
            >
                {text}
                {hasDropdownSymbol && <img src={DropdownSymbol} className="dropdown-symbol" alt="Dropdown Symbol" />}
            </button>
            {isDropdownOpen && hasDropdownSymbol && (
                <div className="dropdown-panel"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                    {/* Content for the dropdown panel */}
                    <a href="/planpal" className="dropdown-item">PlanPal</a>
                    {/* Add more dropdown items here */}
                </div>
            )}
            <div>
        </div>
        </div>
    );
};

export default Button;
