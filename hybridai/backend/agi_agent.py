class Task:
    def __init__(self, description):
        self.description = description
        self.completed = False

class AGIAgent:
    def __init__(self):
        self.tasks = []

    def add_task(self, description):
        task = Task(description)
        self.tasks.append(task)

    def complete_task(self, task_index):
        if 0 <= task_index < len(self.tasks):
            self.tasks[task_index].completed = True

    def get_tasks(self):
        return [{"description": task.description, "completed": task.completed} for task in self.tasks]

agent = AGIAgent()