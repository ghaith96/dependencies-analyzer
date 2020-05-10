import React from 'react'
import { WrongUrl, NotFound, GenericError } from "../Components/ErrorComponents"
import { AppError } from './types';

export const getErrorComponent = (error: AppError) => {
    switch (error) {
        case AppError.WRONG_URL_FORMAT:
            return <WrongUrl />
        case AppError.NOT_FOUND:
            return <NotFound />
        case AppError.BAD_REQUEST:
        default:
            return <GenericError />
    }
}
