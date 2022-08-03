import { StepOneSvg, StepThreeSvg, StepTwoFill, StepTwoSvg } from "../../Components/AfterUpload/AfterUploadSvgs";

const StepTwoPage = () => {
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
                        <StepTwoFill />
                        <div className="flex flex-col items-start justify-center">
                            <h6 className="m-0">Step 2:</h6>
                            <p className="m-0">Host profile</p>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-end gap-x-2.5">
                        <StepThreeSvg />
                        <div className="flex flex-col items-start justify-center">
                            <h6 className="m-0">Step 3:</h6>
                            <p className="m-0">Company information</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default StepTwoPage;
