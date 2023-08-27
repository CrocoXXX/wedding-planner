/* eslint-disable react/prop-types */

function Button(props) {
    const { children } = props

    return (
        <button {...props} className='animate-bounce flex items-center gap-x-2 bg-soft-silver bg-opacity-50 hover:bg-black hover:bg-opacity-50 font-medium text-white text-opacity-100 px-4 py-2 rounded-full'>
            {children}
        </button>
    )
}

export default Button