import React from "react";

export default function Item({data}) {
    return (
        <a href={data.url}>{data.text}</a>
    );
}