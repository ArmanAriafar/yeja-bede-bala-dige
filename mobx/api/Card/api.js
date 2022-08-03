import config from "../Global";
export default {
    getCountries: () => {
        return config.axiosHandle().get("provider/profile/country");
    },
    editItemData: (data, id) => {
        console.log(id);
        return config.axiosHandle().post(`admin/dashboard/voucher/update/${id}`, data);
    },
    sendData: (data, conf) => {
        console.log(data);
        return config.axiosHandle().post("provider/profile/password", data, conf);
    },
};
