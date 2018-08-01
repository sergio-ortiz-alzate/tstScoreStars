/*----------------------------------------------------------------------------------------------											
*Autor:         	Sergio Andres Ortiz
*Proyecto:      	Salud ORG
*Descripción:   	Test of Class for GBL_ScoreStars_Cls 
*______________________________________________________________________________________________
*Versión    Fecha           Autor                               Descripción
*1.0        26/ABR/2018     Sergio Andres Ortiz                 Creación de la clase.
-----------------------------------------------------------------------------------------------*/
@isTest
public class GBL_ScoreStars_tst {
    
    @isTest static void testSaveRecord() {
        Test.startTest(); 
        List<sObject> lstSobject = new List<sObject>();
        Account cliente          = new Account();
		cliente.Name             = 'Test Account';	
		insert cliente;
        lstSobject.add(cliente);
        
        String result = GBL_ScoreStars_Cls.saveScore(lstSobject);
        GBL_ScoreStars_Cls.saveScore(new list<sObject>());
       	GBL_ScoreStars_Cls.getScore('Account', cliente.Id, ',Name');
        
        System.assertEquals(result,'Ok!');
        
        Test.stopTest();
    }

}