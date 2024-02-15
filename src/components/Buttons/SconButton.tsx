export interface ButtonValue {
    value: string
}

export const SconButton = ({ value }: ButtonValue) => {
    return (
        <>
            <button className="btn-scon w-100 fw-700 headline-s">{value}</button>
        </>
    )
}