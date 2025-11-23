
class Product {
    String name;
    double price;

    public Product(String name,double price){
        this.name=name;
        this.price=price;
    }

    public double applyDiscount(double percent){
        return price - (price*percent/100);
    }

    public static void main(String[] args){
        Product p1=new Product("Phone",10000);
        Product p2=new Product("TV",20000);
        Product p3=new Product("Laptop",50000);

        System.out.println(p1.applyDiscount(10));
        System.out.println(p2.applyDiscount(20));
        System.out.println(p3.applyDiscount(15));
    }
}
