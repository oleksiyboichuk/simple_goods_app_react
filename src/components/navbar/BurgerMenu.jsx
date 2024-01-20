// BurgerMenu.tsx
import React from 'react';
import clsx from 'clsx';

const BurgerMenu = ({ isOpen, onClose }) => {
    return (
        <div className={clsx('fixed inset-0 bg-black/70 z-50 transition-transform ease-out duration-200', { 'translate-x-full': !isOpen })} onClick={onClose}>
            <div className="fixed top-0 right-0 bottom-0 flex items-center justify-center bg-white w-[60%] transition-transform ease-out">
                <ul className="text-white text-2xl">
                    <li className="mb-4">
                        <a href="#main" onClick={onClose} className="text-black text-3xl hover:text-black transition-color duration-200">
                            Home
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#product" onClick={onClose} className="text-black text-3xl hover:text-black transition-color duration-200">
                            Product
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;
