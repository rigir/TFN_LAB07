import React from "react";

export default function Article({data}) {
    return (
        <article>
            <h2>{data.name}</h2>
            <img src={data.img} alt=""/>
            <p>{data.description}</p>
        </article>
    )
}