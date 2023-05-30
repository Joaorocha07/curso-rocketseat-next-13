export async function Repositorio() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        cache: 'no-store',
    });

    const repositorio = await response.json();

    return (
        <div>
            <h1>Repositorio</h1>
            <pre>{JSON.stringify(repositorio, null, 2)}</pre>
        </div>
    )
}