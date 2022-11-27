import React from "react";

import Item from "./Item";

export function Content({data}) {
    return (
        <nav>
            <ul>
                {data.map((item, i) => (
                    <li key={i}>
                        <Item data={item} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}