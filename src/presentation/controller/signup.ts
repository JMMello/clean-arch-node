import { MissingParamError } from "../errors/missing-param-error"
import { badRequest } from "../helpers/http-helper"
import { HttpRequest, HttpResponse } from "../protocols/http"
import { Controller } from "../protocols/controller"

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFieds = ['name', 'email', 'password', 'password_confirmation']

    for(const field of requiredFieds){
      if(!httpRequest.body[field]){
        return badRequest(new MissingParamError(field))
      }
    }
  }
}