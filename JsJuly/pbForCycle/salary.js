function salary(input) {


    let index = 0
    let numberOfTabs = Number(input[index]);
    index++
    let salary = Number(input[index])
    index++


    let fee = 0

    for (let i = 0; i <= numberOfTabs; i++) {

        let currentTab = input[index]
        index++


        switch (currentTab) {
            case 'Facebook':

                fee += 150; break;
            case `Instagram`:

                fee += 100; break;

            case `Reddit`:
                fee += 50; break;

        }
       
        


    }
    let salarysum = salary -= fee
    if (salarysum <= 0) {
        console.log(`You have lost your salary.`);

    } else if (salary >= 0) {
    
        console.log(salary);
    }

}

/*alary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"]) */
/*salary(["3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"]) */
salary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"])
    