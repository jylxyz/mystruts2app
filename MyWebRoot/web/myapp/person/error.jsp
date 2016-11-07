<%@ page contentType="text/html; charset=utf-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
<head>
    <title>Error Msg</title>
    <meta http-equiv="Cache-Control" content="no-store">
	<meta http-equiv="Cache-Control" content="no-cache">
	<meta http-equiv="Pragma" content="no-cache">
	<meta http-equiv="Expires" content="0">
    <LINK href="theme/button.css" rel="stylesheet" type="text/css">
    <LINK href="theme/style.css" rel="stylesheet" type="text/css">
    <script language="javascript" src="js/public.js"></script>
</head>
<BODY>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p align="center">
	<img src="${pageContext.request.contextPath}/myapp/person/images/error_face.jpg" width="110" height="118">
	<font color="#FF0000" size="20px">Error Message: </font>
</p>
<p align="center"><font color="#FF0000" size="20px"><s:text name="Common.Error1"/></font></p>
<p align="center"><font color="#FF0000" size="20px"><s:text name="Common.Error2"/></font></p>
<table width="755" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center">
    	<img src="${pageContext.request.contextPath}/myapp/person/images/error_icon_alart.jpg" width="100" height="100">  	
    </td>
  </tr>
  <tr>
    <td align="center"><button style="height:21px" class="btn_mouseout" onMouseOver="this.className='btn_mouseover'" onMouseOut="this.className='btn_mouseout'" 
		onmousedown="this.className='btn_mousedown'" onMouseUp="this.className='btn_mouseup'" onClick="goback();"><s:text name="Common.Back"/></button>
	</td>
  </tr>
</table>
</BODY>
</html>