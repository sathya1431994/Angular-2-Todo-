
export class Todo{
    id:number;
    name: string;
    status: string;
    priority: string;
    isCompleted: Boolean;

    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}