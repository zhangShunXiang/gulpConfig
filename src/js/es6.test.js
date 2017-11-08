let data = {
    name: '小明',
    age: 18,
    sex: '男'
}
let level = {
    class: "16年级"
}
class peoples {
    constructor(datas) {
        this.name = datas.name
        this.age = datas.age
        this.sex = datas.sex
    }
    showMe() {
        console.log("我叫" + this.name + '是一个' + this.age + '岁的' + this.sex + '孩')
    }
}
class students extends peoples {
    constructor(datas, level) {
        super(datas);
        this.class = level.class
    }
    showStudent() {
        console.log( this.class + "+" + this.name)
    }
}

let student = new students(data, level)
let people = new peoples(data)
people.showMe()
student.showStudent()
student.showMe()

  

 var exincludeDomainArr=['https://js1.tdw.cn/','https://js2.tdw.cn/','https://js3.tdw.cn/','https://js4.tdw.cn/','https://js5.tdw.cn/'];
 var newArr=[];
         function fillterDomain(){
            for( var i =0; i<exincludeDomainArr.length;i++){
                newArr.push(`url.indexOf("${exincludeDomainArr[i]}")`)
            }
            return newArr.join(">1 || ").replace(/^".*"$/)
        }
        // console.log(fillterDomain())
        console.log("url.indexOf(‘base64,’) > -1 || url.indexOf(‘about:blank’) > -1  || url === '/'  ||" +fillterDomain())
console.log(eval("3>2"))

/^htttp:\/\/js2.com\/?$/


"//js.tdw.cn/abc.png"


"//js.tdw.cn/"
"http://js.tdw.cn"
indexOf("//js.tdw.cn/")