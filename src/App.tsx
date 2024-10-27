import { useState } from "react";

export default () => {
    const [start, setStart] = useState(false);
    const [disabledGame, setDisabledGame] = useState(false);
    const [winner, setWinner] = useState("");

    const [playerPoints, setPlayerPoints] = useState({ player: 0, bot: 0 });

    const getRandomCard = () => {
        return Math.floor(Math.random() * (12 - 1 + 1) + 1);
    };

    const getWinner = () => {
        if (playerPoints.player > 21) {
            setWinner("Bot ganhou");
        } else if (playerPoints.bot > 21) {
            setWinner("Player ganhou");
        } else if (playerPoints.bot > playerPoints.player) {
            setWinner("Bot ganhou");
        } else if (playerPoints.bot < playerPoints.player) {
            setWinner("Player ganhou");
        } else {
            setWinner("empate");
        }
    };

    const botPlays = () => {
        while (true) {
            setPlayerPoints({
                player: playerPoints.player,
                bot: getRandomCard() + playerPoints.bot
            });
            break;
        }
    };

    const finishGame = () => {
        setDisabledGame(true);
        botPlays();
        getWinner();
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
                    {!disabledGame ? (
                        <>
                            <button className="dark-btn" onClick={finishGame}>
                                finish
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="dark-btn" disabled>
                                finish
                            </button>
                        </>
                    )}
                    <p>{winner}</p>
                </main>
            )}
        </>
    );
};
