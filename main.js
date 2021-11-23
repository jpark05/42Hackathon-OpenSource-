$(function()
{
	$('#fullpage').fullpage({
		//options here
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'],
        navigation: true,
        navigationPosition: 'right',
        sectionsColor: ['#bbb', '#ccc', '#ddd', '#eee', '#fff', '#aaa', '#bbb'],
        afterLoad: function(anchorLink, index){
            console.log("after Load  " + index);
            document.getElementById('callbacksDiv').innerHTML += '<p>afterLoad - anchorLink:' + anchorLink + " index:" + index + '</p>';
            deleteLog = true;
            console.log('===============');
            console.log("afterLoad--" + "anchorLink: " + anchorLink + " index: " + index );
        }
	});

});




