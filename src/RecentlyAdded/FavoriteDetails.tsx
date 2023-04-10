import React from "react";
import './RecentlyAdded.css';

interface Props {
    image?: any;
    post?: any;
    tab?: any;
}
const FavoriteDetails = (props: { image: any, post: any, onDelete: any, onChange: any }) => {
    const sizeConvertion = (size: number) => {
        return (size / Math.pow(1024, 2)).toFixed(1)
    }

    const dateConvertion = (e: string) => {
        let date = new Date(e);
        return (date.toLocaleString('default', { month: 'long' }) + " " + date.getDate() + "," + date.getFullYear());
    }

    const handleDeleteItem = (id: any) => {
        props.onDelete(id);
    }

    return (
        <main className="Fav_Container">
            {
                Object.keys(props.image).length === 0 ? null : (
                    <aside>
                        <img src={props.image.url} className="selected_image" alt="logo" />
                        <section className="favourite">
                            <section>
                                <p>{props.image.filename}</p>
                                <p>{sizeConvertion(props.image.sizeInBytes!)}  MB</p>
                            </section>
                            <section>
                                <button id="heart-shape" onClick={() => props.onChange(props.image.id, !props.image.favorited)} className={props.image.favorited ? "favorited" : "unfavorited"} ></button>
                            </section>
                        </section>
                        <h4>Information</h4>
                        <hr />
                        <section>
                            <p>Uploaded by</p>
                            <p>{props.image.uploadedBy}</p>
                        </section>
                        <hr />
                        <section>
                            <p>Created</p>
                            <p>{dateConvertion(props.image.createdAt!)} </p>
                        </section>
                        <hr />
                        <section>
                            <p>Last modified</p>
                            <p>{dateConvertion(props.image.updatedAt!)}</p>
                        </section>
                        <hr />
                        <section>
                            <p>Dimensions</p>
                            <p>{props.image.dimensions!.width} x {props.image.dimensions!.height}</p>
                        </section>
                        <hr />
                        <section>
                            <p>Resolution</p>
                            <p>{props.image.resolution!.width} x {props.image.resolution!.height}</p>
                        </section>
                        <hr />
                        <section className="description">
                            <p>Description</p>
                            <p>{props.image.description}</p>
                        </section>
                        <section>
                            <button className="deleteButton" onClick={() => handleDeleteItem(props.image.id)}>Delete</button>
                        </section>
                    </aside>
                )
            }
        </main >

    );
};

export default FavoriteDetails;


