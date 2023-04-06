function validation(values){
        let error = {}
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^s@]+$/
        // const password_pattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&()_+=-])[A-Za-z\d!@#$%^&()_+=-]{8,}$/

        
        if(values.name === "") {
            error.name = "name should not be empty"
        }
      
        else {
            error.name = ""
        }

        if(values.email === "") {
            error.email = "name should not be empty"
        }
        else if (!email_pattern.test(values.email)) {
            error.email = "email didnt match"
        }else {
            error.email = ""
        }
        
        if(values.password === "") {
            error.password = "password should not be empty"
        }
        // else if (!password_pattern.test(values.password)) {
        //     error.password = "password didnt match"

        // }
        else {
            error.password = ""
        }
        
   return error;
}


export default validation;