import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks.js';
import { addStory, updateStory, deleteStory } from '../store/storiesSlice.js';
import { getStoryByIdService, createStoryService, updateStoryService, deleteStoryService } from '../services/story.service.js';
import toast from 'react-hot-toast';
import StoryForm from '../components/StoryForm.jsx';
import StoryView from '../components/StoryView.jsx';

const StoryDetail = () => {
  const { id } = useParams();
  const isCreating = !id || id === 'create'; 
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(!isCreating);
  const [submitting, setSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(isCreating);
  
  const [story, setStory] = useState({
      title: '',
      description: '',
      location: '',
      date: new Date().toISOString().split('T')[0],
      image: '',
      isFavorite: false
  });

  useEffect(() => {
    if (!isCreating && id) {
        setLoading(true);
        getStoryByIdService(id).then(fetchedStory => {
            if(fetchedStory) {
                setStory(fetchedStory);
            } else {
                toast.error('Story not found');
                navigate('/');
            }
        }).catch(() => {
            toast.error('Error loading story');
            navigate('/');
        }).finally(() => setLoading(false));
    }
  }, [id, isCreating, navigate]);

  const handleSave = async (formData) => {
      setSubmitting(true);
      try {
          if (isCreating) {
              const newStory = await createStoryService(formData);
              dispatch(addStory(newStory));
              toast.success('Memory created!');
              navigate('/');
          } else if (id) {
              const updated = await updateStoryService(id, formData);
              dispatch(updateStory(updated));
              setStory(updated); // Update local state
              toast.success('Memory updated!');
              setIsEditing(false);
          }
      } catch (err) {
          toast.error(err.response?.data?.message || err.message || 'Operation failed');
      } finally {
          setSubmitting(false);
      }
  };

  const handleDelete = async () => {
      if(!id || !window.confirm('Are you sure you want to delete this memory? This cannot be undone.')) return;
      
      try {
          await deleteStoryService(id);
          dispatch(deleteStory(id));
          toast.success('Memory deleted');
          navigate('/');
      } catch (err) {
          toast.error('Failed to delete');
      }
  };

  if (loading) return <div className="p-10 text-center"><i className="fas fa-spinner fa-spin text-2xl text-brand-500"></i> Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="mb-4 text-gray-500 hover:text-brand-600 flex items-center">
          <i className="fas fa-arrow-left mr-2"></i> Back
      </button>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        {isEditing ? (
            <StoryForm 
                initialData={story} 
                isCreating={isCreating} 
                onSubmit={handleSave} 
                onCancel={() => setIsEditing(false)}
                isSubmitting={submitting}
            />
        ) : (
            <StoryView 
                story={story} 
                onEdit={() => setIsEditing(true)} 
                onDelete={handleDelete} 
            />
        )}
      </div>
    </div>
  );
};

export default StoryDetail;