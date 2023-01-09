// Interfaces can be changed after being created, as types cannot

interface User extends Role { // extending other interfaces
    email: string,
    readonly userId: number,
    googleToken?: string

    startTrail(): string
}

interface User {
    githubId: string // adding more properties to the interface
}

interface Role {
    role: "user" | "admin" | "supervisor"
}

const user: User = {
    role: "user",
    email: "email@email.com",
    userId: 12345,
    googleToken: "string",
    githubId: "asjdioj34ioj1io23",

    startTrail: function(): string{
        return `${this.email}, ${this.userId}, ${this.googleToken}`
    }
}

console.log(user, user.startTrail())

export {}