
window.addEventListener("load", function(event) {


  task1.onclick = function() {
    alert(core.validNumber(prompt('Введите число:', 0)));
  };

  task2.onclick = function() {
    let days = prompt('Введите количество дней');
    alert("New date: "+ core.addDays(days));
  };

  task3.onclick = function() {
    let arr = prompt('Введите числа через запятую').split(',');
    alert("Even digits: "+ core.evenFilter(arr));
  };

  task4.onclick = function() {
    let arr = prompt('Введите слова через запятую').split(',');
    let numb = prompt('Укажите длину (кол-во символов) ', 0);
    alert("Result: "+ core.cutStrings(arr, numb));
  };

  task5.onclick = function() {
    alert(core.getFibonachi(prompt('Введите длину массива:', 0)));
  };
  
  task6.onclick = function() {
    const name = {
      firstName: 'Philip6',
      lastName: 'Fry',

      show(){
        alert (this.firstName);
      } 
  };

  alert(Object.values(name));

  alert("Result (copy):"+ (Object.values(core.myDeepCopy(name))));
  };

  task7.onclick = function() {

    const name = {
      firstName: 'Philip6',
      lastName: 'Fry',

      show(){
        alert (this.firstName);
      } 
  };

    const details = {
      job: 'Delivery Boy',
      employer: 'Planet Express'
  };

    alert(Object.values(name));
    alert(Object.values(details));

    alert("Result (copy):" + Object.values(core.extend(name, details)));
  };
  
  task8.onclick = function() {
    let base = prompt('Введите основание степени:');
    let exponent = prompt('Введите показатель степени:');
    let res = core.powBuilder(exponent);
    let res_exponent = res(base);
    alert(res_exponent);
  };

  task9.onclick = function() {
    var str = prompt('Введите слово:');
    alert(str.firstToUppercase());
 };

 task10.onclick = function() {
    alert("5,6,3,'yyy',7,8,22,7,'gt','ht','r', new Object()");
    alert("Amount of numbers" + core.countIntegerArguments(5,6,3,"yyy",7,8,22,7,"gt","ht","r", new Object()));
};

task11.onclick = function() {
  var func = ()=>{return alert("Kuku")};
    alert(func.toString());
    var time = prompt('Введите количество миллисекунд задержки:');
    core.executeWithDelay(func, time);
};

task12.onclick = function() {
  var id = prompt('Введите id:');
  let res = core.getComment(id).then((value) => {
    alert(value);
  });
    
};

task13.onclick = function() {
  const user = {
    name: 'Philip',
    gender: 'Fry',
    personalInfo:{
      dob:'05/14/1989',
      ssn:''
    }
  };
 
  alert("Age: " + core.getUserAge(user));
};

});

