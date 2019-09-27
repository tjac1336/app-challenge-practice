document.querySelector('#calculate').addEventListener('click', shortestStringFuction);

function shortestStringFuction() {
    const string1 = document.querySelector('#string1');
    const string2 = document.querySelector('#string2');
    const string3 = document.querySelector('#string3');
    

    let str1length = (string1.value).length;
    let str2length = (string2.value).length;
    let str3length = (string3.value).length;


    if (str1length < str2length && str1length < str3length)
    {
        document.querySelector('#shortestStringLbl').innerHTML = string1.value;
    }
    if (str2length < str1length && str2length < str3length)
    {
        document.querySelector('#shortestStringLbl').innerHTML = string2.value;
    }
    if (str3length < str1length && str3length < str2length)
    {
        document.querySelector('#shortestStringLbl').innerHTML = string3.value;
    }
    if (str1length == str2length || str1length == str3length || str2length == str3length)
    {
        document.querySelector('#shortestStringLbl').innerHTML = "Two or more are equal"
    }

};
