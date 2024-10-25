interface GameProps {
    mode: string;
}

export default ({ mode }: GameProps) => {
    return (
        <div>
            <h1>Game</h1>
            <h2>Modo escolhido: {mode}</h2>
        </div>
    );
};
