import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface DeleteConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName: string;
}

export function DeleteConfirmation({ isOpen, onClose, onConfirm, itemName }: DeleteConfirmationProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center mb-4">
          <AlertTriangle className="w-6 h-6 text-[#FF6F61] mr-2" />
          <h3 className="text-lg font-bold text-[#333333] font-['Roboto']">Confirm Deletion</h3>
        </div>
        <p className="text-gray-600 mb-6 font-['Open_Sans']">
          Are you sure you want to delete {itemName}? This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors font-['Roboto']"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-[#FF6F61] text-white rounded-lg hover:bg-[#E85D4F] transition-colors font-['Roboto'] font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}