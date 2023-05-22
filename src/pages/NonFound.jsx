import React, {useEffect} from 'react';
import {Navigate, useNavigate} from "react-router-dom";

const NonFound = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate(-2)
        },1000)
    },[])
    return (
        <h1>NonFound</h1>
    );
};

export default NonFound;
