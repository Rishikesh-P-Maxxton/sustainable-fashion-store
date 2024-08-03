export interface Users {
    name: string;
    email: string ;// required with minimum 5 characters
    address: {
    street: string; // required
    postcode: string;
    }
}
