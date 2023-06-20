import { TechnologiesStack } from "../components";
import { databaseList, frameworksList, languagesList, toolsList } from "../data";

export const Technologies = () => {
    return(
        <div
            id="technologies"
            className="h-screen pt-14 px-10 bg-slate-200 dark:bg-gray-800 dark:text-white"
        >
            <div
                className="flex flex-col items-center"
            >
                <h2
                    className="text-2xl"
                >Technologies</h2>
            </div>
           
            <TechnologiesStack title={"Languages"} list={languagesList} />
            <TechnologiesStack title={"Frameworks & Libraries"} list={frameworksList} />
            <TechnologiesStack title={"Database"} list={databaseList} />
            <TechnologiesStack title={"Tools"} list={toolsList} />
        </div>
    );
}