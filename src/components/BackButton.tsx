import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center text-white bg-[#4A90E2] hover:bg-[#357ABD] transition-colors mb-6 px-4 py-2 rounded-lg"
    >
      <ArrowLeft className="w-5 h-5 mr-1" />
      Back
    </button>
  );
}