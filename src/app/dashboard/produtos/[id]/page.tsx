interface ProdutosProps {
    params: {
        id: string,
    }
}

export const metadata = {
    title: 'Produto 1',
}

export default function Produtos({ params } : ProdutosProps) {
    return (
        <h1>Produto: ${params.id}</h1>
    )
}