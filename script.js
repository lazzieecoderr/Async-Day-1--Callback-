setTimeout(()=>{
    console.log("5");
    setTimeout(()=>{
        console.log("4");
        setTimeout(()=>{
            console.log("3");
            setTimeout(()=>{
                console.log("2");
                setTimeout(()=>{
                    console.log("1");
                    setTimeout(()=>{
                        console.log("Welcome to Async Programming");
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)