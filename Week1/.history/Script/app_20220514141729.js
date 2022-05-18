// IIFE -- Immediately Invoked Function Expression
// AKA(also known as) -- Anonymous Self-Executing Function

(function(){

    // 方法1，过时了
    function Start(){
               
        console.log("App Started!...");

        //Var 和 Let 的区别
        //Var
        for (var index = 0; index < 10; index++) {
            
            console.log(index);
        }

        console.log("wrong!"+index);  //index只在 for loop 里面定义，不应该在外部执行，永远不要在JS中使用var

        //Let
        for (let index = 0; index < 10; index++) {
            
            console.log(index);
        }

        console.log(index);  // 得到一个错误提示，因为index只在for loop内部存在。
    }

    // 方法2，named function, 更加常用
    // let Start = () => {
               
    //     console.log("App Started!...")
    // }


    window.addEventListener("load",Start);

})();