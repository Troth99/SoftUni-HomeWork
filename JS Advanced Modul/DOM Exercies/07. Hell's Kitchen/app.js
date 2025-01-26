function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const textArea = document.querySelector('#inputs textarea');
   const bestRestaurantResult = document.querySelector('#bestRestaurant p');
   const workersResult = document.querySelector('#workers p');
   const restaurants = {}; // Съхраняваме ресторантите тук

   function onClick() {
      const input = JSON.parse(textArea.value); // Превръщаме текста в JSON
      for (const line of input) {
         const [name, workersString] = line.split(' - ');
         const workersData = workersString.split(', ');

         // Създаваме масив с работниците
         const workers = workersData.map(worker => {
            const [workerName, salary] = worker.split(' ');
            return { name: workerName, salary: Number(salary) };
         });

         // Ако ресторантът вече съществува, добавяме работниците
         if (!restaurants[name]) {
            restaurants[name] = {
               workers: [],
               getAverageSalary() {
                  return this.workers.reduce((sum, w) => sum + w.salary, 0) / this.workers.length;
               }
            };
         }
         restaurants[name].workers = restaurants[name].workers.concat(workers);
      }

      // Намиране на най-добрия ресторант
      let bestRestaurant = null;
      let highestAvgSalary = 0;

      for (const name in restaurants) {
         const avgSalary = restaurants[name].getAverageSalary();
         if (avgSalary > highestAvgSalary) {
            highestAvgSalary = avgSalary;
            bestRestaurant = { name, avgSalary, workers: restaurants[name].workers };
         }
      }

      if (bestRestaurant) {
         // Подреждане на работниците по заплата (низходящо)
         bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

         // Показване на резултата
         bestRestaurantResult.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.workers[0].salary.toFixed(2)}`;
         workersResult.textContent = bestRestaurant.workers
            .map(w => `Name: ${w.name} With Salary: ${w.salary}`)
            .join(' ');
      }
   }
}




// //["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
