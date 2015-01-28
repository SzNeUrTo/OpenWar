i = 1;
"<div id=\"SuperText"+i+"\" class=\"form-group\">
    <p id=\"placeText"+i+"\">
    	<input id=\"inputText"+i+"\" type=\"email\" class=\"form-control\" placeholder=\"Input Something...\">
    </p>
    <p id=\"placeStyle"+i+"\">
    		<label>X :</label>
	    	<input id=\"inputX"+i+"\" type=\"range\" min=\"0\" max=\"100\" value=\"45\" style=\"width: 45px;\" id=\"fader\" onchange=\"outputUpdate()\">
	    	<label>&nbsp;&nbsp;</label>
	    	<label>Y :</label>
	    	<input id=\"inputY"+i+"\" type=\"range\" min=\"0\" max=\"100\" value=\"45\" style=\"width: 45px;\" id=\"fader\" onchange=\"outputUpdate()\">
	    	<label>&nbsp;&nbsp;</label>
	    	<label>A :</label>
	    	<input id=\"inputA"+i+"\" type=\"range\" min=\"0\" max=\"100\" value=\"45\" style=\"width: 45px;\" id=\"fader\" onchange=\"outputUpdate()\">
	    	<label>&nbsp;&nbsp;</label>
	    	<label>S :</label>
	    	<input id=\"inputS"+i+"\" type=\"range\" min=\"0\" max=\"100\" value=\"45\" style=\"width: 45px;\" id=\"fader\" onchange=\"outputUpdate()\">
	    	<label>&nbsp;&nbsp;</label>
	    	<input id=\"inputColor"+i+"\" type=\"color\" value=\"#40c744\" style=\"width: 30px;\" onchange=\"outputUpdate()\"/>
    </p>
</div>"