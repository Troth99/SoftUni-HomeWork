function project(input){

    let name = (input[0]);
    let totalProject = Number(input[1]);
    let oneProject = 3;
    let totalHours = totalProject * oneProject;

    console.log (`The architect ${name} will need ${totalHours} hours to complete ${totalProject} project/s.`);


}

project(["George" , 4])