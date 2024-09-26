import Dashboard from "./components/Dashboard.tsx";
import { useEffect, useState } from "react";

import Shovel from "./assets/sprites-npc/shovel-idle.png";
import ShovelTake from "./assets/sprites-npc/shovel-move.png";

export default () => {
    const [amount, setAmount] = useState(0);
    const [idle, setIdle] = useState(Shovel);

    const changeAnimation = (idleSprite: string, moveSprite: string) => {
        setIdle(moveSprite);
        setInterval(() => {
            setIdle(idleSprite);
        }, 500);
    };

    const digMoney = () => {
        changeAnimation(Shovel, ShovelTake);
        makeMoney(1);
    };

    const makeMoney = (money: number) => {
        setAmount((amount) => amount + money);
    };

    const buyCompany = (money: number) => {
        setAmount((amount) => amount + money);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            makeMoney(15);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Dashboard />
            <div>
                <img src={idle} alt="img-npc" />
                <button onClick={() => digMoney()}>CAVAR</button>
                <h1>R${amount}</h1>
            </div>
            <div>
                <div onClick={() => buyCompany(amount)}>
                    npc-make-money +15 a cada 5s
                </div>
            </div>
        </>
    );
};
