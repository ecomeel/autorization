export interface ItfUsr {
    email: string,
    pass: string
}

export interface ItfUser {
    name: string;
    email: string;
    surname: string;
    id: string | number;
    phone: string;
    token?: string;

}