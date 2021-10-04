import Head from 'next/head';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';
import {
    ViewGridIcon,
    MicrophoneIcon,
    SearchIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Head>
                <title>Google Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="flex justify-between w-full items-center p-5 text-sm text-gray-700">
                <div className="flex space-x-4">
                    <p className="link">About</p>
                    <p className="link">Store</p>
                </div>
                <div className="flex space-x-4 items-center">
                    <p className="link">Gmail</p>
                    <p className="link">Images</p>
                    <ViewGridIcon className="h-9 w-9 p-1 rounded-full hover:bg-gray-100 cursor-pointer" />
                    <Avatar url="https://lh3.googleusercontent.com/ogw/ADea4I5UJ7yBZhmGu-lXWr_o4xjb5EWujXQD5U6cw5kShw=s32-c-mo" />
                </div>
            </header>

            <form className="flex flex-col mt-44 items-center flex-grow w-4/5">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                    height={100}
                    width={300}
                />
                <div className="flex items-center w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl">
                    <SearchIcon className="h-5 mr-3 text-gray-500" />
                    <input
                        type="text"
                        className="focus:outline-none flex-grow"
                        ref={searchInputRef}
                    />
                    <MicrophoneIcon className="h-5" />
                </div>
                <div className="flex flex-col w-1/2 space-y-2 mt-8 justify-center md:space-y-0 sm:flex-row sm:space-x-4">
                    <button className="btn" onClick={search}>
                        Google Search
                    </button>
                    <button className="btn" onClick={search}>
                        I'm feeling lucky
                    </button>
                </div>
            </form>
            <Footer />
        </div>
    );
}
