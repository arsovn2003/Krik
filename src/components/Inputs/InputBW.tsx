export interface Props {
    placeholder?: string;
}

export const InputBW = ({ placeholder }: Props) => {
    return (
        <>
            <input
                className="input-bw w-100 mb-3 px-13 py-16"
                type="text"
                placeholder={placeholder}
            />
        </>
    );
};
