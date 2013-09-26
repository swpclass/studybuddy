/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'studybuddy',
            type:'image',
            rect:['9px','4px','121px','79px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"studybuddy.png",'0px','0px']
         },
         {
            id:'btnAdd',
            type:'rect',
            rect:['70px','97px','179px','31px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(77,245,56,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'txtAdd',
               type:'text',
               rect:['3px','2px','auto','auto','auto','auto'],
               text:"Add Assignment",
               font:['Arial, Helvetica, sans-serif',[24,""],"rgba(0,0,0,1)","normal","none",""]
            }]
         },
         {
            id:'boxAssignments',
            type:'rect',
            rect:['74px','145px','173px','0px','auto','auto'],
            fill:["rgba(77,245,56,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_boxAssignments}": [
            ["style", "top", '145px'],
            ["style", "height", '0px'],
            ["color", "background-color", 'rgba(77,245,56,0.00)']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '320px']
         ],
         "${_studybuddy}": [
            ["style", "height", '79px'],
            ["style", "top", '4px'],
            ["style", "left", '9px'],
            ["style", "width", '121px']
         ],
         "${_btnAdd}": [
            ["style", "top", '97px'],
            ["style", "left", '70px'],
            ["color", "background-color", 'rgba(77,245,56,1.00)']
         ],
         "${_txtAdd}": [
            ["style", "top", '2px'],
            ["style", "left", '3px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-105055546");
