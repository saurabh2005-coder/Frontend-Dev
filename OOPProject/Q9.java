
import java.util.*;

class FitnessAnalytics {
    List<Map<String,Object>> data;
    public FitnessAnalytics(List<Map<String,Object>> d){
        if(d.isEmpty()) throw new RuntimeException("Empty dataset");
        data=d;
    }

    public List<String> getActiveUsers(){
        List<String> res=new ArrayList<>();
        for(var x:data){
            if((int)x.get("steps")>7000) res.add((String)x.get("user"));
        }
        return res;
    }

    public double getAverageCalories(){
        double sum=0;
        for(var x:data) sum+=(int)x.get("calories");
        return sum/data.size();
    }

    public List<String> getUserSummary(){
        List<String> res=new ArrayList<>();
        for(var x:data){
            res.add(x.get("user")+": Steps "+x.get("steps")+", Cal "+x.get("calories"));
        }
        return res;
    }

    public static void main(String[] args){
        List<Map<String,Object>> d=List.of(
            Map.of("user","A","steps",8000,"calories",300),
            Map.of("user","B","steps",12000,"calories",500),
            Map.of("user","C","steps",4000,"calories",200)
        );
        FitnessAnalytics fa=new FitnessAnalytics(d);
        System.out.println(fa.getActiveUsers());
        System.out.println(fa.getAverageCalories());
        System.out.println(fa.getUserSummary());
    }
}
