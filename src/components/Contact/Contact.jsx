import ContactComponent from "./ContactComponent"
export default function Contact(){
    return (
        <div className="sm:min-h-full md:min-h-3/6 w-screen flex flex-col justify-center items-center py-10">
            <div className="text-black px-10 mt-8" >
                <ContactComponent/>
            </div>
        </div>
    )
}