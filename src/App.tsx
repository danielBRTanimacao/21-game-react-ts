import { useState, MouseEvent } from "react";
import Game from "./components/Game";

export default () => {
    const [gameMode, setGameMode] = useState<string | null>(null);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const mode = e.currentTarget.value;
        setGameMode(mode);
    };

    return (
        <>
            <main className="center-itens">
                {!gameMode ? (
                    <div>
                        <h2 className="bg-header">Escolha</h2>
                        <div>
                            <button onClick={handleClick} value="2 Players">
                                2 Players
                            </button>
                            <button onClick={handleClick} value="BOT">
                                BOT
                            </button>
                        </div>
                    </div>
                ) : (
                    <Game mode={gameMode} />
                )}
            </main>
        </>
    );
};
