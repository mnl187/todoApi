interface SingleTodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function getTodo(id: number): Promise<SingleTodo> {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return await resp.json();
}