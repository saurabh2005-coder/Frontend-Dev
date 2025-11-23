
class Student {
    private String name;
    private int[] marks;

    public Student(String name, int[] marks) {
        this.name = name;
        this.marks = marks;
    }

    public double calculateAverage() {
        int sum = 0;
        for(int m : marks) sum+=m;
        return sum/(double)marks.length;
    }

    public char getGrade() {
        double avg = calculateAverage();
        if(avg>=85) return 'A';
        if(avg>=70) return 'B';
        if(avg>=50) return 'C';
        return 'F';
    }

    public void printResult() {
        System.out.println(name+" Avg: "+calculateAverage()+" Grade: "+getGrade());
    }

    public static void main(String[] args){
        Student s1=new Student("A", new int[]{80,90,85});
        Student s2=new Student("B", new int[]{60,70,65});
        Student s3=new Student("C", new int[]{30,40,50});
        s1.printResult(); s2.printResult(); s3.printResult();
    }
}
