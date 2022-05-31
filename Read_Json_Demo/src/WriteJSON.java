import netscape.javascript.JSObject;
import  org.json.simple.*;

import java.io.FileWriter;
import java.io.IOException;

public class WriteJSON {

    @SuppressWarnings("unchecked")
    public static void main(String[] args) {


        JSONObject employeeDetails = new JSONObject();
        employeeDetails.put("name","Vũ Viết Quý");
        employeeDetails.put("phone","0326459773");
        employeeDetails.put("address","Thái Bình");

        JSONObject employeeObj = new JSONObject();
        employeeObj.put("employee",employeeDetails);

        JSONObject employeeDetails2 = new JSONObject();
        employeeDetails2.put("name","Vũ Viết Sơn");
        employeeDetails2.put("phone","0392156772");
        employeeDetails2.put("address","Thái Bình");

        JSONObject employeeObj2 = new JSONObject();
        employeeObj2.put("employee",employeeDetails);

        JSONArray employeeList = new JSONArray();
        employeeList.add(employeeDetails);
        employeeList.add(employeeDetails2);

        try {
            FileWriter file = new FileWriter( "employees.json");
            file.write(employeeList.toJSONString());
            file.flush();
        }catch (IOException err){
            System.err.println(err);
        }


    }
}
