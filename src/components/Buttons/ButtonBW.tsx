export interface ButtonValue {
    value: string
}

export const ButtonBW = ({ value }: ButtonValue) => {
    return (
        <>
            <button className="btn-bw fw-700 button-l">{value}</button>
        </>
    )
}