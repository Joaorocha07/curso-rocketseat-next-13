export async function User() {
    await new Promise((resolve) => setTimeout(resolve, 6000));

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        cache: 'no-store',
    });

    const repositorio = await response.json();

    return (
        <div>
            <h1>User</h1>
            <pre>{JSON.stringify(repositorio, null, 2)}</pre>
        </div>
    )
}