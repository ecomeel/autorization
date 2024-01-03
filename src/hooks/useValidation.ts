import { IUser } from "../types/data";

interface IUserPasswords extends IUser {
    password?: string;
    checkPassword?: string;
    isPassConfirm?: boolean;
    email?: string;
}

export function areInputsEmpty(): boolean {
    let isEmpty = false;
    const inputNodes = document.querySelectorAll(
        ".form__input"
    ) as NodeListOf<HTMLInputElement>;
    inputNodes.forEach((inputNode: HTMLInputElement): void => {
        if (inputNode.type == 'checkbox') return 

        if (!inputNode.value) {
            inputNode.classList.add('red-border');
            isEmpty = true
        } else {
            inputNode.classList.remove('red-border')
        }
    })
    return isEmpty
}

export function validation(datas: IUserPasswords): boolean {
    let isAccess = false;
    if (
        !areInputsEmpty() &&
        arePasswordsMatch(datas.password!, datas.checkPassword!) &&
        datas.isPassConfirm == true
    ) {
        isAccess = true;
    } else {
        if (areInputsEmpty()) {
            alert("Заполните все пустые поля!");
            return false;
        }
        if (!arePasswordsMatch(datas.password!, datas.checkPassword!)) {
            alert("Пароли не совпадают!");
            return false;
        }
        if (datas.isPassConfirm == false) {
            alert("Подтвердите пароль!");
            return false;
        }
    }
    return isAccess;
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
