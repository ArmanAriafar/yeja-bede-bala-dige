import Api from "../../api/Card/api";
import { makeAutoObservable } from "mobx";
import AccountModel from "../../model/Account/AccountModel";
import { message } from "antd";

export default class CardController {
    error = {};
    loading = false;
    data = {};

    constructor() {
        makeAutoObservable(this);
    }

    getCountries = () => {
        Api.getCountries()
            .then((response) => {
                console.log(response.data.items);
                // this.data = response.
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    add = (data) => {
        this.loading = true;
        Api.sendData(data)
            .then((response) => {
                this.loading = false;
                message.success("Success add");
                console.log(response);
            })
            .catch((err) => {
                this.loading = false;
                if (err.response.status !== 422) {
                    message.error("errorinduringadd");
                } else {
                    this.error = err.response.data.errors;
                }
            });
    };

    edit = (data, id) => {
        this.loading = true;
        Api.editItemData(data, id)
            .then((response) => {
                this.loading = false;
                message.success("data edited Success");
            })
            .catch((err) => {
                this.loading = false;
                if (err.response.status !== 422) {
                    message.error("error in during edit data");
                } else {
                    this.error = err.response.data.errors;
                    console.log(this.error);
                }
            });
    };
}
