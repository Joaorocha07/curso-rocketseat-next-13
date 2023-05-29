interface ProdutosProps {
    params: {
        id: string,
    }
}

export default function Produtos({ params } : ProdutosProps) {
    return (
        <h1>Produto: ${params.id}</h1>
    )
}