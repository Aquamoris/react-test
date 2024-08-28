import React, {useEffect, useState} from 'react';
import Ball from "../../../entities/Ball/ui/Ball.tsx";
import {BallType} from "../../../entities/Ball/model/types.ts";

const Billiards = () => {

    const [data, setData] = useState<BallType[]>([]);

    useEffect(() => {
        const  fetchData = async () => {
            const response = await fetch(import.meta.env.VITE_API_URL);

            const result = await response.json();

            setData(result);

            return result;
        }

        fetchData();
    }, []);

    console.log(data);

    return (
        <div>
            {
                data.map(b => <Ball number={b.number} position={b.position} background_color={b.background_color} filled={b.filled} />)
            }
        </div>
    );
};

export default Billiards;