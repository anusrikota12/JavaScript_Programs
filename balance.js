function withdraw(balance, amount) {
    if (amount <= balance) {
        return "Withdrawal successful!";
    }
    else { 
        return "Insufficient Balance!";
    }
}
console.log(withdraw(1000, 500)); 