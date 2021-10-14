$(document).ready(function(){
    let  checkOperator=0;
    let checkEquality=0;
    let res=0;
    let buffer = "0";
    let previousOperator;
    function buttonClick(event)
    {
        var a=$(event.target);
        var b=a.text();
        if(isNaN(b))
        {
        console.log(b);
        operation(b);
        }
        else
        numbers(b);
        $('#screen').text(buffer);
    }


    //storing each  clicked digit in buffer
    function numbers(digit)
    {
        if(buffer == '0')
        buffer = digit;
        else if (checkEquality==1 && checkOperator==0)
        {
        buffer = digit;
        checkEquality=0;
        }
        else
        {
            buffer+=digit;
        }
        $('#screen').text(buffer);
    }

    //handling the clicked operator
    function operation(operator)
    {
        switch(operator)
        {
            case 'C':
                buffer='0';
                res=0;
                $('#screen').text(buffer);
                break;
            case '=':
                checkOperator=0;
                checkEquality=1;
                if(previousOperator === null)
                alert('Invalid operation');
                else
                {
                flushOperation(parseInt(buffer));
                previousOperator=null;
                buffer=res;
                res=0;
                }
                break;
            case '←':
                if(buffer.length === 1)
                buffer='0';
                else
                buffer=buffer.substring(0,buffer.length-1);
                break;
            case '-':
            case '÷':
            case '+':
            case '×':
            case  '%':
                checkOperator=1;
                calculation(operator);
                break;
        }
    }
    function calculation(symbol)
    {
        console.log(symbol);
        if(buffer === '0')
        {
        alert('Enter the value !');
        return;
        }
            const intBuffer = parseInt(buffer)
            console.log(intBuffer);
            if(res===0)
            res=intBuffer;
            else
            flushOperation(intBuffer);

            previousOperator=symbol;
            buffer='0';
            console.log(res);
        
    }
    function flushOperation(intBuffer)
    {

        if(previousOperator === '+')
        res+=intBuffer;
        else if (previousOperator === '-')
        res-=intBuffer;
        else if (previousOperator === '×')
        res*=intBuffer;
        else if(previousOperator === '%')
        res%=intBuffer;
        else
        res/=intBuffer;
    }
    $('.child-item').click(function(event){
        buttonClick(event);
    })
})