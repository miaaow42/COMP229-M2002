// IIFE -- Immediately Invoked Function Expression
// AKA(also known as) -- Anonymous Self-Executing Function

(function(){

    // 方法1，过时了
    function Start(){
               
        console.log("App Started!...");

        // for (var index = 0; index < 10; index++) {
            
        //     console.log(index);
        // }

        // console.log("worng!"+index);

        for (let index = 0; index < 10; index++) {
            
            console.log(index);
        }

        console.log(index);
    }

    // 方法2，named function, 更加常用
    // let Start = () => {
               
    //     console.log("App Started!...")
    // }


    window.addEventListener("load",Start);

})();