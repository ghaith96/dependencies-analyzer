import React from 'react'
import constants from "./constants"
import { WrongUrl, NotFound, GenericError } from "../Components/ErrorComponents"

export const getErrorComponent = (response) => {
    let { status } = response
    switch (status) {
        case constants.ERROR.WRONG_URL:
            return <WrongUrl />
        case constants.ERROR.NOT_FOUND:
            return <NotFound />
        case constants.ERROR.BAD_REQUEST:
        default:
            console.log(`${constants.MESSAGES.SOMETHING_WENT_WRONG} ${JSON.stringify(response)}`)
            return <GenericError />
    }
}