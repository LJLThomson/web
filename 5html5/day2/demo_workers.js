var i=0;

function timedCount()
{
    i=i+1;
    //3
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();