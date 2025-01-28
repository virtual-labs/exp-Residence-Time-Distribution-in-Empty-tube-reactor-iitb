function verify_values(value:number, truevalue:number):boolean {

    if((truevalue == 0) && (value == truevalue)) {
        return true
    }


    let calculated_value = Math.abs((truevalue - value)/truevalue*100);

    if(calculated_value <= 4) {
        return true
    } else {
        return false;
    }
}

function random(min: number, max: number): number {
    let num = (max - min)*Math.random()+min;
    return num;
}

function std_deviation(num: number) {
    let std  = num/100.0;
    std = std/2;
    let dev = num - random(-std, std);

    return dev;
}

function regression_linear(x:number[],y:number[]):number[]{
    let sumx=0;
    let sumy=0;
    let sumxy=0;
    let sumxx=0;
    let n=x.length;
    for(let i=0;i<n;i++){
        sumx+=x[i];
        sumy+=y[i];
        sumxy+=x[i]*y[i];
        sumxx+=x[i]*x[i];
    }
    let pol=[];
    pol[0]=(sumx*sumy-n*sumxy)/(sumx**2-n*sumxx);
    pol[1]=(sumy-pol[0]*sumx)/n;
    return(pol);
}

function newton_raphson(a:number,b:number,c:number):number{
    let root=0.1;
    for(let i=0;i<=100;i++){
        root=root-f(a,b,c,root)/df(a,b,c,root);
    }
    return root;
}

function f(a:number,b:number,c:number,x:number):number{
    let fx=a*x-b*x**2*(1-Math.exp(-1/x))-c;
    return fx;
}

function df(a:number,b:number,c:number,x:number):number{
    let fx=a-b*x*2 + b*Math.exp(-1/x)+2*b*x*Math.exp(-1/x);
    return fx;
}
var c=32386.13959/411.4789768**2;
var a=2;
var b=2;