
(()=>{

  String.prototype.firstToUppercase = function(){
    return this[0].toUpperCase() + this.slice(1);;
  };

  class MyLibrary{

    validNumber(n){

      if(n.length < 1)
        return false;

      let data = +n;

      if(typeof(data) === "number")
        return isFinite(data)? true:false;
      else
        return false;
    };
   
    addDays(days)
    {
        let date = new Date();
        return new Date(+date.setDate(date.getDate() + parseInt(days))); ;
    }

    evenFilter(source=[])
    {
        let arr = [];

        source.forEach(element => {
          if(element % 2 == 0)
          arr.push(element);
        });

        if(arr.length>0)
          return arr;
        else
          return "not found";
    }

    cutStrings(source=[], number)
    {
      let arr = [];

      for(var i = 0; i < source.length; i++)
        arr[i] = source[i].replace(" ", "").substr(0, number)

      return arr;
    }

    getFibonachi(length)
    {
      let fib= [];
      fib[0] = 0;
      fib[1] = 1;    

      for (var i = 2; i <= length - 1; i++) {        
        fib.push(fib[i - 2] + fib[i - 1]);
      }
      return fib;
    }

    myDeepCopy(source)
    {  
      const deepClone = JSON.parse(JSON.stringify(source));

      const copy = {};
      for(const i in source) {
        if (source[i] instanceof Object) { 
          try{
            copy[i] = myDeepCopy(source[i]);
          }
          catch(Ex)
          {
            copy[i] = (source[i]);
          }
          continue;
        }
        
        copy[i] = source[i];
      }
      return copy;
    }
  
    extend(source, bonus)
    {
      return Object.assign(source, bonus);
    }

    powBuilder(pow)
    {
        return (value) => { return Math.pow(value, pow); }
    }

    countIntegerArguments(args)
    {
      let count = 0;
      for(let i = 0; i < arguments.length; i++)
      {
        if(typeof(arguments[i]) === "number")
        count++;
      }
      return count;
    }

    countIntegerArgumentsTwo()
    {
      let count = 0;
      for(let i = 0; i < arguments.length; i++)
      {
        if(typeof(arguments[i]) !== "number")
        count++;
      }
      return arguments.length-count;
    }

    executeWithDelay(func, number)
  {
      setTimeout(func, number);
  }

  getComment(id)
  {
    let _id = parseInt(id);
      if(typeof(_id) !== "number")
      return;
      else
      {
        let url = "https://jsonplaceholder.typicode.com/posts/"+ _id;

        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open("GET", url);
          xhr.onload = () => resolve(xhr.responseText);
          xhr.onerror = () => reject(xhr.statusText);
          xhr.send();
        });
      }
  }


  getUserAge(user)
  {
    let {
      name,
      gender,
      personalInfo: {
        dob,
        ssn
      }
    } = user;

    let age = new Date().getFullYear() - new Date(dob).getFullYear();

    return age;
  }

};

  const core = new MyLibrary();

  window.core = core;

})()