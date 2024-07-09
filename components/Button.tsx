interface ButtonProps {
    onClick: () => void,
    value: string,
    styles: string,
}

export default function Button({onClick, value, styles} : ButtonProps) {

    const styling = styles + ' mr-4 pl-4 pr-4 rounded-md';

    return (
        <>
            <button onClick={onClick} className={styling}> {value} </button>
        </>
    );
}