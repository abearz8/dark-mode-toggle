'use client';

import React from "react";
import { ButtonProps } from "../types/button";

export const Button: React.FC<ButtonProps> = ({text, onClick, disabled, colour = '#3b82f6'}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: colour,
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        border: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transform: disabled ? 'none' : 'translateY(0)',
      }}
      onMouseOver={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15)';
        }
      }}
      onMouseOut={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
      }}
    >
      {text}
    </button>
  );
}