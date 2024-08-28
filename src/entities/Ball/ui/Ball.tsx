import React, {useState} from 'react';
import styles from './Ball.module.scss';
import {BallType} from "../model/types.ts";
import cn from "classnames";

const Ball: React.FC<BallType> = ({ number, background_color, position, filled }) => {
    const [onDrag, setOnDrag] = useState(false);

    return (
        <div className={cn(styles['ball'], {
            [styles['ball-dragging']]: onDrag
        })} style={{borderColor: background_color}} draggable={true}>
            <div className={styles['ball-fill']} style={{backgroundColor: background_color, height: filled ? '100%' : '75%'}}>
                <div className={styles['ball-number']}>
                    {number}
                </div>
            </div>
        </div>
    );
};

export default Ball;