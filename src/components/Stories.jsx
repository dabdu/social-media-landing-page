import React from 'react'
import StoryCard from './StoryCard';
const stories = [
    {
        user: "Ibrahim Dauda",
        src: "https://stockphoto.com/samples/NTU3NDQxNTIwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/presenting-your-text.jpg&size=1024",
        profile: "https://stockphoto.com/samples/NTU3NDQxNTIwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/presenting-your-text.jpg&size=1024",
    },
    {
        user: "Ibrahim Dauda",
        src: "https://stockphoto.com/samples/NTU3NDQxNTIwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/presenting-your-text.jpg&size=1024",
        profile: "https://stockphoto.com/samples/NTU3NDQxNTIwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/presenting-your-text.jpg&size=1024",
    },
    {
        user: "Ibrahim Dauda",
        src: "https://stockphoto.com/samples/NTU3NDQxNTIwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/presenting-your-text.jpg&size=1024",
        profile: "https://stockphoto.com/samples/NTU3NDQxNTIwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/presenting-your-text.jpg&size=1024",
    },
    {
        user: "Ibrahim Dauda",
        src: "https://stockphoto.com/samples/NTU3NDQxNTIwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/presenting-your-text.jpg&size=1024",
        profile: "https://stockphoto.com/samples/NTU3NDQxNTIwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/presenting-your-text.jpg&size=1024",
    },
    {
        user: "Ibrahim Dauda",
        src: "https://stockphoto.com/samples/NTU3NDQxNTIwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/presenting-your-text.jpg&size=1024",
        profile: "https://stockphoto.com/samples/NTU3NDQxNTIwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/presenting-your-text.jpg&size=1024",
    },
    {
        user: "Ibrahim Dauda",
        src: "https://stockphoto.com/samples/NTU3NDQxNTIwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/presenting-your-text.jpg&size=1024",
        profile: "https://stockphoto.com/samples/NTU3NDQxNTIwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/presenting-your-text.jpg&size=1024",
    },
    {
        user: "Ibrahim Dauda",
        src: "https://stockphoto.com/samples/NTU3NDQxNTIwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/presenting-your-text.jpg&size=1024",
        profile: "https://stockphoto.com/samples/NTU3NDQxNTIwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/presenting-your-text.jpg&size=1024",
    },
];

function Stories() {
    return (
        <div className='flex justify-center space-x-3 mx-auto'>
            {stories && (
                stories.map((story) => (
                    <StoryCard key={story.src} name={story.user}
                        src={story.src} profile={story.profile}
                    />
                ))
            )}
        </div>
    )
}

export default Stories