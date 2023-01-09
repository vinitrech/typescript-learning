function anotherFunction<T extends number, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

interface Database {
    connection: string,
    username: string,
    password: string
}

anotherFunction(5, {
    connection: "abc",
    username: "abc",
    password: "abc"
})

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}

const sellableQuizzes = new Sellable<Quiz>()
const sellableCourses = new Sellable<Course>()

sellableQuizzes.addToCart({
    name: "name",
    type: "type"
})

sellableCourses.addToCart({
    name: "name",
    author: "author",
    subject: "subject"
})

console.log(sellableQuizzes)
console.log(sellableCourses)

export {}