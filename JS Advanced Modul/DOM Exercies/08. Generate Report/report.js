function generateReport() {

    const result = [];
    const employeeEl = document.querySelector('input[name=employee]').checked 
    const departmentEL = document.querySelector('input[name=deparment]').checked 
    const statusEl = document.querySelector('input[name=status]').checked 
    const dateHireEl = document.querySelector('input[name=dateHired]').checked 
    const benefitsEl = document.querySelector('input[name=benefits]').checked 
    const compenssationEl = document.querySelector('input[name=salary]').checked 
    const RatingEl = document.querySelector('input[name=rating]').checked 
    

    const rows = Array.from(document.querySelectorAll(`tbody tr`));
    for (const row of rows) {
        const rowData = {};
        if (employeeEl) {
            const epmloyeCell = row.querySelector(`td:first-child`).textContent.trim();
            if (epmloyeCell) {
                rowData.employee = epmloyeCell;
            }
        } if (departmentEL) {
            const departmentCell = row.querySelector(`td:nth-child(2)`).textContent.trim();
            if (departmentCell) {
                rowData.department = departmentCell;
            }
        } if (statusEl) {
            const statusCell = row.querySelector('td:nth-child(3)').textContent.trim();
            if (statusCell) {
                rowData.status = statusCell;
            }
        } if (dateHireEl) {
            const hireCell = row.querySelector('td:nth-child(4)').textContent.trim();
            if (hireCell) {
                rowData.dateHired = hireCell;
            }
        } if (benefitsEl) {
            const benefitCell = row.querySelector('td:nth-child(5)').textContent.trim();
            if (benefitCell) {
                rowData.benefits = benefitCell;
            }
        } if (compenssationEl) {
            const salaryCell = row.querySelector('td:nth-child(6)').textContent.trim();
            if (salaryCell) {
                rowData.salary = salaryCell;
            }
        }  if (RatingEl) {
            const ratingCell = row.querySelector('td:nth-child(7)').textContent.trim();
            if (ratingCell) {
                rowData.rating = ratingCell;
            }
        }
        if (Object.keys(rowData).length > 0) {
            result.push(rowData)
        }
    }

    const textAreaEl = document.getElementById(`output`);

    textAreaEl.value = JSON.stringify(result)


}

