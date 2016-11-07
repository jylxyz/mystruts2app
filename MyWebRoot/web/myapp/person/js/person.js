/**
 * Created by jy_liu on 2016/11/7.
 */
function checkFormForCreateOrUpdate() {
    // 必填项
    var nameMust = document.getElementById("name").value;
    nameMust = trim(nameMust);
    if (nameMust==String.empty()){
        alert('姓名不能为空！');
        return false;
    }
    document.getElementById("name").value=nameMust;

    var mailMust = document.getElementById("mail").value;
    mailMust = trim(mailMust);
    if (mailMust==String.empty()){
        alert('邮件不能为空！');
        return false;
    }
    document.getElementById("mail").value=mailMust;

    if (isEmail(mailMust)== false){
        alert('邮件格式不正确');
        return false;
    }

    var loginpasswordMust = document.getElementById("loginpassword").value;
    loginpasswordMust = trim(loginpasswordMust);
    if (loginpasswordMust==String.empty()){
        alert('登陆密码不能为空！');
        return false;
    }
    document.getElementById("loginpassword").value=loginpasswordMust;

    // 正整数
    var age = document.getElementById("age").value;
    age = trim(age);
    if (age != String.empty()){
        if (isPositiveInteger(age)==false){
            alert('年龄必须是正整数');
            return false;
        }
    }
    document.getElementById("age").value=age;

    // 正小数
    var stature = document.getElementById("stature").value;
    stature = trim(stature);
    if (stature != String.empty()){
        if (isPositiveDecimal(stature)==false){
            alert('身高必须是正小数或正整数');
            return false;
        }
    }
    document.getElementById("stature").value=stature;

    // 正小数
    var salary = document.getElementById("salary").value;
    salary = trim(salary);
    if (salary != String.empty()){
        if (isPositiveDecimal(salary)==false){
            alert('薪资必须是正小数或正整数');
            return false;
        }
    }
    document.getElementById("salary").value=salary;

    // s:optiontrasferselect 处理
    var hobbyRightSide = document.getElementById("hobbyRightSide");
    var habbyStr  = String.empty();
    for(var i=0;i<hobbyRightSide.options.length;i++) habbyStr += hobbyRightSide.options[i].value+"|";
    habbyStr = habbyStr.substring(0,habbyStr.length-1);
    document.getElementById("hobbyRightSide").value = hobbyRightSide;
    return true;
}

function checkFromForQuery() {
    // 正整数
    var ageFrom = document.getElementById("ageFrom").value;
    ageFrom = trim(ageFrom);
    if(ageFrom != String.empty()){
        if (isNumber(ageFrom)== false){
            alert('起始查询年龄必须是正整数！');
            return false;
        }
    }
    document.getElementById("ageFrom").value = ageFrom;

    var ageTo = document.getElementById("ageTo").value;
    ageTo = trim(ageTo);
    if(ageTo != String.empty()){
        if (isNumber(ageTo)== false){
            alert('截止查询年龄必须是正整数！');
            return false;
        }
    }
    document.getElementById("ageTo").value = ageTo;

    //正小数
    var statrueFrom = document.getElementById("statrueFrom").value;
    statrueFrom = trim(statrueFrom);
    if (statrueFrom != String.empty()){
        if (isPositiveDecimal(statrueFrom)== false){
            alert('起始查询身高必须是正小数或正整数！');
            return false;
        }
    }
    document.getElementById("statrueFrom").value = statrueFrom;

    var statrueTo = document.getElementById("statrueTo").value;
    statrueTo = trim(statrueTo);
    if (statrueTo != String.empty()){
        if (isPositiveDecimal(statrueTo)== false){
            alert('截止查询身高必须是正小数或正整数！');
            return false;
        }
    }
    document.getElementById("statrueTo").value = statrueTo;

    var salaryFrom = document.getElementById("salaryFrom").value;
    salaryFrom = trim(salaryFrom);
    if (salaryFrom != String.empty()){
        if (isPositiveDecimal(salaryFrom)== false){
            alert('起始查询薪资必须是正小数或正整数！');
            return false;
        }
    }
    document.getElementById("salaryFrom").value = salaryFrom;

    var salaryTo = document.getElementById("salaryTo").value;
    salaryTo = trim(salaryTo);
    if (salaryTo != String.empty()){
        if (isPositiveDecimal(salaryTo)== false){
            alert('截止查询薪资必须是正小数或正整数！');
            return false;
        }
    }
    document.getElementById("salaryTo").value = salaryTo;

    // s:optiontrasferselect 处理
    var hobbyRightSide = document.getElementById("hobbyRightSide");
    var habbyStr  = String.empty();
    for(var i=0;i<hobbyRightSide.options.length;i++) habbyStr += hobbyRightSide.options[i].value+"|";
    habbyStr = habbyStr.substring(0,habbyStr.length-1);
    document.getElementById("hobbyRightSide").value = hobbyRightSide;

    // 自动timeStamp的时、分处理
    document.getElementById("createtimeHourFrom").value =
        document.getElementById("createtimeHourSelectFrom");
            Option[document.getElementById("createtimeHourSelectFrom").selectedIndex].value;
    document.getElementById("createtimeMinuteFrom").value =
        document.getElementById("createtimeMinuteSelectFrom");
            Option[document.getElementById("createtimeMinuteSelectFrom").selectedIndex].value;

    document.getElementById("createtimeHourTo").value =
        document.getElementById("createtimeHourSelectTo");
    Option[document.getElementById("createtimeHourSelectTo").selectedIndex].value;
    document.getElementById("createtimeMinuteTo").value =
        document.getElementById("createtimeMinuteSelectTo");
    Option[document.getElementById("createtimeMinuteSelectTo").selectedIndex].value;
    return true;
}

function finder() {
    if (checkFromForQuery()== true)
    {
        document.getElementById("start").value='0';
        var form =  document.getElementById("form1");
        form.submit();
    }
}

function submit(formId,actionStr) {
    var form = document.getElementById(formId);
    form.action = actionStr;
    form.submit();
}