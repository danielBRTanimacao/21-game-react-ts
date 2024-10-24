interface Players {
    p1: string;
    p2: string;
}

export default ({ players }: { players: Players }) => {
    return (
        <>
            <h1>Game</h1>
            <h2>{players.p1}</h2>
            <h2>{players.p2}</h2>
        </>
    );
};
