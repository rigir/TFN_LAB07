import React from "react";

import {Content as Nav} from "./Nav/Content.js";
import header_list from "../data/nev_item_list.json"

export default function Header() {
    return (
        <header>
            <p>Navigation bar</p>
            <Nav data={header_list}/>
        </header>
    );
}