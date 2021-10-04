import React from 'react';

const Avatar = ({ url }) => {
    return (
        <img
            className="rounded-full transition-150 transform hover:scale-110 cursor-pointer"
            loading="lazy"
            src={url}
            alt="profile-picture"
        />
    );
};

export default Avatar;
