
import java.util.*;

class Inventory {
    static List<Map<String,Object>> products = List.of(
        Map.of("id",1,"name","A","category","cat1","price",100,"stock",2),
        Map.of("id",2,"name","B","category","cat2","price",200,"stock",10),
        Map.of("id",3,"name","C","category","cat1","price",150,"stock",1)
    );

    public static void main(String[] args){
        products.stream().filter(p->(int)p.get("stock")<5).forEach(System.out::println);
        products.stream().sorted((a,b)->((int)a.get("price") - (int)b.get("price"))).forEach(System.out::println);
        int total = products.stream().mapToInt(p-> (int)p.get("price") * (int)p.get("stock")).sum();
        System.out.println("Total: "+total);

        Map<String,List<Map<String,Object>>> grouped=new HashMap<>();
        for(var p:products){
            String c=(String)p.get("category");
            grouped.putIfAbsent(c,new ArrayList<>());
            grouped.get(c).add(p);
        }
        System.out.println(grouped);
    }
}
