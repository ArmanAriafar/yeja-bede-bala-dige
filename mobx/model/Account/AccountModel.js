import { makeAutoObservable } from "mobx";

export default class AccountModel {
    constructor() {
        makeAutoObservable(this);
    }
    new_pass = "";
    old_pass = "";

    setVals = (data) => {
        try {
            Object.keys(data).map((item, key) => {
                if (this[item] !== undefined) {
                    this[item] = data[item];
                } else {
                    console.log(item);
                }
            });
        } catch (e) {
            console.log(e);
        }
    };
}
