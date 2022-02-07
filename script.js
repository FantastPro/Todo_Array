'use strict';

const STATUSES = {
	TO_DO: 'To Do',
	IN_PROGRESS: 'In Progress',
	DONE: 'Done',
};
const PRIORITIES = {
	LOW: 'Low',
	HIGH: 'High',
};

const DEFAULT_STATUS = STATUSES.TO_DO;
const DEFAULT_PRIORITY = PRIORITIES.HIGH;

let list = [
	{
		name: 'create a post',
		status: 'In Progress',
		priority: 'Low',
	},
	{
		name: 'test',
		status: 'Done',
		priority: 'High',
	},
	{
		name: 'listen to music',
		status: 'In Progress',
		priority: 'Low',
	},
	{
		name: 'buy a new chair',
		status: 'To Do',
		priority: 'Low',
	},
];

function showList() {
	for (let task of list) {
		console.log(`${task.name}: status = [${task.status}] priority = [${task.priority}]`);
	}
}

function showBy(sorter) {
	if (sorter === 'status') {
		let toDo = '',
			inProgress = '',
			done = '';

		for (let task of list) {
			if (task.status === STATUSES.TO_DO) {
				toDo += `\n "${task.name}",`;
			} else if (task.status === STATUSES.IN_PROGRESS) {
				inProgress += `\n "${task.name}",`;
			} else {
				done += `\n "${task.name}",`;
			}
		}

		console.log(`${STATUSES.TO_DO}: ${toDo || '\n -'}`);
		console.log(`${STATUSES.IN_PROGRESS}: ${inProgress || '\n -'}`);
		console.log(`${STATUSES.DONE}: ${done || '\n -'}`);
	} else if (sorter === 'priority') {
		let high = '',
			low = '';

		for (let task of list) {
			if (task.priority === PRIORITIES.HIGH) {
				high += `\n "${task.name}",`;
			} else {
				low += `\n "${task.name}",`;
			}
		}

		console.log(`${PRIORITIES.HIGH}: ${high || '\n -'}`);
		console.log(`${PRIORITIES.LOW}: ${low || '\n -'}`);
	}
}

// done
function changeStatus(task, status) {
	list.find(item => {
		if (item.name === task) item.status = status;
	});
}
// done
function changePriority(task, priority) {
	list.find(item => {
		if (item.name === task) item.priority = priority;
	});
}

// done
function addTask(task) {
	if (!list.find(item => item.name === task)) {
		list.push({
			name: task,
			status: DEFAULT_STATUS,
			priority: DEFAULT_PRIORITY,
		});
	}
}

// done
function deleteTask(task) {
	list = list.filter(item => item.name !== task);
}

showBy('priority');
// showList()
