import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    const validateWithCallback = useCallback(() => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);
    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallback {withOutCallback.current}</p>
            <p>Render withCallback {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control mb-2"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
