class User {
    public email: string // public is the default access modifier
    private name: string
    readonly active: boolean = false

    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

class SecondUser {
    readonly active: boolean = false
    protected _testField: string = "test field" // accessible only by the class and its inheritance members

    // adding access modifiers declare the fields in the constructor
    constructor(public email: string, public name: string, private _userId: string) {
    }

    get getUserId(): string{
        return this._userId
    }

    set setUserId(id: string){ // setters cannot have return type specified, not even :void
        this._userId = id
    }

    get getTestField(): string{
        return this._testField
    }

    set setTestField(field: string){ // setters cannot have return type specified, not even :void
        this._testField = field
    }
}

class SubUser extends SecondUser{

}

const randomUser = new User("user@email.com", "user name")
const secondUser = new SecondUser("email@email.com", "name surname", "asijdioa123")
console.log(secondUser.getUserId)
secondUser.setUserId = "aaaa111222222"
console.log(secondUser.getUserId)
console.log(randomUser.email)


const subUser = new SubUser("email@email.com", "name surname", "asijdioa123")

console.log(subUser.getTestField)
subUser.setTestField = "testField"
console.log(subUser.getTestField)

export {}