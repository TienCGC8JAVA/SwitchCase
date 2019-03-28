function task1()
{
    let browser = prompt("Enter a browser");

    switch (browser)
    {
        case 'Edge':
            alert("You've got the Edge");
            break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert("Okay we support these browsers too");
            break;
        default:
            alert("We hope that this page looks ok!");
    }
}

function task2()
{
    let a = parseInt(prompt("a?", " "));

    switch (a)
    {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert('2,3');
    }
}

function task3()
{
    let value = parseInt(prompt("Type a name", 0));

    switch (value)
    {
        case 0:
            alert(0);
            break;
        default:
            value > 0 ? alert(1) : alert(-1);
    }
}