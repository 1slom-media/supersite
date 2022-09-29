export class InternalServerError extends Error {
    constructor(status, message){
        super()
        this.name = "InternalServerError"
        this.status = status
        this.message = message
    }
}
