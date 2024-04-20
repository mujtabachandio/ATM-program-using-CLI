import inquirer from "inquirer"
import promptSync from "prompt-sync";
const prompt = promptSync();
let balance:number = 30000;
let pin_code:number = 2020;

inquirer.prompt(
    {
        type: "password",
        name: "user_pin",
        message: "Enter '4-Digit' Pin code",
        mask: "*",    }
).then((answer) => {
    if(pin_code == answer.user_pin){
        console.log(" "); // empty spaces to avoid warnings        
        console.log(`\tPIN CODE: verifidy\t`);
        console.log(" "); // empty spaces to avoid warnings        
        console.log(`\tBALANCE: Rs. ${balance}\t`);
        inquirer.prompt(
            {
                type: "list",
                name: "trasition",
                message: "select your transaction",
                choices: [
                    "1. Deposit",
                    "2. Withdraw",
                ],
            },
        ).then((answer2) => {
            
            if(answer2.trasition == "2. Withdraw"){
                inquirer.prompt(
                    {
                        type: "number",
                        name: "amount",
                        message: "Enter amount to withdraw",
                    },
                ).then((answer3) => {
                    if(answer3.amount <= balance){
                        balance = balance - answer3.amount;
                        console.log(`REMAINING BALANCE: Rs. ${balance}`);
                        
                    }
                    else{
                        console.log("Insufficient balance");
                    }
                });
                
            }else if (answer2.trasition == "1. Deposit"){
                inquirer.prompt({
                    type: "number",
                    name:"amountdeposit",
                    message:"Enter amount to Deposit"
                }).then((paisa) => {
                    balance = balance + paisa.amountdeposit;
                    console.log(`REMAINING BALANCE: Rs. ${balance}`);
                }
                )                 
            }
        }
        
        )
    }else{
        console.log(`PIN CODE: invalid`);
    }
});

