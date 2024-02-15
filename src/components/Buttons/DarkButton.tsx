export interface ButtonValue {
    value: string
}

export const DarkButton = ({ value }: ButtonValue) => {
    return (
        <>
            <button className="btn-dark w-100 fw-400 body-s">{value}</button>
        </>
    )
}