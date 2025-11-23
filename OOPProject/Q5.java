
class Trip {
    String from,to;
    double distance;
    public Trip(String f,String t,double d){
        if(d<=0) throw new RuntimeException("Invalid distance");
        from=f;to=t;distance=d;
    }
    public double calculateFare(){ return distance*10; }
    public static void main(String[] args){
        try{
            Trip t=new Trip("A","B",12);
            System.out.println(t.calculateFare());
            Trip x=new Trip("A","B",-5);
        }catch(Exception e){
            System.out.println("Error: "+e.getMessage());
        }
    }
}
