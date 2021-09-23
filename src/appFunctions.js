function thousandSeparator(nStr) {
    if(nStr){
        let x = nStr.toString().split(".");
        let x2 = x.length > 1 ? `.${x[1]}` : "";
        return x[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ x2;
    }else{
        return nStr;
    }
}

export {
    thousandSeparator
}