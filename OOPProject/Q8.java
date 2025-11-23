
class MovieTicket {
    String movieName; int seatNo; double price;
    public MovieTicket(String m,int s,double p){ movieName=m; seatNo=s; price=p;}
    public void printTicket(){ System.out.println(movieName+" "+seatNo+" "+price);}
}

class OnlineTicket extends MovieTicket {
    double convenienceFee;
    public OnlineTicket(String m,int s,double p,double f){ super(m,s,p); convenienceFee=f;}
    public double getTotalAmount(){ return price+convenienceFee;}
}

class TestMovie {
    public static void main(String[] args){
        OnlineTicket o=new OnlineTicket("ABC",12,200,20);
        o.printTicket();
        System.out.println(o.getTotalAmount());
    }
}
