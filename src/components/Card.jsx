export default function Card({children}) {
    return(
        <>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md"></div>
        <div>{children}</div>
        </>
    )
}