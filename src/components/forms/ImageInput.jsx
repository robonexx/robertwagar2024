import React from 'react';

const ImageInput = ({ label, onChange, error, disabled }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        onChange(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type='file'
        id={label}
        accept='image/*'
        disabled={disabled}
        onChange={handleImageChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default ImageInput;
