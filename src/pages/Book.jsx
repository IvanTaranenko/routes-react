// Book.js
import React from "react";
import {useOutletContext, useParams} from "react-router-dom";

const Book = () => {
    const { id } = useParams();
    const  obj =  useOutletContext();
    return <h1>Do you wanna buy Book {id} {obj.hello}</h1>;
};

export default Book;
