import { useState } from "react";

export default () => {
    const [start, setStart] = useState(false);
    const [disabledGame, setDisabledGame] = useState(false);

    const [playerPoints, setPlayerPoints] = useState({ player: 0, bot: 0 });

    const getRandomCard = () => {
        return Math.floor(Math.random() * (12 - 1 + 1) + 1);
    };

    return (
        <>
            {!start ? (
                <main className="center-itens">
                    <h2 className="bg-header">BlackJack game</h2>
                    <button
                        className="btn-header"
                        onClick={() => setStart(true)}
                    >
                        Iniciar
                    </button>
                </main>
            ) : (
                <main className="center-itens game">
                    <p>{playerPoints.bot}</p>
                    <p>{playerPoints.player}</p>
                    {!disabledGame ? (
                        <button
                            onClick={() =>
                                setPlayerPoints({
                                    player:
                                        getRandomCard() + playerPoints.player,
                                    bot: playerPoints.bot
                                })
                            }
                        >
                            take
                        </button>
                    ) : (
                        <button disabled>take</button>
                    )}
                    <button
                        className="dark-btn"
                        onClick={() => setDisabledGame(true)}
                    >
                        finish
                    </button>
                </main>
            )}
        </>
    );
};
