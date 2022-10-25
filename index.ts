interface SingleTodo {
    id: number;
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

    async create(task: Omit<SingleTodo, 'id'>): Promise<SingleTodo> {
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
    const newTodo = await todo.create({
        title: 'Pogłaskac kota',
        userId: 1,
        completed: false,
    });
    console.log(newTodo.id)
})();

