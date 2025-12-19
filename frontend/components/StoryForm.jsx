import React, { useState } from 'react';
import Input from './Input.jsx';
import toast from 'react-hot-toast';

const StoryForm = ({ initialData, isCreating, onSubmit, onCancel, isSubmitting }) => {
  // Separate file state from data state
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialData?.image || '');

  const [formData, setFormData] = useState({
      title: '',
      description: '',
      location: '',
      date: new Date().toISOString().split('T')[0],
      isFavorite: false,
      ...initialData
  });

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
        setImageFile(file); // Store file for upload
        
        // Create local preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      
      if (isCreating && !imageFile) {
          toast.error('An image is required for new memories');
          return;
      }

      if (!formData.title || !formData.date) {
          toast.error('Please fill in required fields (Title, Date)');
          return;
      }

      // Pass formData + the file object
      onSubmit({
          ...formData,
          imageFile: imageFile 
      });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
        <h2 className="text-2xl font-bold mb-6">{isCreating ? 'Create New Memory' : 'Edit Memory'}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Memory Image</label>
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 hover:bg-gray-100 transition">
                    {imagePreview ? (
                        <div className="relative w-full h-64">
                            <img src={imagePreview} alt="Preview" className="w-full h-full object-contain" />
                            <button 
                                type="button" 
                                onClick={() => { setImagePreview(''); setImageFile(null); }} 
                                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 shadow-md"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    ) : (
                        <label className="cursor-pointer text-center w-full h-full flex flex-col items-center justify-center py-8">
                            <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
                            <span className="text-gray-600">Click to upload image</span>
                            <span className="text-xs text-gray-400 mt-1">JPG, PNG, WEBP</span>
                            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                        </label>
                    )}
                </div>
            </div>

            <Input 
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="md:col-span-2"
            />

            <Input 
                label="Date"
                name="date"
                type="date"
                value={formData.date?.toString().split('T')[0]}
                onChange={handleChange}
                required
            />

            <Input 
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Paris, France"
            />

            <div className="md:col-span-2">
                 <Input 
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    textarea
                    className="h-32"
                />
            </div>
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
             {!isCreating && (
                 <button type="button" onClick={onCancel} className="text-gray-600 hover:text-gray-800">Cancel</button>
             )}
             <div className="flex space-x-3 ml-auto">
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="px-6 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700 disabled:opacity-50"
                >
                    {isSubmitting ? 'Saving...' : 'Save Memory'}
                </button>
             </div>
        </div>
    </form>
  );
};

export default StoryForm;