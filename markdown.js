$(document).ready(function(){

   $("#button-1").click(function(){
    $("#markdown-editor").toggle();

   });
});
  $(document).ready(function(){
   $("#button-2").click(function(){
    $("#markdown-previewer").toggle();
   }); });
   //$("#markdown-editor").html("hello!")
   $(document).ready(function(){
   //get references to html ids
   const $editor= $("#markdown-editor");
   const $previewer= $("#markdown-previewer");
   //create the converter element
   const converter=new showdown.Converter({
        simplifiedAutoLink: true, //automatic links
        tables: true,
        strikethrough: true,
        tasklists: true,
        ghCodeBlocks: true,

});
   function updateHtml(){
    var markDown=$editor.val();
    var html=converter.makeHtml(markDown);


    // Remove wrapping <p> tags from the converted HTML
    html = html.replace(/^<p>|<\/p>$/g, '');
    //previewer.innerHTML=html;
    $previewer.html(html);}
    
    //editor.addEventListener("input", updateHtml);
    $editor.on("input", updateHtml);

    updateHtml();
    
});