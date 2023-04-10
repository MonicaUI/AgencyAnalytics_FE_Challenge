import React, { useState, useEffect } from "react";
import MockDetails from '../RecentlyAdded/MockDetails'
import './RecentlyAdded.css';

// interface User {
//     url?: string;
//     sizeInBytes?: number;
//     filename?: string;
//     uploadedBy?: string;
//     description?: string;
//     createdAt?: string;
//     updatedAt?: string;
//     dimensions?: dimensions
//     // resolution?: string;
// }

// enum dimensions {
//     height
// }

// interface PostsProps{
//    posts: IPost[];
// }

// const ToggleSettings = (props: ToggleSettingProps) => {
const MockData = () => {
    const [posts, setPosts] = useState([]);
    // const [clickedImage, setClickedImage] = useState<User>({} as User);
    // const [toTalSize, SetToTalSize] = useState<number>(0);
    useEffect(() => {
        fetch('https://agencyanalytics-api.vercel.app/images.json')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            }).catch(err => console.log(err))
    }, [])

    return (
        <div>
            {/* <MockDetails user={posts} /> */}
        </div>
    )
}
export default MockData;