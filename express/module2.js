const {employees, salaries} = require("./module");
employees.forEach((emp, index) => {
    salaries.forEach((sal, indexx) =>{
        if(indexx=== index){
            console.log("His name is:"+emp+". his salary is:"+sal);

        }

    })
    
});
