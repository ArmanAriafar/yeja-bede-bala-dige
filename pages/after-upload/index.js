//! Required
import { Checkbox } from "antd";
import { useState } from "react";
import Link from "next/link";

//! Comps

import { PercentageIcon, StepOneSvg, StepThreeSvg, StepTwoSvg } from "../../Components/AfterUpload/AfterUploadSvgs";

//! Comp
const AfterUpload = () => {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const [value, setValue] = useState(19);
    return (
        <>
            <header className="w-full">
                <div className="mx-auto my-11 grid w-full max-w-6xl grid-cols-3 items-center justify-items-center px-4">
                    <div className="flex w-full items-center justify-start gap-x-2.5">
                        <StepOneSvg />
                        <div className="flex flex-col items-start justify-center">
                            <h6 className="m-0">Step 1:</h6>
                            <p className="m-0">Provision</p>
                        </div>
                        <div className="border-t border-dashed border-[#C4C4C4]" />
                    </div>
                    <div className="flex w-full items-center justify-center gap-x-2.5">
                        <StepTwoSvg />
                        <div className="flex flex-col items-start justify-center">
                            <h6 className="m-0">Step 2:</h6>
                            <p className="m-0 text-[#959499]">Host profile</p>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-end gap-x-2.5">
                        <StepThreeSvg />
                        <div className="flex flex-col items-start justify-center">
                            <h6 className="m-0">Step 3:</h6>
                            <p className="m-0 text-[#959499]">Company information</p>
                        </div>
                    </div>
                </div>
            </header>
            <main className="w-full">
                <div className="mx-auto w-full max-w-6xl px-4">
                    <h1 className="text-xl font-bold ">Commission</h1>
                    <p className="mb-5 mt-4 text-sm font-normal">
                        No risks, no hidden costs! Listing your journeys with moverii does not cost you a thing! It is
                        only after a successful booking that we take a commission of 19% on the booking price.
                    </p>
                    <Checkbox onChange={onChange} className="!text-sm !font-normal !text-[#959499] !accent-[#FF9F1C]">
                        I cannot accept 19% commission on my bookings.
                    </Checkbox>
                    <p className="m-0 mt-4">
                        Our mission is to build a bridge between you as a host and travelers with a passion for sports.
                        For this we want to work with a commission that is profitable for both parties. Just send us a
                        fair proposal for us to consider and get in touch with you.{" "}
                    </p>
                    <div className="mt-6 mb-8 flex w-full max-w-[340px] items-center justify-between rounded-[1.25rem] border bg-white p-1 pl-5">
                        <input
                            type="number"
                            placeholder="Basic Your suggestion"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="w-full text-base font-normal text-[#212121] outline-none"
                        />
                        <PercentageIcon />
                    </div>
                    <Link href="/after-upload/2">
                        <a className="rounded-[1.25rem] bg-[#FF9F1C] px-24 py-3 text-base font-medium text-white">
                            Next
                        </a>
                    </Link>
                </div>
            </main>
        </>
    );
};
export default AfterUpload;
