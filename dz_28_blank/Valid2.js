 class Valid2 extends Valid{
     constructor(email, password, isValid = false, emailError = '', passwordError = ''){
         super(email, password, isValid = false);
         this.emailError = emailError;
         this.passwordError = passwordError;
     }

     validateMore(){
        this.email == '' ?  this.isValid = false :  this.isValid = true;

        if(this.isValid == false){
            this.emailError = 'email empty';
            this.passwordError = 'min length 6';
         } else {
            this.emailError = '';
            this.passwordError = '';
         }
     }
 }