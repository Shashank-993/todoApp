import { CirclePlus } from 'lucide-react';
import React from 'react'

const AddIcon = ({onClick}) => {
  return (
    <div role='button' onClick={onClick} className="absolute bottom-20 right-4 text-black rounded-full bg-black">
      <CirclePlus size={40} color="#EFBF04" strokeWidth={1} />
    </div>
  );
}

export default AddIcon