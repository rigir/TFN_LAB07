import React from "react";
import { createRoot } from "react-dom/client";

import './style/index.scss';

import Section from "./components/Section";
import Footer from "./components/Footer";
import Header from "./components/Header";

const root = createRoot(document.getElementById("root"))
root.render(
<>
    <Header/>
    <Section/>
    <Footer/>
</>)