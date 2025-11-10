'use client';
import React from "react";

interface Heading1Props {
  text: string;
  className?: string;
}

export default function Heading1({ text, className = "" }: Heading1Props) {
  return (
    <h1
      className={`text-4xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent  ${className}`}
    >
      {text}
    </h1>
  );
}
