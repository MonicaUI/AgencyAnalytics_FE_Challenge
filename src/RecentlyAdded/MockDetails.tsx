import React, { useState, useEffect } from "react";
import './RecentlyAdded.css';
import FavoriteDetails from './FavoriteDetails'

interface User {
    id?: string;
    url?: string;
    sizeInBytes?: number;
    filename?: string;
    uploadedBy?: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
    dimensions?: {
        height?: number,
        width?: number
    }
    resolution?: {
        height?: number,
        width?: number
    }
    favorited?: boolean;
}


interface Props {
    tab?: string;
}
const MockDetails = (props: { tab: string }) => {
    const [posts, setPosts] = useState([]);
    const [favouritePosts, setFavouritePosts] = useState([]);
    const [clickedImage, setClickedImage] = useState<User>({} as User);
    console.log(posts)

    useEffect(() => {
        fetch('https://agencyanalytics-api.vercel.app/images.json')
            .then(res => res.json())
            .then(data => {
                data.sort(function (a: { createdAt: any }, b: { createdAt: any }) {
                    return (new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf());
                })
                setPosts(data);
                setFavouritePosts(data.map((fav: { favorited: boolean; }) => {
                    if (fav.favorited === true) {
                        return fav
                    } else return null
                }
                ));
            })
            .catch((err: any) => console.log(err))
    }, [])

    const sizeConvertion = (size: number) => {
        return (size / Math.pow(1024, 2)).toFixed(1)
    }

    const HandleClickImage = (event: React.MouseEvent<HTMLImageElement>) => {
        posts.map(e => {
            if (event === e['id']) {
                setClickedImage(e)
            }
        })
    };

    return (
        <main className="Container">
            <section className="ContainerImage">
                {props.tab === 'recent' ?
                    (
                        posts.map(post => (
                            <main className="ItemContainer">
                                <img onClick={() => HandleClickImage(post['id'])} src={post['url']} className="recent_image" alt="logo" />
                                <p>{post['filename']}</p>
                                <p>{sizeConvertion(post['sizeInBytes'])}  MB</p>
                            </main>
                        ))
                    ) :
                    (
                        favouritePosts.map((post =>
                        ((post !== null && post !== undefined && Object.keys(post).length > 0) ?
                            (<main className="ItemContainer">
                                <img onClick={() => HandleClickImage(post['id'])} src={post['url']} className="recent_image" alt="logo" />
                                <p>{post['filename']}</p>
                                <p>{sizeConvertion(post['sizeInBytes'])}  MB</p>
                            </main>) : null)
                        )
                        )
                    )
                }
            </section>
            {props.tab === "recent" ?
                (<FavoriteDetails image={clickedImage} post={posts} />) : null
            }
        </main >

    );
};

export default MockDetails;


