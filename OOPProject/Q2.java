
import java.util.*;

class FoodOrder {
    static Map<String,Integer> menu = Map.of(
        "pizza",200,
        "burger",100,
        "pasta",150
    );

    public static int calculateBill(String[] items) {
        int total=0;
        for(String item:items){
            if(!menu.containsKey(item))
                throw new RuntimeException("Invalid item: "+item);
            total+=menu.get(item);
        }
        return total;
    }

    public static void main(String[] args){
        try{
            System.out.println("Bill: "+calculateBill(new String[]{"pizza","burger"}));
            System.out.println("Bill: "+calculateBill(new String[]{"pizza","x"}));
        }catch(Exception e){
            System.out.println("Error: "+e.getMessage());
        }
    }
}
