
interface Props {
    years: number;
    imgUrl: string;
}

export const Card = ({ years, imgUrl }:Props) => {
    return(
        <div
            className="flex flex-col items-center gap-2 w-16 h-16 p-4"
        >
            <img src={ imgUrl } className="w-full h-full dark:bg-slate-200 dark:border-4 dark:border-slate-200 dark:rounded-md hover:animate-bounce" />
            <p
                style={{ fontSize: 8 }}
                className="font-semibold"
            >{ years } { years > 1 ? ' years' : ' year'}</p>
        </div>
    );
}