//! Required
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { Modal } from "antd";
import {
    LogoutIcon,
    DeleteAccountIcon,
    DeactiveAccountIcon,
    UserCardIcon,
    ShowPasswordIcon,
} from "../../Components/UI/ProviderProfileIcons";
import Cookies from "js-cookie";

//! Mobx
import { observer } from "mobx-react";
import AccountController from "../../mobx/controller/Account/AccountController";

//! Comps
import ProviderCard from "../../Components/ProviderCard/ProviderCard";

//!Formik
const INITIAL_VALUES = {
    oldPass: "",
    newPass: "",
    checkPass: "",
};
const VALIDATE = yup.object().shape({
    oldPass: yup.string().required("Error: Please Enter Your Old Password"),
    newPass: yup
        .string()
        .min(6, "Error: Password Must Be At Least 6 Characters")
        .required("Error: Please Enter Your New Password"),
    checkPass: yup.string().oneOf([yup.ref("newPass"), null], "Error: Passwords must match"),
});

//! Comp
const EditAccount = observer(() => {
    //? Modal Controller Delete
    const [isModalVisibleDelete, setIsModalVisibleDelete] = useState(false);
    const [isModalVisibleDeactivate, setIsModalVisibleDeactivate] = useState(false);
    const showModalDelete = () => {
        setIsModalVisibleDelete(true);
    };
    const handleOkDelete = () => {
        setIsModalVisibleDelete(false);
    };
    const handleCancelDelete = () => {
        setIsModalVisibleDelete(false);
    };
    //? Modal Controller Deactivate
    const showModalDeactivate = () => {
        setIsModalVisibleDeactivate(true);
    };
    const handleOkDeactivate = () => {
        setIsModalVisibleDeactivate(false);
    };
    const handleCancelDeactivate = () => {
        setIsModalVisibleDeactivate(false);
    };

    const store = new AccountController();
    const sendData = (values) => {
        if (values.oldPass !== "" || values.newPass.pass !== "") {
            store.add({ old_pass: values.oldPass, new_pass: values.newPass.pass });
        }
        console.log("Formik Values", values);
    };
    const logOutHanlder = () => {
        store.logOut();
        Cookies.remove("token");
    };

    const [isActive, setIsActive] = useState(false);
    const [showPasswordType, setShowPasswordType] = useState("password");
    const [showPasswordType2, setShowPasswordType2] = useState("password");
    const [showPasswordType3, setShowPasswordType3] = useState("password");
    const togglePassword = () => {
        if (showPasswordType === "password") {
            setShowPasswordType("text");
            return;
        }
        setShowPasswordType("password");
    };
    const togglePassword2 = () => {
        if (showPasswordType2 === "password") {
            setShowPasswordType2("text");
            return;
        }
        setShowPasswordType2("password");
    };
    const togglePassword3 = () => {
        if (showPasswordType3 === "password") {
            setShowPasswordType3("text");
            return;
        }
        setShowPasswordType3("password");
    };
    return (
        <>
            <main className="h-full w-full">
                <div className="mx-auto my-7 flex w-full max-w-md items-center justify-between px-4 lg:max-w-6xl lg:px-8">
                    <h1 className="mb-0 font-sans text-3xl font-bold">Host profile</h1>
                    <button onClick={() => setIsActive((prev) => !prev)} className="lg:hidden">
                        <UserCardIcon />
                    </button>
                </div>
                <div
                    className="
                    mx-auto mb-6 grid w-full max-w-md items-start gap-x-10 justify-self-center px-4
                    pb-10 lg:mb-0 lg:max-w-6xl lg:grid-cols-[300px_1fr]"
                >
                    <ProviderCard setIsActive={setIsActive} isActive={isActive} />
                    <div className="h-full w-full">
                        <div className="flex w-full items-center justify-start">
                            <h1 className="font-sans text-xl font-bold text-gray-900">Change password</h1>
                        </div>
                        {/* Password Inputs */}
                        <Formik
                            initialValues={INITIAL_VALUES}
                            validationSchema={VALIDATE}
                            onSubmit={sendData}
                            validateOnMount
                        >
                            {(formik) => {
                                return (
                                    <Form className="mt-6 flex w-full flex-col items-center justify-center gap-y-3 lg:max-w-[25rem]">
                                        <div
                                            className="
                                        grid w-full grid-cols-[90%_10%] items-center justify-items-center rounded-[1.25rem] 
                                        border border-[#E5E7EB] py-3.5 pl-6 pr-2 text-sm font-medium"
                                        >
                                            <Field
                                                name="oldPass"
                                                type={showPasswordType}
                                                placeholder="Old Password"
                                                className="w-full outline-none"
                                            />
                                            <ShowPasswordIcon onClick={togglePassword} />
                                        </div>
                                        <p className="text-sm font-bold text-red-500">
                                            <ErrorMessage name="oldPass" />
                                        </p>
                                        <div
                                            className="
                                        grid w-full grid-cols-[90%_10%] items-center justify-items-center rounded-[1.25rem] 
                                        border border-[#E5E7EB] py-3.5 pl-6 pr-2 text-sm font-medium"
                                        >
                                            <Field
                                                name="newPass"
                                                type={showPasswordType2}
                                                placeholder="New Password"
                                                className="w-full outline-none"
                                            />
                                            <ShowPasswordIcon onClick={togglePassword2} />
                                        </div>
                                        <p className="text-sm font-bold text-red-500">
                                            <ErrorMessage name="newPass" />
                                        </p>
                                        <div
                                            className="
                                        grid w-full grid-cols-[90%_10%] items-center justify-items-center rounded-[1.25rem] 
                                        border border-[#E5E7EB] py-3.5 pl-6 pr-2 text-sm font-medium"
                                        >
                                            <Field
                                                name="checkPass"
                                                type={showPasswordType3}
                                                placeholder="Confirm new password"
                                                className="w-full outline-none"
                                            />
                                            <ShowPasswordIcon onClick={togglePassword3} />
                                        </div>
                                        <p className="text-sm font-bold text-red-500">
                                            <ErrorMessage name="checkPass" />
                                        </p>
                                        <button
                                            type="submit"
                                            disabled={!formik.isValid || formik.isSubmitting}
                                            className="btn-primary w-full !border-none outline-none lg:w-fit lg:self-start"
                                        >
                                            Save Changes
                                        </button>
                                    </Form>
                                );
                            }}
                        </Formik>
                        <div
                            className="
                            mt-14 grid w-full grid-cols-3 items-start justify-items-center gap-x-14 border-t border-gray-200 
                            pt-10 text-[0.938rem] font-medium lg:flex lg:grid-cols-none lg:items-center lg:justify-start"
                        >
                            <button
                                onClick={() => logOutHanlder()}
                                className="flex flex-col items-center justify-center gap-x-[0.375rem] gap-y-2 leading-4 lg:flex lg:flex-row lg:items-center lg:justify-start"
                            >
                                <LogoutIcon />
                                <span>Logout</span>
                            </button>
                            <button
                                onClick={showModalDelete}
                                className="
                                flex flex-col items-center justify-center gap-x-[0.375rem] gap-y-2 leading-4 
                                lg:flex lg:flex-row lg:items-center lg:justify-start"
                            >
                                <DeleteAccountIcon />
                                <span>Delete Account</span>
                            </button>
                            <button
                                onClick={showModalDeactivate}
                                className="
                                flex flex-col items-center justify-center gap-x-[0.375rem] gap-y-2 leading-4 lg:flex 
                                lg:flex-row lg:items-center lg:justify-start"
                            >
                                <DeactiveAccountIcon />
                                <span>Deactive Account</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Modal
                title="Do you really want to delete your account? "
                visible={isModalVisibleDelete}
                onOk={handleOkDelete}
                onCancel={handleCancelDelete}
                centered={true}
                className="!w-full !max-w-[44rem] !text-center"
                footer={[
                    <div
                        key="1234"
                        className="mb-1 grid w-full grid-cols-2 items-center gap-x-40 justify-self-center px-9"
                    >
                        <button
                            onClick={handleOkDelete}
                            className="rounded-[1.25rem] border border-primary-500 px-9 py-4 text-base font-semibold"
                        >
                            Delete account
                        </button>
                        <button
                            onClick={handleCancelDelete}
                            className="rounded-[1.25rem] bg-primary-500 px-9 py-4 text-base font-semibold text-white"
                        >
                            Deactivate account
                        </button>
                    </div>,
                ]}
            >
                <p className="w-full px-14 text-center text-sm font-normal leading-4">
                    If you delete your account, your data will be irrevocably deleted. Your journeys will go offline,
                    you will lose the overview of your bookings and you will no longer be able to access existing
                    messages from your guests.
                </p>
                <p className="mt-2 w-full px-14 text-center text-sm font-normal leading-4">
                    If you instead just want to temporarily stop receiving bookings or requests, you can also
                    temporarily deactivate your account. This will put your journeys to offline, but you can always
                    resume and reactivate your account if you want to reach new travelers again or retrieve information
                    about your existing guests.
                </p>
            </Modal>
            <Modal
                title="Do you really want to deactivate your account?"
                visible={isModalVisibleDeactivate}
                onOk={handleOkDeactivate}
                onCancel={handleCancelDeactivate}
                centered={true}
                className="!w-full !max-w-[44rem] !text-center"
                footer={[
                    <div
                        key="1234"
                        className="mb-1 grid w-full grid-cols-2 items-center gap-x-40 justify-self-center px-9"
                    >
                        <button
                            onClick={handleOkDeactivate}
                            className="rounded-[1.25rem] border border-primary-500 px-9 py-4 text-base font-semibold"
                        >
                            Deactivate account
                        </button>
                        <button
                            onClick={handleCancelDeactivate}
                            className="rounded-[1.25rem] bg-primary-500 px-9 py-4 text-base font-semibold text-white"
                        >
                            Logout
                        </button>
                    </div>,
                ]}
            >
                <p className="w-full px-14 text-center text-sm font-normal leading-4">
                    If you need a little break, you can simply deactivate your account temporarily. This will take your
                    journeys offline, but you can also start again at any time and reactivate your account if you want
                    to reach new travelers via moverii or retrieve information about your existing guests.
                </p>
            </Modal>
        </>
    );
});
export default EditAccount;
