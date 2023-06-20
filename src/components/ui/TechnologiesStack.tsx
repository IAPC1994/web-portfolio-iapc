import { Card } from ".";
import { technologies } from "../../interfaces";

interface Props{
    title: string;
    list: technologies[];
}
export const TechnologiesStack = ({ title, list }:Props) => {
    return(
        <>
            <div
                className="text-sm flex flex-col items-center mt-5"
            >
                <h3>➡️ { title } ⬅️</h3>
            </div>
            <div
                className="grid grid-cols-5"
            >
                {
                    list.map(({ technology, years, imgUrl })=>(
                        <Card key={ technology } years={years} imgUrl={imgUrl} />
                    ))
                }
            </div>
        </>
    );
}