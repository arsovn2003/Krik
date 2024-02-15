export interface ButtonValue {
    value: string
}

export const MainButton = ({ value }: ButtonValue) => {
    return (
        <>
            <button className="btn-orange w-100 fw-700 headline-s">{value}</button>
        </>
    )
}