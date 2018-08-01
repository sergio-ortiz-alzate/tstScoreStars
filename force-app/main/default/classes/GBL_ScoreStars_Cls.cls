public class GBL_ScoreStars_Cls {
    
    @AuraEnabled public static sObject getScore(String apiName, String recordId, String fields){
        string query='select Id ' + String.escapeSingleQuotes(fields) + ' from ' + String.escapeSingleQuotes(apiName) + ' where Id =: recordId';
        System.debug(query);
        return Database.query(query);
    }
    
    @AuraEnabled public static String saveScore(List<sObject> toUpdate){
        String result = '';          
        try{
            update toUpdate;
            result = 'Ok!';
        }catch(Exception e){
            result = 'Error : ' + e.getMessage();
        }
        return result;
    }
}