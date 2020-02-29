const project = {
    image: {},
    title: '',
    team: [{ firstName: 'Alex', lastName: 'Todorov', image: 'https://firebasestorage.googleapis.com/v0/b/experience-organization.appspot.com/o/profile%2FunkItem.svg?alt=media&token=e1aaca08-d10f-4847-bc5b-1ae66d4768bb', uid: '2' }],
    steps: [{
        id: "0",
        name: "Step Name",
        desc: "",
        members: [
            {
                uid: 1,
                firstName: "Alex",
                image:
                    "https://previews.123rf.com/images/rudall30/rudall301506/rudall30150600063/41192424-cool-man-with-beards-and-mustache-wearing-a-sunglasses.jpg"
            }
        ]
    }]
}

const stepper = {
    active: 'first',
    first: false,
    second: false,
    third: false,
    four: false
}

export function addImage(image) {
    return project.image = image;
}

export function getStepperState() {
    return stepper;
}

export function goToNextStep(id, index) {
    stepper[id] = true

    if (index) {
        stepper.active = index
    }
}

export function getTeam() {
    return project.team;
}

export function getSteps() {
    return project.steps;
}

export function addStep(step) {
    step.id = project.steps.length.toString();
    return project.steps.push(step);
}

export function addMemberToTeam(member) {
    return project.team.push(member);
}