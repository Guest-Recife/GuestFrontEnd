// interface buttonInterface{
//     children: string,
//     color: string,
//     fn: Function
// }

export function Button(button) {

    return (
        <button
        onClick={button.fn}
        type="button"
        className='mt-8 w-3/6 h-8 bg-orange-guest hover:bg-hover-orange-guest transition duration-300 text-white py-2 px-4 rounded-2xl flex items-center justify-center
        max-sm:w-[70vw]'>
            {button.children}
        </button>
    )
}
