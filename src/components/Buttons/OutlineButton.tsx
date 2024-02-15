export interface ButtonValue {
    value: string
}

export const OutlineButton = ({ value }: ButtonValue) => {
    return (
        <>
            <button className="btn-outline w-100 fw-400 body-s px-13 py-16">{value}</button>
        </>
    )
}