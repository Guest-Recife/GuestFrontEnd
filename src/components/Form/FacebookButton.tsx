interface buttonInterface{
    children: string,
}

export function FacebookButton(button: buttonInterface){
    return (
        <button
        className='mt-8 w-3/6 h-8 text-sm bg-facebook-blue hover:bg-blue transition 2ms text-white py-2 px-4 rounded-2xl flex items-center justify-center
        max-sm:w-[70vw]'>
            {button.children}
        </button>
    )
}
