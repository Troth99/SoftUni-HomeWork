function companyUsers(arr){

    let companies = {}



    for (let companyInfo of arr){

        let [companyName, companyId] = companyInfo.split(` -> `)

        if (companies[companyName]){
            if (companies[companyName].includes(companyId)){
                continue
            }else {
                companies[companyName].push(companyId)
            }
          
        }else {
            companies[companyName] = [companyId]
        }
        
    }


let sortedCompanies = Object.entries(companies).sort((firstCompany, secondCompany) =>{
    return firstCompany[0].localeCompare(secondCompany[0])
})


for (let nameOfcompany of sortedCompanies){

    console.log(nameOfcompany[0]);

    let companyIds = nameOfcompany[1]

    for (let ids of companyIds){

        console.log(`-- ${ids}`);
        
    }
    
}





}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
    )