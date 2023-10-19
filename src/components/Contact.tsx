
export default function Contact(){
    return(
        <div id="contactSection" className="bg-gray-100 p-4 rounded-lg shadow-md w-[300px] mt-10">

            <div className="flex items-center p-2">
                <h2 className="mr-2 w-[70px]">Linkedin:</h2>
                <a href="https://www.linkedin.com/in/joaoricardoviana" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">joaoricardoviana</a>
            </div>
            <div className="flex items-center p-2">
                <h2 className="mr-2 w-[70px]">Github:</h2>
                <a href="https://github.com/JoaoRViana" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">JoaoRViana</a>
            </div>
            <div className="p-2 flex items-center ">
                <h2 className="mr-2 w-[70px]">Email :</h2>
                <h2>joaorviana98@gmail.com</h2>
            </div>
            <div className="flex items-center p-2">
                <h2 className="mr-2 w-[70px]">Celular :</h2>
                <h2>(37) 99817-2080</h2>
            </div>
        </div>
    )
}