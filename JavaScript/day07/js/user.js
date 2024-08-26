const inputs = document.querySelectorAll("[type=text]");
for(const tag of inputs){
    tag.addEventListener("blur",handleBlur);
}
const pass = document.querySelectorAll("[type=password]");
for(const tag of pass){
    tag.addEventListener("blur",handleBlur)
}
const result = document.getElementById("result");
document.joinForm.userid.focus();

let varcheck = false;

function handleBlur(e){
    const target = e.target;

    if(target.id == "userid"){
        if(target.value == ""){
            result.innerHTML = "아이디를 입력하세요!";
            target.focus();
            varcheck = false;
            return;
        }
        else if(target.value.length < 5 || target.value.length > 12 ){
            result.innerHTML = "아이디는 5자 이상 12자 이하로 입력하세요!";
            userid.focus();
            userid.value = "";
            varcheck = false;
            return;
        }
        else{
            result.innerHTML = "";
        }
    }
    else if(target.id == "userpw"){
        if(target.value == ""){
            result.innerHTML = "비밀번호를 입력하세요!";
            target.focus();
            varcheck = false;
            return;
        }
        else if(target.value.length < 8){
            result.innerHTML = "비밀번호를 8자 이상으로 입력하세요!";
            target.value = ""
            target.focus();
            varcheck = false;
            return;
        }
        else{
            result.innerHTML = "";
        }
    }
    varcheck = true;
}

function sendit(){
    const joinForm = document.joinForm;

    const userid = joinForm.userid;
    if(userid.value == ""){
        alert("아이디를 입력하세요!");
        userid.focus();
        return;
    }
    if(userid.value.length < 5 || userid.value.length > 12){
        alert("아이디는 5자 이상 12자 이하로 입력하세요!");
        userid.focus();
        userid.value = "";
        return;
    }
    // const test = "abcdefghijklmnopqrstuvwxyz0123456789";
    // for(let i=0;i<userid.value.length;i++){
    //     if(!test.includes(userid.value[i])){
    //         alert("잘못된 문자가 사용되었습니다!");
    //         userid.focus();
    //         userid.value = "";
    //         return
    //     }
    // }
    //영어 대문자, 소문자, 숫자로만 이루어져 있는지 확인하는 정규식
    const exp_id = /^[A-za-z0-9]+$/
    if(!exp_id.test(userid.value)){
        alert("잘못된 문자가 사용되었습니다!");
        userid.focus();
        userid.value = ""
        return;
    }

    const userpw = joinForm.userpw;
    const userpw_re = joinForm.userpw_re;

    if(userpw.value == ""){
        alert("비밀번호를 입력하세요!");
        userpw.focus();
        return;
    }
    const pwtxt = document.getElementById("pwtxt");
    if(pwtxt.innerHTML != "비밀번호가 확인되었어요~"){
        alert("비밀번호 확인을 다시 해주세요!");
        userpw.focus();
        return;
    }

    const username = joinForm.username;
    if(username.value == ""){
        alert("이름을 입력하세요!")
        username.focus();
        return;
    }
    //한글로 이루어졌는지 검사하는 정규식
    const exp_name = /^[가-힣]+$/
    if(!exp_name.test(username.value)){
        alert("이름에는 한글만 입력하세요!");
        username.value = ""
        username.focus();
        return;
    }
    let flag = false;
    const hobbies = joinForm.userhobby;
    for(const hobby of hobbies){
        if(hobby.checked){
            flag = true;
            break;
        }
    }
    if(!flag){
        alert("취미는 적어도 1개 이상 선택해 주세요!")
        return;
    }

    //handleBlur의 유효성 검사도 통과했다면
    if(varcheck){
        joinForm.submit();
    }
}
function pwCheck(){
    const joinForm = document.joinForm;
    const userpw = joinForm.userpw;
    const userpw_re = joinForm.userpw_re;
    const pwtxt = document.getElementById("pwtxt");

    if(userpw.value == ""){
        pwtxt.innerHTML = "비밀번호를 입력하세요!"
    }
    else if(userpw.value.length < 8){
        pwtxt.innerHTML = "비밀번호는 8자 이상으로 입력하세요!";
    }
    else if(userpw.value != userpw_re.value){
        pwtxt.innerHTML = "비밀번호 확인을 다시 해주세요!"
    }
    else{
        pwtxt.innerHTML = "비밀번호가 확인되었어요~"
    }
}