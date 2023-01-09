abstract class TakePhoto {
    // abstract classes are full blueprints for objects
    // The objects can only extend 1 class, but can implement many interfaces
    // Abstract classes can have abstract methods and methods with implementation
    protected constructor(
        public cameraMode: string,
        public filter: string) {
    }

    abstract getSepia(): string

    logPhoto(): void{
        console.log("logging photo")
    }
}

class Instagram extends TakePhoto{
    constructor(public cameraMode: string, public filter: string) {
        super(cameraMode, filter);
    }

    getSepia(): string {
        return "getting sepia";
    }
}

const instagramObject = new Instagram("camera mode", "filter")

console.log(instagramObject.cameraMode, instagramObject.filter)
instagramObject.logPhoto();
console.log(instagramObject.getSepia())

export {}
