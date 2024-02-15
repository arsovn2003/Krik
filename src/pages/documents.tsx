import DocumentsBlock, { DocumentsItem } from "@/components/Documents/DocumentsBlock";
import { DocumentsProps } from "@/type";
import { GetStaticProps } from "next";

interface Props {
    data: DocumentsProps;
    cards: DocumentsItem[];
}

const Documents = ({ data, cards }: Props) => {
    return (
        <>
            <DocumentsBlock data={data} card={cards} />
        </>
    )
}

export default Documents;

export const getStaticProps: GetStaticProps = async () => {
    const DocumentsBlockRes = await fetch("http://localhost:5001/documents")
    const DocumentsData: DocumentsProps = await DocumentsBlockRes.json()

    const DocumentsCardsRes = await fetch("http://localhost:5001/documents_cards")
    const DocumentsCards: DocumentsItem[] = await DocumentsCardsRes.json()

    return {
        props: {
            data: DocumentsData,
            cards: DocumentsCards,
        }
    }
}