class HomeRenovation {

    constructor(budget){
        this.budget = Number(budget);
        this.tasks = [];
        this.completedTasks = []
    }


    addTask(description, cost, priority){
       if(this.budget < cost){
        return `Not enough budget to add ${description} task.`
       }

       this.budget -= cost
       this.tasks.push({description: description, cost:cost, priority:priority})
       return `The task ${description} has been successfully added to the renovation plan.`
    }
    markTaskAsCompleted(description){
        let result = []
        let found =this.tasks.find(task => task.description === description)
        if(!found){
            throw Error(`Task ${description} not found in the renovation plan.`)
        }
       
        this.completedTasks.push(description)
        return `The task ${description} has been successfully completed.`
    }
}

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2)); 
console.log(renovation.addTask("Install new windows", 5000, 1)); 
console.log(renovation.markTaskAsCompleted("Paint walls")); 
console.log(renovation.markTaskAsCompleted("Change doors")); 

