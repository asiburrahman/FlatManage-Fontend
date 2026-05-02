import React, { useState } from 'react';
import useAuth from '../hooks/UseAuth';
import { uploadImage, saveUserDataInDB } from '../API/utilities';
import { toast } from 'react-toastify';

const EditProfileModal = ({ isOpen, onClose }) => {
    const { user, updateUserProfile } = useAuth();
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const name = form.name.value;
        const imageFile = form.image.files[0];

        try {
            let photoURL = user?.photoURL;

            if (imageFile) {
                photoURL = await uploadImage(imageFile);
            }

            await updateUserProfile(name, photoURL);
            
            // Re-sync with DB
            await saveUserDataInDB({
                name: name,
                email: user?.email,
                image: photoURL,
            });

            toast.success('Profile updated successfully!');
            onClose();
            // Reload to show changes in Navbar and components
            window.location.reload();
        } catch (error) {
            console.error(error);
            toast.error(error.message || 'Failed to update profile');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal modal-open">
            <div className="modal-box bg-base-200">
                <h3 className="font-bold text-lg mb-4">Edit Profile</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={user?.displayName}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Profile Photo</span>
                        </label>
                        <input
                            type="file"
                            name="image"
                            className="file-input file-input-bordered w-full"
                            accept="image/*"
                        />
                        <label className="label">
                            <span className="label-text-alt">Leave empty to keep current photo</span>
                        </label>
                    </div>
                    <div className="modal-action">
                        <button
                            type="button"
                            className="btn"
                            onClick={onClose}
                            disabled={loading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`btn btn-primary ${loading ? 'loading' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Updating...' : 'Update Profile'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfileModal;
