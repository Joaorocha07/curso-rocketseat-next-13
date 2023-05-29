export async function Repositorio() {
    const response = await fetch('https://api.github.com/users/diego3g/repos', {
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