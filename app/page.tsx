'use client';

import { Button } from "../components/Button";
import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
      transition: 'background-color 0.4s ease'
    }}>
      <Button 
        colour={isDarkMode ? '#4b5563' : '#3b82f6'} 
        text={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} 
        onClick={() => setIsDarkMode(!isDarkMode)} 
      />
    </div>
  );
}