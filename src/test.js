var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function calculateTotal(price, tax) {
    return new Promise(function (resolve) {
        resolve(price + price * tax);
    });
}
function fetchTotal(price, tax) {
    return __awaiter(this, void 0, void 0, function () {
        var promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, calculateTotal(price, tax)];
                case 1:
                    promise = _a.sent();
                    console.log(promise);
                    return [2 /*return*/];
            }
        });
    });
}
//fetchTotal(100,0.1);
function optional(obj) {
    return "".concat(obj.x, ", ").concat(obj.y);
}
var obj = { x: "Mouni" };
//console.log(optional(obj));
function check(id) {
    return "My Id is ".concat(id);
}
// console.log(check("202"));
// console.log(check(102));
function employee(names) {
    if (Array.isArray(names)) {
        console.log("Hello " + names.join(" and "));
    }
    else {
        console.log("Welcome to the softsuave " + names);
    }
}
//employee(["Ram","Ravi"]);
//employee("Mounika");
var Person = /** @class */ (function () {
    function Person(name) {
    }
    return Person;
}());
var person = new Person("Jhon");
//console.log(person instanceof Person);
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square(side) {
        this.side = side;
    }
    return Square;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    return Rectangle;
}());
function calculate(shape) {
    if (shape instanceof Circle) {
        return Math.PI * shape.radius * shape.radius;
    }
    else if (shape instanceof Square) {
        return shape.side * shape.side;
    }
    else if (shape instanceof Rectangle) {
        return shape.length * shape.width;
    }
    else {
        return new Error("Unknown shape");
    }
}
var circle = new Circle(10);
var square = new Square(5);
var rectangle = new Rectangle(10, 12);
//console.log(calculate(circle));
//console.log(calculate(square));
//console.log(calculate(rectangle));
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.Push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.Pop = function () {
        return this.items.pop();
    };
    Stack.prototype.Peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.Size = function () {
        return this.items.length;
    };
    return Stack;
}());
var stack = new Stack();
stack.Push(2);
stack.Push(5);
stack.Push(6);
//console.log(stack.Peek());
//console.log(stack.Size());
function identity(x) {
    return x;
}
//console.log(identity<string>("Hello"));
//console.log(identity<number>(123));
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    Box.prototype.setValue = function (item) {
        this.value = item;
    };
    return Box;
}());
var box = new Box("Hi");
//console.log(box.getValue());
box.setValue("Hello");
//console.log(box.getValue());
var boxNum = new Box(6);
//console.log(boxNum.getValue());
boxNum.setValue(10);
//console.log(boxNum.getValue());
function f(n) {
    console.log(n.toFixed());
    console.log(n.toFixed(5));
}
//f(123456);
function multiply(n) {
    var x = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        x[_i - 1] = arguments[_i];
    }
    return x.map(function (y) { return n * y; });
}
var a = multiply(10, 1, 2, 3, 4, 5);
function greet(name, age) {
    if (age !== undefined) {
        return "name: ".concat(name, ", age:").concat(age);
    }
    else {
        return "name: ".concat(name);
    }
}
//console.log(greet("Mounika"));
//console.log(greet("Mouni",20));
function cal(a, b, callback) {
    var result = a * b;
    callback(result);
}
cal(5, 5, function (result) {
    console.log(result);
});
