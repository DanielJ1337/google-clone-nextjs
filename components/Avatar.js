import React from 'react';

const Avatar = ({ url, className }) => {
    return (
        <img
            className={`rounded-full transition-150 transform hover:scale-110 cursor-pointer ${className}`}
            loading="lazy"
            src={url}
            alt="profile-picture"
        />
    );
};

export default Avatar;
