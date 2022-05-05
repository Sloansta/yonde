const FileSelected = () => {
    return (
        <div className="bg-gray-700 min-h-screen flex flex-col items-center justify-center p-0 m-0">
            <div className="text-gray-500 text-center text-3xl">
                <p>Please select a root for your manga folder.</p>
                <button className="text-white bg-gray-500 p-5 m-3 hover:cursor-pointer hover:shadow-xl rounded-md">Select Folder</button>
            </div>
        </div>
    )
};

export default FileSelected;