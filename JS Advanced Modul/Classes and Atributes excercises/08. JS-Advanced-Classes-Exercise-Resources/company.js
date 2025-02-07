class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
 
        if (name === '' || name === undefined || name === null ||
            salary <= 0 ||
            position === '' || position === undefined || position === null ||
            department === '' || department === undefined || department === null) {
            throw new Error('Invalid input!');
        }


        if (!this.departments[department]) {
            this.departments[department] = [];
        }

    
        this.departments[department].push({
            Name: name,
            Salary: salary,
            Position: position
        });

      
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let highestAverageSalary = 0;
        let departmentWithMaxAvgSalary = '';

   
        for (let department in this.departments) {
            if (this.departments.hasOwnProperty(department)) {
                let employees = this.departments[department];
                let totalSalary = 0;

      
                for (let employee of employees) {
                    totalSalary += employee.Salary;
                }

                let avgSalary = totalSalary / employees.length;

             
                if (avgSalary > highestAverageSalary) {
                    highestAverageSalary = avgSalary;
                    departmentWithMaxAvgSalary = department;
                }
            }
        }

        let employeesInMaxAvgSalary = this.departments[departmentWithMaxAvgSalary];

        
        employeesInMaxAvgSalary.sort((a, b) => b.Salary - a.Salary || a.Name.localeCompare(b.Name))

      
        let result = `Best Department is: ${departmentWithMaxAvgSalary}`
        result += `\nAverage salary: ${highestAverageSalary.toFixed(2)}`;
       

        
        for (let person of employeesInMaxAvgSalary) {
            result += `\n${person.Name} ${person.Salary} ${person.Position}`;
        }

        return result;
    }
}








let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
