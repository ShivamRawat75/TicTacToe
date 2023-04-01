
interface ISquaredProps {
    onClick: () => void,
    value: 'X' | 'O' | null,
    winner:string|null
}


const Square: React.FC<ISquaredProps> = ({ onClick, value,winner }) => {
    if (!value) {
        return (
            <button
                className="board-square"
                onClick={onClick}
                disabled={Boolean(winner)}

            >
                {value}
            </button>
        )
    }
    return (
        <button
        className={`board-square square_${value}`}
        disabled

    >
        {value}
    </button>
    )
}
export default Square;