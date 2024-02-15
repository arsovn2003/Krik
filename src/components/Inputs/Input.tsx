export interface Props {
    placeholder?: string;
}

export const Input = ({ placeholder }: Props) => {
    return (
        <>
            <input
                className="input w-100 mb-3"
                type="text"
                placeholder={placeholder}
            />
        </>
    );
};
