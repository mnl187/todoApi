interface SingleTodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

class TodoApi {
    private readonly url = 'https://jsonplaceholder.typicode.com/todos';

    async get(id: number): Promise<SingleTodo> {
        const resp = await fetch(`${this.url}/${id}`);
        return await resp.json();
    }

    async list(): Promise<SingleTodo[]> {
        const resp = await fetch(`${this.url}/`);
        return await resp.json();
    }
}

(async () => {
    const todo = new TodoApi();
    const all = await todo.list();
})()

