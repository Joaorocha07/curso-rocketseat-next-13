'use client'

import { useState } from "react";

export async function User() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>User</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount((state) => state + 1)}>Increment</button>
        </div>
    )
}