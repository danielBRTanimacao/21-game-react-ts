import { useState, ChangeEvent, FormEvent } from "react";
import Game from "./components/Game";

export default () => {
    const [playerChoose, setPlayerChoosed] = useState(false);
    const [players, setPlayers] = useState({ p1: "", p2: "" });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPlayers((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setPlayerChoosed(true);
    };

    return (
        <>
            {!playerChoose ? (
                <form onSubmit={handleSubmit}>
                    <h2>Jogadores</h2>
                    <label htmlFor="p1">Player 1</label>
                    <input
                        type="text"
                        name="p1"
                        id="p1"
                        value={players.p1}
                        onChange={handleInputChange}
                        required
                        minLength={3}
                    />
                    <label htmlFor="p2">Player 2</label>
                    <span>(digite BOT) para jogar sozinho</span>
                    <input
                        type="text"
                        name="p2"
                        id="p2"
                        value={players.p2}
                        onChange={handleInputChange}
                        required
                        minLength={3}
                    />
                    <button type="submit">INICIAR</button>
                </form>
            ) : (
                <Game players={players} />
            )}
        </>
    );
};
