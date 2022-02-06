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

// done
function changeStatus(task, status) {
	list.find(item => {
		if (item.name === task) item.status = status;
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

function showList() {
	const tasks = {
		[STATUSES.TO_DO]: '',
		[STATUSES.IN_PROGRESS]: '',
		[STATUSES.DONE]: '',
	};
}

showList();
