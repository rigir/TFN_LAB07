import React from "react";

export default function Article({data}) {
    return (
        <article>
            <h2>{data.name}</h2>
            <img src={data.img} height="200px" width="200px"/>
            <p>{data.description}</p>
        </article>
    )
}