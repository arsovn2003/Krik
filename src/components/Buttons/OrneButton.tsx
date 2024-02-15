export interface ButtonValue {
    value: string
}

export const OrneButton = ({ value }: ButtonValue) => {
    return (
        <>
            <button className="btn-orne w-100 fw-700 headline-s px-30 py-10">{value}</button>
        </>
    )
}