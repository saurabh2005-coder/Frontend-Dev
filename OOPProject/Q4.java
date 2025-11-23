
class Employee {
    String name,department;
    public Employee(String n,String d){ name=n; department=d;}
    public void work(){ System.out.println(name+" works in "+department);}
}

class Manager extends Employee {
    public Manager(String n,String d){ super(n,d);}
    @Override
    public void work(){ System.out.println(name+" manages "+department);}
}

class TestEmp {
    public static void main(String[] args){
        Employee e=new Employee("Alex","Sales");
        Employee m=new Manager("Mira","IT");
        e.work();
        m.work();
    }
}
