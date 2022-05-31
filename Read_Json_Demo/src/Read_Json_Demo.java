import java.io.*;
import java.util.Iterator;

import org.json.simple.*;
import org.json.simple.parser.*;

/*
Author : Quy Vu
*/
public class Read_Json_Demo {
    public static void main(String[] args) {
        JSONParser parser = new JSONParser();
        try {
            Object obj = parser.parse(new FileReader("course.json"));
            JSONObject jsonObject = (JSONObject)obj;
            String name = (String)jsonObject.get("name");
            String course = (String)jsonObject.get("course") ;
            JSONArray subjects = (JSONArray)jsonObject.get("subjects");
            System.out.println(name);
            System.out.println(course);
            Iterator iterator = subjects.iterator();
            while (iterator.hasNext()){
                System.out.println(iterator.next());
            }
        }catch (Exception e){
            System.err.println(e);
        }

    }
}
