/*Create a class called User with properties username and password. Implement a getter method for password that returns the password with all characters replaced by asterisks. Implement a setter method for password that checks if the new password is at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, set the new password. If not, log an error message.*/


class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }

    getpassword(){
        return this.password.replace(/./g,"*")
    }

    setpassword(newPassword){
        let containsnumber = false;
        let containsUpperCase = false;
        for(let i=0; i < newPassword.length; i++){
            let char = newPassword.charAt(i);
            if(!isNaN(char)){
                containsnumber = true;
            }
            else if (char ===char.toUpperCase()){
                containsUpperCase =true ;
            }
        }
        if(newPassword.length >= 8 && containsnumber && containsUpperCase){
            this.password = newPassword;
        }
        else{
            console.log("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.")
        }
    } 
}


let user = new User("johndoe","Password123")
console.log(user.getpassword())

user.setpassword("myPassword"); 
user.setpassword("MyPassword");  
user.setpassword("Mypassword123");
console.log(user.getpassword());