import React, { useRef } from 'react';
import Image from 'next/dist/client/image';
import router from 'next/router';
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

const Header = () => {
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    };

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    width={120}
                    height={40}
                    onClick={() => router.push('/')}
                    className="cursor-pointer"
                />
                <form className="flex flex-grow px-6 py-3 ml-10 mr-5border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="flex-grow w-full focus:outline-none"
                    />
                    <XIcon
                        className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 hover:scale-125"
                        onClick={() => (searchInputRef.current.value = '')}
                    />
                    <MicrophoneIcon className="mr-6 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-400" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>
                        Search
                    </button>
                </form>
                <Avatar
                    className="ml-auto"
                    url="https://lh3.googleusercontent.com/ogw/ADea4I5UJ7yBZhmGu-lXWr_o4xjb5EWujXQD5U6cw5kShw=s32-c-mo"
                />
            </div>
            <HeaderOptions />
        </header>
    );
};

export default Header;
