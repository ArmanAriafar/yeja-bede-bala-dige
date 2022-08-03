import config from "../Global";
export default {
    logOut: () => {
        return config.axiosHandle().get("provider/user/logout");
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
