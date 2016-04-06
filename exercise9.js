$(document).ready(function(){
	console.log("immediately before setting listener");
	$("#getWordsButton").on('click', getWord);
});
var words = [];
var counts = [];

function getWord()
{
	console.log("Inside getXML");
	$.ajax({
        type: "POST",
        url: "ajax/getWords.php",
		data: {somevarval:"SomeVarVal"},
        success: function(xml){
          //alert(xml);
		  console.log(xml);
		  console.log(xml.getElementsByTagName("Word")[0].getElementsByTagName("value")[0].childNodes[0].data);
		  console.log(xml.getElementsByTagName("Word")[0].getElementsByTagName("value")[0]);
		  word = xml.getElementsByTagName("Word")[0].getElementsByTagName("value")[0].childNodes[0].data;
		  var table = document.getElementById("wordTable");
		  var wordIndex = words.indexOf(word);
		  var row = -1;
		  var cell1;
		  var cell2;
		  //happens if the word is already in the words array
		  if(wordIndex !== -1)
		  {
			counts[wordIndex] = counts[wordIndex] + 1;
			table.rows[wordIndex+1].cells[1].innerHTML = counts[wordIndex];
		  }else//word is not already in the words array
		  {
			words.push(word);
			wordIndex = words.indexOf(word);
			counts.push(1);
			row = table.insertRow(words.length);
			cell1 = row.insertCell(0);
			cell2 = row.insertCell(1);
			cell1.innerHTML = words[wordIndex];
			cell2.innerHTML = counts[wordIndex];
		  }
		  
        }
    });
}

function handleXML(xml)
{
	console.log("handleXML reached");
	console.log(xml);
}
