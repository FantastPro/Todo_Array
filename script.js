'use strict';

const STATUS = {
	TO_DO: 'To Do',
	IN_PROGRESS: 'In Progress',
	DONE: 'Done',
};
const PRIORITY = {
	LOW: 'Low',
	HIGH: 'High',
};

const DEFAULT_STATUS = STATUS.TO_DO;
const DEFAULT_PRIORITY = PRIORITY.HIGH;

const list = [
	{
		name: 'create a post',
		status: 'In progress',
		priority: 'Low',
	},
	{
		name: 'test',
		status: 'Done',
		priority: 'High',
	},
	{
		name: 'listen to music',
		status: 'In progress',
		priority: 'Low',
	},
];

function changeStatus(task, status) {
	list.find(item => {
		if (item.name === task) item.status = status;
	});
}

function addTask(task) {
	let isTask = list.find(item => item.name === task);
	if (isTask) {
		return console.log('Such task already exists');
	} else {
		list.push({
			name: task,
			status: DEFAULT_STATUS,
			priority: DEFAULT_PRIORITY,
		});
	}
}

function deleteTask(task) {
	let isTask = list.find(item => item.name === task);
	if (!isTask) {
		console.error('Delete task error, the task does not exist');
		return;
	}
	let taskId = list.indexOf(list.find(item => item.name === task));
	list.splice(taskId, 1);
}

function showList() {
	const tasks = {
		[STATUS.TO_DO]: '',
		[STATUS.IN_PROGRESS]: '',
		[STATUS.DONE]: '',
	};

	for (let key in list) {
		tasks[list[key]] += `  "${key}",\n`;
	}

	console.log(
		`${STATUS.TO_DO}:
${tasks[STATUS.TO_DO] || ' - '}
${STATUS.IN_PROGRESS}:
${tasks[STATUS.IN_PROGRESS] || ' - '}
${STATUS.DONE}:
${tasks[STATUS.DONE] || ' - '}`
	);
}
console.log(list);
