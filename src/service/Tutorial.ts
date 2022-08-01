export default interface ITutorialData {
    id?: any | null,
    first_name: string;
    last_name: string;
    email: string;
    password: number | string;
    confirm_password: number | string;
    state: string;
    address: number | string;
    dp: string;
    cv: string;
    dob: string;
    gender: string;
    qualification: string;
    selected: Array<boolean>;
}