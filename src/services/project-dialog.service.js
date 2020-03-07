import Vue from 'vue';
import { addNotification } from './notifications';
import { createProject } from './firestore.service';

const dialog = Vue.observable({
    showDialog: false,
    name: '',
    description: '',
    start: null,
    end: null,
    members: [],
    steps: [{ id: '1', name: 'Write name!', description: 'Write description!', start: null, end: null }]
});

export function getShowDialog() {
    return dialog.showDialog;
}

export function getName() {
    return dialog.name;
}

export function setName(newName) {
    return dialog.name = newName;
}

export function getDesc() {
    return dialog.description;
}

export function setDesc(desc) {
    return dialog.description = desc;
}

export function getMembers() {
    return dialog.members;
}

export function getSteps() {
    return dialog.steps;
}

export function addEmptyStep() {
    const id = dialog.steps.length + 1;
    return dialog.steps.push({
        id: id.toString(),
        name: 'Write name!',
        description: 'Write description',
        start: null,
        end: null
    })
}

export function removeMember(index) {
    return dialog.members.splice(index, 1);
}

export function changeShowDialog() {
    return dialog.showDialog = !dialog.showDialog;
}

function checkDataIsValid() {
    if (dialog.name.length < 4 || dialog.name.length > 30) {

        addNotification('Project name must be between 4 and 30 chars.');
        return false;
    }
    if (dialog.description.length < 4 || dialog.description.length > 300) {
        addNotification('Project description must be between 4 and 300 chars.');
        return false;
    }
    if (dialog.members.length < 1 || dialog.members.length > 12) {
        addNotification('Members must be between 1 and 12.');
        return false;
    }
    if (dialog.steps.length < 2 || dialog.steps.length > 20) {
        addNotification('Steps must be between 2 and 20.');
        return false;
    }

    const stepsErrors = dialog.steps.map(checkStep);
    if (stepsErrors.includes(false)) {
        return false;
    }

    return true;
}

function checkStep(step) {
    if (step.name.length < 4 || step.name.length > 30) {
        addNotification(`${step.id} is with invalid name! Must be between 4 and 30 chars.`);
        return false;
    }
    if (step.description.length < 4 || step.description.length > 300) {
        addNotification(`${step.id} is with invalid description! Must be between 4 and 300 chars.`);
        return false;
    }

    return true;
}

function generateDate(timestamp) {
    return `${timestamp.getDate()}/${timestamp.getMonth() + 1}/${timestamp.getFullYear()}`;
}

export function submitProject() {
    if (checkDataIsValid()) {
        const members = dialog.members.map(user => user.uid);
        const project = {
            name: dialog.name,
            description: dialog.description,
            members,
            steps: dialog.steps,
            start: dialog.start,
            end: dialog.end,
            status: 'Active'
        };
        addNotification('Time to create a new project!');
        return createProject(project);
    }
    return null;
}

export function setStartDate(date) {
    return dialog.start = generateDate(date);
}

export function setEndDate(date) {
    return dialog.end = generateDate(date);
}