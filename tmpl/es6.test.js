'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var data = {
    name: '小明',
    age: 18,
    sex: '男'
};
var level = {
    class: "16年级"
};

var peoples = function () {
    function peoples(datas) {
        _classCallCheck(this, peoples);

        this.name = datas.name;
        this.age = datas.age;
        this.sex = datas.sex;
    }

    _createClass(peoples, [{
        key: 'showMe',
        value: function showMe() {
            console.log("我叫" + this.name + '是一个' + this.age + '岁的' + this.sex + '孩');
        }
    }]);

    return peoples;
}();

var students = function (_peoples) {
    _inherits(students, _peoples);

    function students(datas, level) {
        _classCallCheck(this, students);

        var _this = _possibleConstructorReturn(this, (students.__proto__ || Object.getPrototypeOf(students)).call(this, datas));

        _this.class = level.class;
        return _this;
    }

    _createClass(students, [{
        key: 'showStudent',
        value: function showStudent() {
            console.log(this.class + "+" + this.name);
        }
    }]);

    return students;
}(peoples);

var student = new students(data, level);
var people = new peoples(data);
people.showMe();
student.showStudent();
student.showMe();