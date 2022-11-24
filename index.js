function tri(t) {
    let j;
    let tmp;
    for (let i = 0; i < t.length; i++) {
    tmp =t[i];
      j=i-1;
    
    while (j>=0 && t[j]>tmp) {
     t[j+1] =t[j];
     j=j-1;
    }
    t[j+1]=tmp;
    }
    console.log(t);
    }
    tri([3,2,7,4]);