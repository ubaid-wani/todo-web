import React from "react";

const tabHeaders = [
    { key: "profile", label: "personal info" },
    { key: "contact", label: "Contact info" },
    { key: "payment", label: "payment info" },
    { key: "other", label: "other info" }
]
const Tab: React.FC = () => {

    const [stage, setStage] = React.useState("profile");

    const handleStage = (stageValue: string) => {
        setStage(stageValue);
    }

    return <div className="h-full w-full border border-gray-300 rounded flex-col mx-auto bg-lime-400 items-center justify-center">
        <div className="flex justify-around h-[10%] w-full bg-green-400 items-center text-white font-bold gap-1 text-lg">
            {tabHeaders.map((tab) => <div key={tab.key} className="flex items-center justify-center hover:bg-green-200 hover:text-green-600 cursor-pointer transition-all duration-300 h-full w-full" onClick={() => handleStage(tab.key)}>{tab.label}</div>)}
        </div>
        <div className="bg-red-200 w-full h-full flex items-center justify-center">
            <div className="bg-white w-[90%] h-[90%] flex items-start px-8 pt-4 justify-start text-green-800 font-bold text-lg">
                {stage === "profile" && <div>Profile component</div>}
                {stage === "contact" && <div>contact component</div>}
                {stage === "payment" && <div>payment component</div>}
                {stage === "other" && <div>other component</div>}
            </div>
        </div>

    </div>
}

export default Tab;