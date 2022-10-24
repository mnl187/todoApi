interface SingleTodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

class TodoApi {
    private readonly url = 'https://jsonplaceholder.typicode.com/todos/';

    async get(id: number): Promise<SingleTodo> {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return await resp.json();
    }

}

