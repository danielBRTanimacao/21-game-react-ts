import { useState } from "react";

export default () => {
    const [init, setInit] = useState(false);

    const [counts, setCounts] = useState({ player: 0, bot: 0 });

    const getRandomCard = () => {
        return Math.floor(Math.random() * (12 - 1 + 1) + 1);
    };

    return (
        <>
            {!init ? (
                <main className="center-itens">
                    <h2 className="bg-header">BlackJack game</h2>
                    <button
                        className="btn-header"
                        onClick={() => setInit(true)}
                    >
                        Iniciar
                    </button>
                </main>
            ) : (
                <main className="center-itens">
                    <p>{counts.bot}</p>
                    <p>{counts.player}</p>
                    <button
                        onClick={() =>
                            setCounts({
                                player: getRandomCard() + counts.player,
                                bot: counts.bot
                            })
                        }
                    >
                        take
                    </button>
                    <button>cancel</button>
                </main>
            )}
        </>
    );
};
