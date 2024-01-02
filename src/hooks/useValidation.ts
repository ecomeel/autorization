import { User } from "../types/data";
interface UserPasswords extends User {
    password: string;
    checkPassword: string;
    isPassConfirm: boolean;
}
interface ItfProps {
    name: string | null;
    surname: string | null;
    phone: string | null;
    email: string | null;
    password: string;
    checkPassword: string;
    isPassConfirm: boolean;
}
export function areInputsEmpty(fields: UserPasswords): boolean {
    let isEmpty = false;

    for (let field in fields) {
        if (field == "isPassConfirm") {
            continue;
        }

        const inputNode = document.getElementById(
            `reg${field}`
        ) as HTMLInputElement;
        if (inputNode.value) {
            inputNode.classList.remove("red-border");
        } else {
            inputNode.classList.add("red-border");
            isEmpty = true;
        }
    }
    return isEmpty;
}
export function validation(datas: UserPasswords): boolean {
    // if (!areInputsEmpty(datas)) {
    //     alert("Заполните все пустые поля!");
    //     return false;
    // } else if (!arePasswordsMatch(datas.password, datas.checkPassword)) {
    //     alert("Пароли не совпадают!");
    //     return false;
    // } else if (datas.isPassConfirm == false) {
    //     alert("Подтвердите пароль!");
    //     return false;
    // } else {
    //     console.log(true);
    //     return true;
    // }
    let isAccess = false;

    if (
        areInputsEmpty(datas) &&
        arePasswordsMatch(datas.password, datas.checkPassword) &&
        datas.isPassConfirm == false
    ){
        isAccess = true
    }
    if (!areInputsEmpty(datas)) {
        alert("Заполните все пустые поля!");
    }
    if (!arePasswordsMatch(datas.password, datas.checkPassword)) {
        alert("Пароли не совпадают!");
    }
    if (datas.isPassConfirm == false) {
        alert("Подтвердите пароль!");
    }
    return isAccess
}

export function arePasswordsMatch(
    password: string,
    checkPassword: string
): boolean {
    const pass = document.getElementById("regpassword") as HTMLInputElement;
    const checkPass = document.getElementById(
        "regcheckPassword"
    ) as HTMLInputElement;

    if (password === checkPassword) {
        pass.classList.remove("red-border");
        checkPass.classList.remove("red-border");
        return true;
    } else {
        pass.value = "";
        checkPass.value = "";
        pass.classList.add("red-border");
        checkPass.classList.add("red-border");
        return false;
    }
}
