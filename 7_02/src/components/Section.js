import React from "react";

import Article from "./Article";
import article_item_list from "../data/article_item_list.json"

export default function Section() {
    return (
        <section>
            <h1>Popular web browsers</h1>
                {article_item_list.map((item, i) => (
                    <Article key={i} data={item}/>
                ))}
        </section>
    );
}