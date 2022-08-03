import config from "../Global";
export default {
    sendData: (data, conf) => {
        console.log(data);
        return config.axiosHandle().post("provider/profile/password", data, conf);
    },
};
