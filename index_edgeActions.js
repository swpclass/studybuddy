/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var boxAssignmentWidth = sym.$("boxAssignments").width();
         
         for(var i=0; i<10;i++)
         {
         sym.$("boxAssignments").css("overflow:scroll");
         sym.$("boxAssignments").append("<div id='notes'><ul>");
         sym.$("boxAssignments").append("</br><li style='text-decoration:none; color:#000; background:#ffc; display:block; height:10%; width:" + boxAssignmentWidth + "; padding:1em'>test</br>information</br>10:00pm</li>");
         }
         sym.$("boxAssignments").append("</ul></div>");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-105055546");