import { IUser } from "../types/data";

interface IUserPasswords extends IUser {
    password?: string;
    checkPassword?: string;
    isPassConfirm?: boolean;
    email?: string;

}

export function areInputsEmpty(fields: IUserPasswords): boolean {
    let isEmpty = false;

    for (let field in fields) {
        if (field == "isPassConfirm") {
            continue;
        }

        const inputNode = document.getElementById(
            `reg${field}`
        ) as HTMLInputElement;
        if (!inputNode.value) {
            inputNode.classList.add("red-border");
            isEmpty = true;
        } else {
            inputNode.classList.remove("red-border");
        }
    }
    return isEmpty;
}

export function validation(datas: IUserPasswords): boolean {

    let isAccess = false;
    if (
        !areInputsEmpty(datas) &&
        arePasswordsMatch(datas.password!, datas.checkPassword!) &&
        datas.isPassConfirm == true
    ) {
        isAccess = true;
    } else {
        if (areInputsEmpty(datas)) {
            alert("Заполните все пустые поля!");
            return false
        };
        if (!arePasswordsMatch(datas.password!, datas.checkPassword!)) {
            alert("Пароли не совпадают!");
            return false
        }
        if (datas.isPassConfirm == false) {
            alert("Подтвердите пароль!");
            return false
        }
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

    if (password != checkPassword) {
        pass.value = "";
        checkPass.value = "";
        pass.classList.add("red-border");
        checkPass.classList.add("red-border");
        return false;
    }
    pass.classList.remove("red-border");
    checkPass.classList.remove("red-border");
    return true;
}
