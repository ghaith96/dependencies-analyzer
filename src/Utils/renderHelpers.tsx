import React from 'react'
import constants from "./constants"
import { WrongUrl, NotFound, GenericError } from "../Components/ErrorComponents"

export const getErrorComponent = (errorCode: number) => {
    switch (errorCode) {
        case constants.ERROR.WRONG_URL_FORMAT:
            return <WrongUrl />
        case constants.ERROR.NOT_FOUND:
            return <NotFound />
        case constants.ERROR.BAD_REQUEST:
        default:
            return <GenericError />
    }
}
