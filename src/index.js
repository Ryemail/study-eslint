function getName() {
    return {
        name: '5555',
    };
}

getName();

class ESlint {
    constructor() {
        this.name = 'eslint';
    }

    getAttr(prop) {
        return this[prop];
    }
}

const lint = new ESlint();

console.log(lint.getAttr('name'));
