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
        const resp = await fetch(`${this.url}/${id}`);
        return await resp.json();
    }
}

(async () => {
    const todo = new TodoApi();
    console.log(await todo.get(1));
})()

