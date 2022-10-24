interface SingleTodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface SingleTodoToCreate {
    userId: number;
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

    async create(task: SingleTodoToCreate): Promise<SingleTodo> {
        const resp = await fetch(`${this.url}/`, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return await resp.json();
    }


}

(async () => {
    const todo = new TodoApi();
    const all = await todo.list();
    if (all.length > 0) {
        console.log(all[0].title);
    }
})();

