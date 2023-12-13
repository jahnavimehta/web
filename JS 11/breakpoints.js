function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    return two() + one();
}

three(); //add break point on this line
