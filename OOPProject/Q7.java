
class BankAccount{
    private double balance=0;
    public void deposit(double amt){ balance+=amt; }
    public void withdraw(double amt){
        if(amt>balance) throw new RuntimeException("Insufficient balance");
        balance-=amt;
    }
    public double getBalance(){ return balance; }

    public static void main(String[] args){
        BankAccount b=new BankAccount();
        b.deposit(1000);
        try{
            b.withdraw(2000);
        }catch(Exception e){
            System.out.println(e.getMessage());
        }
        System.out.println(b.getBalance());
    }
}
