type ResponseSuccess<T> = {
    ok: true;
    status: number;
    data: T
}

type ResponseError = {
    ok: false;
    status: number;
    data: Error;
}

export type Response<T> = ResponseSuccess<T> | ResponseError;
